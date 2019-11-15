import { observable, computed, action } from 'mobx'
import axios from 'axios'
import snackbar from './snackbar'
// import token from './token'
import firebaseStore from './firebaseStore'

class User {
  @observable data = null
  @observable isLoading = false
  @observable isFetchingUsers = false
  @observable isLoadingLogin = false
  @observable isResendingEmail = false

  @computed
  get isLoggedIn() {
    return !!this.data
  }

  @action
  async signInWithGoogle() {
    try {
      this.isLoadingLogin = true

      let res = await firebaseStore.signInWithGoogle()
      let idToken = await res.user.getIdToken()

      let accessToken = await this.customerLogin(idToken)

      return accessToken
    } catch(err) {
      this.isLoadingLogin = false
      snackbar.show(err.message)
      console.log('ERROR WHILE LOGIN WITH GOOGLE', err)
      return err.response
    }
  }

  async signInWithEmailAndPassword(email, password) {
    try {
      this.isLoadingLogin = true

      let res = await firebaseStore.signInWithEmailPassword(email, password)
      let idToken = await res.user.getIdToken()

      let accessToken = this.customerLogin(idToken)

      return accessToken
    } catch (err) {
      this.isLoadingLogin = false
      snackbar.show(err.message)
      console.log('ERROR WHILE LOGIN WITH EMAIL AND PASSWORD', err)
      return err.response
    }
  }

  async signUpWithEmailAndPassword(email, password) {
    try {
      this.isLoadingLogin = true

      let res = await firebaseStore.signUpWithEmailAndPassword(email, password)
      let idToken = await res.user.getIdToken()

      let accessToken = this.customerLogin(idToken)

      return accessToken
    } catch (err) {
      this.isLoadingLogin = false
      console.log('ERROR WHILE LOGIN WITH EMAIL AND PASSWORD', err.response)
      snackbar.show(err.message)
      return err.response
    }
  }

  // @action
  // async getUser() {
  //   try {
  //     this.isLoading = true

  //     let { data: {
  //       customer
  //     }} = await client.query({
  //       query: customerQuery,
  //       fetchPolicy: 'network-only',
  //     })

  //     this.data = customer
  //     this.isLoading = false
  //     favoriteMenus.fetchAllFavoriteMenus()
  //     return customer
  //   } catch (err) {
  //     this.isLoading = false
  //     snackbar.show('Error fetching user')
  //     console.log('ERROR WHILE FETCHING USERS', err)
  //   }
  // }

  @action
  async resendEmail(email) {
    try {
      this.isResendingEmail = true
      await axios.post('/auth/signup/resend', {
        email
      })
      snackbar.show('Email verification sent')

      this.isResendingEmail = false
    } catch (err) {
      this.isResendingEmail = false
      snackbar.show(err.response.message)
      console.log('ERROR WHILE RESENDING EMAIL', err.response)
    }
  }

  @action
  async verifyEmail() {
    try {
      let query = new URLSearchParams(window.location.search)
      let token = query.get('token')
      if (token) {
        await axios.get(`/auth/signup/verify?token=${token}`)
        return true
      } else snackbar.show('Given token not valid')
    } catch (err) {
      snackbar.show(err.response.message)
      console.log('ERROR WHILE VERIFYING EMAIL', err.response)
    }
  }

  @action
  logout = () => {
    localStorage.clear()
    this.data = null
  }
}

export default window.user = new User()