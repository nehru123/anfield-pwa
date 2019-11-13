

import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';




const Container = styled.div` 


size:100vh;
display:block;

.wrapper {
  max-width:100%;
  justify-content: center; /* y-axis */
  align-items: center;
display:flex;
  border-radius:15px;
  margin:30px;
}



.me{
box-shadow:1px 5px grey;

}
.data {
  display:block;
margin:20px;

border-radius:10px;

}
.nama {
  
 
}

`

export default function Profile() {
  



  return (

  
  <Container>
         <Tabs
         
          value={0}
          onChange={(e,i) => i}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="fjsgs" value={0}  />
          <Tab label="Item Two"  value={1}  />
          <Tab label="Item Three"  value={2}  />
        </Tabs>
        <SwipeableViews
    
        index={0}
        onChangeIndex={i => i}
      >
      <div>a</div>
      <div>a</div>
      <div>a</div>

        
        
      </SwipeableViews>

      
<div className="wrapper">
<div className="myAvatar">
<Avatar alt="Remy Sharp" src="https://cdn2.tstatic.net/wow/foto/bank/images/yong-junhyung.jpg" className="me"  style={{height:100,width:100}}/>
<p style={{textAlign:"center",alignSelf:"center",fontWeight:"bold"}}>Jun Hyung</p> 
</div>

</div>
<div className="data">

<h4 style={{textAlign:"center"}} clasName="nama">Nama   : Nehru Priyambodo</h4>


</div>


  </Container>
  
 
  );
}