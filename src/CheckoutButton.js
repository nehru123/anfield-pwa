import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';

import Fab from '@material-ui/core/Fab';

const Container = styled.div` 

  bottom: 0;
  position: fixed;
display:block;
background-color:white;
height:50px;
justify-content:start;
  width: 100%;
  box-shadow:1px 1px 3px black;

.wrapper {
display:flex;
justify-content:space-around;



}


`

export default function CheckoutButton() {


  return (

   
    <Container fixed>
    <div className="wrapper">
<p style={{marginTop:20,fontWeight:"bold"}}>Total: Rp.500.000</p>
<Button  style={{marginTop:20}}variant="contained" color="secondary" className="mycheckout">
        Checkout
      </Button>

    </div>

      
     </Container>
     
 
  );
}