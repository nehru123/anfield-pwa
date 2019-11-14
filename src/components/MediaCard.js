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

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin:10,
    
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{ marginTop:'3%', maxWidth: '45%' }}>
    <Grid container spacing={20} justify="center">
    <Card className={classes.card}>
      <CardActionArea style={{backgroundColor:"white"}}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhz5VP00ScWa0YiDcOdij2hHDlikcUYX9fb_bf322K8Rvt2p33"
          title="Contemplative Reptile"
        />
        <CardContent>
        
        <h3>Tas Ori Wanita</h3>
        
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Tas ini digunakan untuk membawa barang anda
          </Typography>
        */}
          <h4 style={{fontWeight:"bold",color:"red"}}>Rp.120.000</h4>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
     
        <Button fullWidth style={{display:'flex'}} variant="contained" size="medium" color="secondary" className={classes.margin}>
          Buy
        </Button>
      </CardActions>
      
      
    </Card>
    </Grid>
    </div>
    
  );
}