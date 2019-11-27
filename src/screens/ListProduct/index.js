

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
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
// import MediaCard from './MediaCard';
import PopupRoute from '../../components/PopupRoute';

const Container = styled.div` 
  size:100vh;
  display:block;

  .wrapper {
    max-width:100%;
    display:flex;
    border-radius:15px;
    margin:30px;
  }
  .myAvatar {
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

class ListProduct extends Component {
  render() {
    return (
      <PopupRoute
        title="Product List"
      >
        <Container>
          <List >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhz5VP00ScWa0YiDcOdij2hHDlikcUYX9fb_bf322K8Rvt2p33"<FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Tas Original Wanita"
                secondary="Rp 120.000"
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            
            </ListItem>
            <Divider style={{margin:20}} />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhz5VP00ScWa0YiDcOdij2hHDlikcUYX9fb_bf322K8Rvt2p33"
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Tas Original Wanita"
                secondary="Rp 120.000"
                
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider style={{margin:20}} />
          <ListItem>
              <ListItemAvatar>
                <Avatar>
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhz5VP00ScWa0YiDcOdij2hHDlikcUYX9fb_bf322K8Rvt2p33"
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Tas Original Wanita"
                secondary="Rp 120.000"
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider style={{margin:20}} />
           
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhz5VP00ScWa0YiDcOdij2hHDlikcUYX9fb_bf322K8Rvt2p33"
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Tas Original Wanita"
                secondary="Rp 120.000"
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Container>
      </PopupRoute>
    )
  }
}
export default ListProduct;