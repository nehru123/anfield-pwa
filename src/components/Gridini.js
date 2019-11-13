import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    
    },

    card: {
      maxWidth: 300,
     
    
    },
  
  }),
);

export default function Gridini() {
  const classes = useStyles();

  return (
    
  
    <div className={classes.root}>
      <Grid container spacing={2}>
     
      <Grid item xs style={{padding:'1%'}}>
         <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://i.pinimg.com/originals/0c/9f/36/0c9f362eb7fd5d06af157257b49a6a8d.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles
          </Typography>
          <p style={{color:"red",fontWeight:"bold"}}>Rp.500.000</p>
          <Button variant="contained" color="secondary" >
        Buy
      </Button>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Grid>
        <Grid item xs style={{padding:'1%'}}>
         <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://i.pinimg.com/originals/0c/9f/36/0c9f362eb7fd5d06af157257b49a6a8d.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles
          </Typography>
          <p style={{color:"red",fontWeight:"bold"}}>Rp.500.000</p>
          <Button variant="contained" color="secondary" >
        Buy
      </Button>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Grid>
        <Grid item xs style={{padding:'1%'}}>
         <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://i.pinimg.com/originals/0c/9f/36/0c9f362eb7fd5d06af157257b49a6a8d.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles
          </Typography>
          <p style={{color:"red",fontWeight:"bold"}}>Rp.500.000</p>
          <Button variant="contained" color="secondary" >
        Buy
      </Button>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Grid>
       
       
      </Grid>
     
    
    </div>
  );
}