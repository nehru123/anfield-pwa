

import React, { Component } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Container = styled.div` 

size:100vh;
display:block;
margin:50px;


.pictureWrapper {
display:flex;
justify-content:center;
margin-top:100px;

}
.myForm{

  display:block;
  margin:auto;
 
}

`

 class Signin extends Component {

   render() {
     return (
        
 <Container>
   <div className="pictureWrapper">
   <img style={{height:120, width:120}} src="https://image.flaticon.com/icons/png/512/118/118096.png">

 </img>
  
   </div>
   <h2 style={{textAlign:"center"}}>Anfield Collection</h2>

   <form  noValidate autoComplete="off">
   <div className="myForm">
        <TextField  fullWidth style={{flexWrap:"wrap"}}
          id="outlined-basic"
         
          className="myform"
          label="Email"
          margin="normal"
          variant="outlined"
        />
             
         <TextField  fullWidth style={{flexWrap:"wrap"}}
          id="outlined-basic"
         
          className="myform"
          label="Password"
          margin="normal"
          variant="outlined"
        />
    <Button style={{marginTop:30}} fullWidth variant="contained" color="secondary" className="loginButton">
        Login
      </Button>
      </div>
      </form>
   

 </Container>
     )
   }
 }
export default Signin;