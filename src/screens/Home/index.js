import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import BaseRoute from '../../components/BaseRoute'

const Container = styled.div`
  display: block;
  padding: 15px;
  padding-top: 25px;
`

@observer
class Home extends Component {
  renderHome() {
    return <div>Home</div>
  }

  render() {
    return (
      <BaseRoute>
        <Container>
          {this.renderHome()}
        </Container>
      </BaseRoute>
    )
  }
}

export default Home