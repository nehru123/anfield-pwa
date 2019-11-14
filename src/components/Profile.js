

import React, { Component } from 'react';
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
import {observer} from 'mobx-react';
import { observable } from 'mobx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import MediaCard from './MediaCard';






const Container = styled.div` 


size:100vh;
display:block;

.wrapper {
  max-width:100%;
 
display:flex;
  border-radius:15px;
  margin:30px;
}
.myAvatar
 {
   justify-content:center;
 margin:30px;
   display:flex;
 }
 .myToko {
  justify-content:flex-start;
 margin:30px;
   display:flex;
 }
 .myMenu {
   display:flex;
   justify-content:space-between;
   
 }
 
 







`
@observer
 class Profile extends Component {
  @observable tabIndex = 0

   render() {
     return (
        <Container>
               <Tabs
               
                value={this.tabIndex}
                onChange={(e,i) => this.tabIndex = i}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example">
                <Tab label="Profile" value={0}  />
                <Tab label="Jual"  value={1}  />
                <Tab label="Beli"  value={2}  />
              </Tabs>
              <SwipeableViews
          
              index={this.tabIndex}
              onChangeIndex={i => this.tabIndex = i}
            >
            <div>
            <div className="myAvatar">
              <Avatar src="https://cdn2.tstatic.net/wow/foto/bank/images/yong-junhyung.jpg" className="myPhoto"  style={{height:120,width:120,justifyContent:"center"}}/>
              </div>
              <p style={{textAlign:"center",alignSelf:"center",fontWeight:"bold"}}>Jun Hyung</p>
            
             
            <List  component="nav" aria-label="main mailbox folders">
        <ListItem  button>
          <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon>
          <ListItemText primary="Edit Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < LocalGroceryStoreIcon/>
          </ListItemIcon>
          <ListItemText primary="Buka Toko" />
        </ListItem>
      </List>
      </div>
            
              
            <div>  
            <div className="myToko">
              <Avatar src="https://cdn2.tstatic.net/wow/foto/bank/images/yong-junhyung.jpg" className="myPhoto"  style={{height:90,width:90,margin:20}}/>
              <p style={{fontWeight:"bold"}}>Sabi Collection</p>
              <p style={{marginLeft:-110,marginTop:25}}><br></br>Kota Malang</p>  
              <p style={{marginLeft:-87,marginTop:60,color:"orange",fontSize:17}}><br></br>****</p> 
            
              </div>
                <Divider />

             <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AddIcon/>
          </ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Product" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < LocalGroceryStoreIcon/>
          </ListItemIcon>
          <ListItemText primary="Order" />
        </ListItem>
      </List>
      
      <h3 style={{textAlign:"center"}}>Product List</h3>
      <div className="MyCategory" style={{display:'flex',flexWrap:"wrap",justifyContent:"center"}}>



      </div>

</div>
            <div>c</div>
      
              
              
            </SwipeableViews>
      
            
      
      
      
      </Container>
     )
   }
 }
export default Profile;