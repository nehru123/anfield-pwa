import React, { Component } from "react";
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
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import RemoveIcon from "@material-ui/icons/Remove";
import CheckoutButton from "../CheckoutButton";
import { products } from "../../services/stores";
import Fab from "@material-ui/core/Fab";
import BaseRoute from "../../components/BaseRoute";
import Myitem from "../Cart/Myitem";

const Container = styled.div`
  margin: auto;
  padding: 25px;
  overflow: hidden;
  width: 100%;
  display: block;

  .WrapContainer {
    display: flex;
    margin: 10px;
  }
  img {
    border-radius: 10px;
    width: 150px;
    height: 90px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
  }

  .details {
    margin-right: 100px;
    width: 100%;
    display: block;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    min-height: 85px;
  }

  .controls {
    display: flex;
    margin-top: 10px;
    justify-content: flex-end;
    margin-right: 10px;
  }
  .WrapperButton {
    display: flex;
    margin: auto;
    width: 600px;
    justify-content: center;
    height: 50px;
    background-color: grey;
  }
`;

class MyCart extends Component {
  async componentDidMount() {
    await products.fetchProducts();
    console.log(products.data);
  }
  render() {
    let { data } = this.props;
    return (
      <BaseRoute>
        <Container>
          <div className="WrapContainer"></div>
        </Container>
      </BaseRoute>
    );
  }
}
export default MyCart;
