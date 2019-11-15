import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './App.module.scss'
import axios from 'axios'
import Fab from '@material-ui/core/Fab'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Snackbar from '@material-ui/core/Snackbar'
import DialogContentText from '@material-ui/core/DialogContentText'
import 'react-lazy-load-image-component/src/effects/blur.css'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { 
  snackbar, 
  token,
  overlayLoading,
  fab,
  serviceWorker,
  user,
} from './services/stores'
import { observer } from 'mobx-react'
import { observe } from 'mobx'

import { BASE_URL, IS_PRODUCTION } from './config'
import firebaseStore from './services/stores/firebaseStore'
import asyncComponent from './components/AsyncComponent'

// import Auth from './screens/Auth'
// import Customers from './screens/Customers'
// import LandingPage from './screens/LandingPage'
const Auth = asyncComponent(() =>
  import(/*webpackChunkName: "Auth"*/ './screens/Auth/SignIn')
)
const AppRouter = asyncComponent(() =>
  import(/*webpackChunkName: "AppRouter"*/ './AppRouter')
)

axios.defaults.baseURL = BASE_URL
axios.defaults.headers['Accept'] = 'application/json'
axios.defaults.headers['Content-Type'] = 'application/json'
axios.interceptors.response.use(
  res => res,
  err => {
    if (err.response) {
      if (err.response.status === 401) {
        user.logout()
      }
    }
    return Promise.reject(err)
  }
)

const StyledFab = styled(Fab)`
  && {
    display: ${() => fab.isActive ? 'block' : 'none'};
    position: fixed;
    bottom: ${() => fab.bottomPosition ? fab.bottomPosition : 60}px;
    right: 10px;
  }
`

const Container = styled.div`
  display: block;
  min-height: 100vh;
  background: white;

  .overlay-loading {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .overlay-loading-2 {
      padding: 20px 30px;
      border-radius: 20px;
      background: white;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
      font-size: 17pt;

      .wrapper {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
`

@observer
class App extends Component {
  async componentDidMount() {
    this.tokenDisposer = observe(token, 'isSettingUp', data => {
      if (data.oldValue === data.newValue) return
      if (!data.newValue && !user.isLoggedIn) {
        // console.log('should logout')
        user.logout()
      }
    })
    await token.setup()
    await firebaseStore.init()
    await firebaseStore.monitorStateChanged()
    if (IS_PRODUCTION) serviceWorker.getNotifPermission()
    serviceWorker.checkAppInstalledStatus()
    console.log('this is the update 1.8')
  }

  renderOverlayLoading() {
    if (overlayLoading.isActive)
      return (
        <section>
          <div className="overlay-loading">
            <div className="overlay-loading-2">
              <div className="wrapper">
                <CircularProgress />
              </div>
              <div>Processing ..</div>
            </div>
          </div>
        </section>
      )
  }

  registerReactive = () => {}

  render() {
    this.registerReactive(fab.isActive)
    this.registerReactive(fab.bottomPosition)

    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={AppRouter} />
          </Switch>
        </BrowserRouter>

        <section>
          <Dialog
            open={serviceWorker.shouldUpdate}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Application update is available!
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Click reload to update the app
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={serviceWorker.refreshPage}>
                {`Reload ${serviceWorker.countDown}`}
              </Button>
            </DialogActions>
          </Dialog>
        </section>

        <section>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={snackbar.data.active}
            autoHideDuration={snackbar.data.timeout}
            message={snackbar.data.label}
            onClose={() => snackbar.hide()}
            data-cy="snackbar"
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => snackbar.hide()}
              >
                <CloseIcon data-cy="snackbar-close-btn" />
              </IconButton>,
            ]}
          />
        </section>
        {this.renderOverlayLoading()}
        <section>
          <StyledFab
            onClick={fab.onClick}
            color="primary" aria-label="Add"
            className={styles.fab}>
            {fab.icon}
          </StyledFab>
        </section>
      </Container>
    )
  }
}

export default App