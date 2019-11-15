import React, { Component } from 'react'
import styled from 'styled-components'
import { popupStack, serviceWorker } from '../services/stores'
import { observer } from 'mobx-react'
import posed from 'react-pose'
import AppInstall from './AppInstall'

const Container = styled.div`
  display: block;
  padding-top: 45px;
  height: 100vh;
  min-height: 100vh;
`

const PosedContainer = posed(Container)({
  active: { x: 0, transition: { duration: 300 } },
  inactive: { x: -150, transition: { duration: 700 } }
})

@observer
class BaseRoute extends Component {
  render() {
    return (
      <PosedContainer 
        style={this.props.mobileStyle}
        appinstall={serviceWorker.isInstallPromptUIShowed}
        pose={popupStack.isPopupActive ? 'inactive' : 'active'} initialPose="active">
        <AppInstall />
        {this.props.children}
      </PosedContainer>
    )
  }
}

export default BaseRoute