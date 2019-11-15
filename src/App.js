import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import styled from "styled-components";
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import MediaCard from './components/MediaCard';
import MyAppBar from './components/MyAppBar';
// import SearchBar from './component/SearchBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Category from './component/Category';
import DetailProduct from './screens/DetailProduct';
import Cart from './screens/Cart';
import CheckoutButton from './CheckoutButton';
import BottomNav from './components/BottomNav';
import Pembayaran from './components/Pembayaran';
import Profile from './components/Profile';
import AddProduct from './components/AddProduct';
import Signin from './screens/Auth/Signin';





class App extends Component {
  render() {
    
    return (
     
  
    <div className="Appbar" style={{flex:1}}>
      {/* <MyAppBar></MyAppBar> */}
      {/* <AddProduct></AddProduct> */}
      {/* <Profile></Profile> */}
 {/* <DetailProduct></DetailProduct> */}
 {/* <Pembayaran></Pembayaran> */}

         
         <Signin></Signin>
        
      
         
{/*         
  
          <SearchBar></SearchBar> */}
{/* <div className="MyCategory" style={{display:'flex',flexWrap:"wrap",justifyContent:"center"}}> */}
 


{/*   
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard> */}
 {/* <Cart></Cart>
 <Cart></Cart>
 <Cart></Cart>
 <Cart></Cart> */}

{/* </div> */}
       
        {/* <DetailProduct></DetailProduct> */}
      {/* <div className="MyBottomNav">
      
   <BottomNav></BottomNav>
   </div> */}
  </div>

    );
  }
}
export default App;