import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import { observable, observe } from 'mobx'
import { observer } from 'mobx-react'
import posed from 'react-pose'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

import BottomNavigator from './components/BottomNavigator'
import asyncComponent from './components/AsyncComponent'
import { mainRouter, user, token } from './services/stores'

const Home = asyncComponent(() =>
  import(/*webpackChunkName: "Home"*/ './screens/Home')
)

const Cart = asyncComponent(() =>
  import(/*webpackChunkName: "Cart"*/ './screens/Cart')
)

const Account = asyncComponent(() =>
  import(/*webpackChunkName: "Account"*/ './screens/Account')
)

const AddProduct = asyncComponent(() =>
  import(/*webpackChunkName: "AddProduct"*/ './screens/AddProduct')
)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const ContentContainer = styled.div`
  display: block;
  background: white;
  position: relative;
  min-height: 100vh;
`

const PosedContainer = posed(ContentContainer)({
  [mainRouter.STATE_OPEN_CONTAINER]: {
    opacity: 1,
    transition: { duration: 700 },
  },
  [mainRouter.STATE_CLOSE_CONTAINER]: {
    opacity: 0,
    transition: { duration: 700 },
  },
})

const StyledAppBar = styled(AppBar)`
  && {
    padding: 0px;
    background: white;
    color: #424242;
    /* border-bottom: 1px solid #dadada; */
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 
    0px 4px 5px 0px rgba(0, 0, 0, 0), 
    0px 1px 24px 0px rgba(0,0,0,0.12);
  }
`

const StyledToolbar = styled(Toolbar)`
  && {
    justify-content: space-between;
    min-height: unset;
    min-width: ${props => props.width};

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:visited {
        text-decoration: none;
        color: inherit;
      }

      .title {
        margin-left: 20px;
        font-weight: bold;
        display: flex;
        width: 100px;
      }

      .logo {
        height: 45px;
        padding: 10px 0;
    
        img {
          height: 100%;
        }
      }
    }
  }
`
 
const Container = styled.div`
  display: block;
`

@observer
class AppRouter extends Component {
  @observable isShouldLoginDialogOpened = false
  @observable routers = []

  constructor(props) {
    super(props)
    this.initUnauthorizedRouters()
  }

  componentWillReceiveProps(props) {
    if (this.props.location.pathname !== props.location.pathname) 
      mainRouter.updateRoute(this.routers)
  }

  componentDidMount() {
    mainRouter.updateRoute(this.routers)

    if (!user.isLoggedIn) this.initUnauthorizedRouters()
    else this.initAuthorizedRouters()

    this.userDisposer = observe(user, 'isLoggedIn', data => {
      if (data.oldValue === data.newValue) return
      if (!data.newValue) this.initUnauthorizedRouters()
      else this.initAuthorizedRouters()
    })

    this.tokenDisposer = observe(token, 'isSettingUp', data => {
      if (data.oldValue === data.newValue) return
      if (!data.newValue) {
        if (!user.isLoggedIn) {
          user.logout()
          this.initUnauthorizedRouters()
        } else this.initAuthorizedRouters()
      }
    })
  }

  componentWillUnmount() {
    if (this.userDisposer) this.userDisposer()
    if (this.tokenDisposer) this.tokenDisposer()
  }

  initAuthorizedRouters() {
    this.routers = [
      {
        icon: 'home',
        label: 'Home',
        path: mainRouter.PATH_HOME,
        outline: true,
      },
      {
        icon: 'cart',
        label: 'Cart',
        path: mainRouter.PATH_CART,
        outline: false,
      },
      {
        icon: 'account-circle',
        label: 'Account',
        path: mainRouter.PATH_ACCOUNT,
        outline: true,
      },
    ]
  }

  initUnauthorizedRouters() {
    this.routers = [
      {
        icon: 'home',
        label: 'Home',
        path: mainRouter.PATH_HOME,
        outline: true,
      },
      {
        icon: 'cart',
        label: 'Cart',
        path: mainRouter.PATH_CART,
        outline: false,
      },
      {
        icon: 'account-circle',
        label: 'Account',
        path: mainRouter.PATH_ACCOUNT,
        outline: true,
      },
    ]
  }

  openShouldLoginDialog = () => {
    this.isShouldLoginDialogOpened = true
  }

  renderRouter() {
    return (
      <PosedContainer 
        pose={mainRouter.containerPose} 
        initialPose={mainRouter.STATE_CLOSE_CONTAINER}
      >
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
          <Route path="/sell/products/add" component={AddProduct} />
          <Redirect from="*" to="/home" />
        </Switch>
      </PosedContainer>
    )
  }

  renderAppBar() {
    return (
      <StyledAppBar
        position="fixed"
      >
        <StyledToolbar width="200px" >
          <Link className="info" to="/" >
            <div className="logo" >
              <img src="/images/icons/logo_blue.png" alt="logo" />
            </div>

            <span className="title">{
              mainRouter.selectedRoute && mainRouter.selectedRoute.label
            }</span>
          </Link>
        </StyledToolbar>
      </StyledAppBar>
    )
  }

  renderDialogs() {
    return (
      <React.Fragment>
        <Dialog
          open={this.isShouldLoginDialogOpened}
          TransitionComponent={Transition}
          onClose={() => {
            this.isShouldLoginDialogOpened = false
          }}
        >
          <DialogTitle>Login Alert</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You have to login due to access it!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.isShouldLoginDialogOpened = false} color="secondary">
              Nope
            </Button>
            <Button onClick={() => {
              this.props.history.push('/auth/login')
            }} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Container>
        {this.renderAppBar()}
        {this.renderRouter()}
        <BottomNavigator circle data={this.routers} />

        {this.renderDialogs()}
      </Container>
    )
  }
}

export default AppRouter