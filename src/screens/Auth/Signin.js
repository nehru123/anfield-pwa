import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
// import Icon from '@material-ui/core/Icon'
import InputIcon from '@material-ui/icons/Input'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import styles from './css/login.module.scss'
import CircularProgress from '@material-ui/core/CircularProgress'
import { user, token } from '../../services/stores'

const StyledButton = styled(Button)`
  && {
    background-color: white;
    border: 1px solid #cccccc;

    &:hover {
      background: #f1f1f1;
    }
    
    .MuiButton-label {
      color: #585858;
      text-transform: none;
      display: flex;
      height: 20px;

      img {
        height: 100%;
        margin: 10px;
      }
    }
  }
`

@observer
class Signin extends Component {
  @observable shouldShowPassword = false
  @observable email = ''
  @observable password = ''
  @observable resendEmail = ''
  
  componentWillUnmount() {
    if (this.tokenDisposer) this.tokenDisposer()
  }

  handleChange(name, value) {
    this[name] = value.target.value
  }

  handleClickShowPassword = () => {
    this.shouldShowPassword = !this.shouldShowPassword
  }

  renderButton() {
    if (user.isLoadingLogin) return <CircularProgress className={styles.loading} /> 

    return (
      <React.Fragment>
        <Button 
          fullWidth 
          size="large"
          variant="contained" 
          color="primary"
          style={{marginTop: 20, color: 'white'}}
          type="submit"
        >
          Sign In
          <InputIcon style={{marginLeft: 10}} />
        </Button>
        <StyledButton 
          fullWidth 
          size="large"
          variant="contained" 
          color="primary"
          style={{marginTop: 20, color: 'white'}}
          onClick={async e => {
            e.preventDefault()
            user.signInWithGoogle()
          }}
        >
          <img src="/images/google-logo.png" alt="" />
          Sign In with Google
        </StyledButton>
      </React.Fragment>
    )
  }

  onSubmit = async e => {
    e.preventDefault()
    
    let res = await user.signInWithEmailAndPassword(this.email, this.password)

    if (typeof res !== 'string') {
      if (res.data.message.toLowerCase().indexOf('verify') !== -1) {
        this.resendEmail = this.email
      }
    }
  }

  render() {
    if (token.isSettingUp) return (
      <div className={styles['loading-wrapper']} >
        <CircularProgress className={styles.loading} /> 
      </div>
    )

    let message = this.props.location.state && this.props.location.state.message

    // message = 'Your email has been verified, please login'

    return (
      <form 
        className={styles.container} 
        onSubmit={this.onSubmit} 
      >
        <div className={styles.logo} >
          <img src="/images/icons/logo_blue.png" alt=""/>
        </div>

        <h1>Sign In</h1>

        {message && <div className={styles.info} >{message}</div>}

        <TextField
          name="email"
          type="email"
          label="Email"
          className={styles.input}
          onChange={this.handleChange.bind(this, 'email')}
          value={this.email}
          fullWidth
          rowsMax={6}
          required
          margin="normal"
          variant="outlined"
        />

        <div className={styles['password-wrapper']}>
          <TextField
            name="password"
            type={this.shouldShowPassword ? 'text' : 'password'}
            label="Password"
            className={styles.password}
            onChange={this.handleChange.bind(this, 'password')}
            value={this.password}
            required
            fullWidth
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.shouldShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        {
          this.resendEmail.length > 0 && (
            <div className={styles.notreceive} >
              Have not received email? 
              <div className={styles.send} > 
                {
                  user.isResendingEmail
                    ? (
                      <CircularProgress /> 
                    )
                    : (
                      <Button
                        onClick={async () => {
                          await user.resendEmail(this.resendEmail)
                        }}
                        variant="outlined" 
                        color="primary">
                        Resend
                      </Button>
                    )
                }
              </div>
            </div>
          )
        }

        {this.renderButton()}
        <p>Do not have account yet? <Link 
          to="/auth/signup" 
        >
          Sign Up
        </Link></p>
      </form>
    )
  }
}

export default Signin