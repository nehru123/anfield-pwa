//MODULES
import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import styled from 'styled-components'

//COMPONENT
import { snackbar } from '../services/stores'

const PageLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20000;
`

//EXPORT ALL
export class AsyncComponent extends Component {
  state = {
    Component: null,
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true },
      async () => {
        try {
          let modules = await this.props.load()
          this.setState({ loading: false, Component: modules.default })
        } catch (err) {
          // reloadCountdownTimer.reload()
          snackbar.show('Error loading page, please refresh page')
          console.log('ERROR WHILE LOADING PAGE ROUTE', err)
        }
      }
    )
  }

  render() {
    if (this.state.loading) return (
      <PageLoading>
        <LinearProgress />
      </PageLoading> 
    )

    if (this.state.Component)
      return <this.state.Component {...this.props} />

    return <div>404 Not Found</div>
  }
}

export const asyncComponent = load => props => (
  <AsyncComponent load={load} {...props} />
)

//DEFAULTS
export default asyncComponent