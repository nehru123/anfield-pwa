import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
   
    title: {
      flexGrow: 1,
      
    },
  }),
);

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
        <img style={{width:25,height:25,marginLeft:10}} src="https://icon-library.net/images/what-is-the-white-shopping-bag-icon/what-is-the-white-shopping-bag-icon-3.jpg">
    </img>
       
          <Typography variant="h6" style={{marginLeft:10}}>
            Anfield Collection
          </Typography>
       
        </Toolbar>
      </AppBar>
    </div>
  );
}