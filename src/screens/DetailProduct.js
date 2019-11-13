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
import { fontWeight } from '@material-ui/system';

const Container = styled.div`
 display: flex;
  padding: 10px;
  overflow: hidden;
  width: 100%;
  size:100vh;

  /* .card {
    background: red;

    &:hover {
      background: green;
    }
  } */

  .details {
    background: grey;
    
  }
 
    
  
  .info {
  
    margin-top:10px;

  

  }
  .info1 {
    display:flex;
    justify-content:space-around;
    margin:1px;
  }
  .info2 {
    display:flex;
    justify-content:space-around;
    margin:1px;
  }
`

const useStyles = makeStyles({
  card: {
    maxWidth: 'fullWidth',
    
    
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container>
    <Grid container spacing={20} justify="center">
    <Card className={`card ${classes.card}`}>
     
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="150"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhz5VP00ScWa0YiDcOdij2hHDlikcUYX9fb_bf322K8Rvt2p33"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h3">
            Tas Keranjang Wanita Original
          </Typography>
          <h2 style={{fontWeight:"bold",color:"red"}}>Rp.120.000</h2>
          <p>Description</p>
          <Typography variant="body2" color="textSecondary" component="p">
          Tas adalah wadah tertutup yang dapat dibawa bepergian.
          Materi untuk membuat tas antara lain adalah 
          kertas, plastik, kulit, kain, dan lain-lain.
          Biasanya digunakan untuk membawa pakaian, buku, dan lain-lain
          </Typography>
         
         
    
        <div className="info">
        <div className="info1">
       <p style={{fontWeight:"bold",fontSize:14}}>Kategori : Handmade</p> 
        <p style={{fontWeight:"bold",fontSize:14}}>Berat : 90 gram</p>
        </div>
        <div className="info2">
          <p style={{fontWeight:"bold",fontSize:14}}>Size : M</p>
          <p style={{fontWeight:"bold",fontSize:14}}>Stock : 5</p>
</div>
        </div>
        
          <div className="details">
        
          </div>
         
        
        </CardContent>
     
    
     
        <Button fullWidth style={{}} variant="contained" size="medium" color="secondary" className="buy">
          Buy
        </Button>
     
      
      
    </Card>
    </Grid>
    </Container>
    
  );
}