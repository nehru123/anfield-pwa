import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'


const MUITheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f50057'
    },
    secondary: red,
  },
  typography: { 
    useNextVariants: true, 
  }
})

class Root extends Component {
  render()  {
    return (
      <MuiThemeProvider theme={MUITheme}>
    
    
          <App />
       
    
    </MuiThemeProvider>
    )
  }

  

  
}


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
