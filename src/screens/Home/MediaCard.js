import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { products } from "../../services/stores";

const Container = styled.div`
  padding: 20px;

  .MyCard {
    width: 360px;
  }
  .fotoproduk {
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 5px 5px 0px grey;
  }
  .namaproduk {
    font-size: 30px;
    font-family: BebasNeue Bold;
    color: black;
  }
  .hargaproduk {
    font-size: 20px;
    color: black;
  }
  .wrapperCard {
    padding: 20px;
    background-color: white;
    transform: translate(0px, -30px);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-radius: 20px 20px;
    box-shadow: 5px 5px 0px grey;
    width: 100%;
  }
  .buyButton {
    width: 300px;
    height: 70px;
    transform: translate(75px, 65px);
  }
`;

class MediaCard extends Component {
  render() {
    let { data } = this.props;
    return (
      <Container>
        <Grid container justify="center">
          <div className="MyCard">
            <img className="fotoproduk" src={data.imageURL}></img>
            <div className="wrapperCard">
              <p className="namaproduk">{data.name}</p>
              <p className="hargaproduk">Rp.{data.price}</p>
              <img
                className="buyButton"
                src="https://santaschristmasland.com/wp-content/uploads/2019/06/buy-now-button-transparent-png-5.png"
                onClick={() => {
                  products.product = this.props.data;
                  this.props.history.push(`/products/${data.id}`);
                }}
              ></img>
            </div>
          </div>
        </Grid>
      </Container>
    );
  }
}
export default withRouter(MediaCard);
