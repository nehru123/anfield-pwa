import { observable, action } from 'mobx'

class MainRouter {
  @observable selectedPath = this.PATH_HOME
  @observable selectedRoute = null
  @observable containerPose = this.STATE_OPEN_CONTAINER

  PATH_HOME = '/home'
  PATH_CART = '/cart'
  PATH_ACCOUNT = '/account'

  STATE_OPEN_CONTAINER = 'opencontainer'
  STATE_CLOSE_CONTAINER = 'closecontainer'

  @action
  updateRoute(routers) {
    let path = window.location.pathname

    let route = routers.find(v => v.path === path)

    if (route) {
      this.selectedRoute = route
    }

    if (path.indexOf(this.PATH_HOME) !== -1) {
      this.selectedPath = this.PATH_HOME
    } else if (path.indexOf(this.PATH_CART) !== -1) {
      this.selectedPath = this.PATH_CART
    } else if (path.indexOf(this.PATH_ACCOUNT) !== -1) {
      this.selectedPath = this.PATH_ACCOUNT
    }
  }
}

export default window.mainRouter = new MainRouter()