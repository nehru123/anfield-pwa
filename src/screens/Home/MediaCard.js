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
  display: flex;
  padding: 10px;
  width: 100%;
  margin: auto;
  size: 100vh;
  .MyCard {
    margin: auto;
    width: 90%;
  }
`;

class MediaCard extends Component {
  render() {
    let { data } = this.props;
    return (
      <Container>
        <Grid container spacing={20} justify="center">
          <Card className="MyCard">
            <CardActionArea style={{ backgroundColor: "white" }}>
              <CardMedia component="img" fullWidth image={data.imageURL} />
              <CardContent>
                <h3>{data.name}</h3>
                <h4 style={{ fontWeight: "bold", color: "red" }}>
                  {data.price}
                </h4>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() => {
                  products.product = this.props.data;
                  this.props.history.push(`/products/${data.id}`);
                }}
                fullWidth
                style={{ display: "flex" }}
                variant="contained"
                size="medium"
                color="secondary"
                className="myButton                                                             "
              >
                Buy
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    );
  }
}
export default withRouter(MediaCard);
