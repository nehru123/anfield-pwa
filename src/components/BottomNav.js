import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ExploreIcon from '@material-ui/icons/Explore';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width:'100%',
    position: 'fixed',
    bottom: 0,
    justifyContent:'space-between'
    
  
  
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation 
      value={null}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  label="Home" icon={<ExploreIcon />} />
      <BottomNavigationAction label="Cart" icon={<ShoppingBasketIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}