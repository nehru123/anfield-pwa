import React, { Component } from "react";
import { observer } from "mobx-react";
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
import Carts from "../../services/stores/Cart";
import Fab from "@material-ui/core/Fab";
import BaseRoute from "../../components/BaseRoute";
import Myitem from "../Cart/Myitem";
//import Cart from "../../services/stores/Cart";

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  display: block;

  .WrapContainer {
    display: flex;
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
@observer
class MyCart extends Component {
  async componentDidMount() {
    let response = await Carts.getCart();
    console.log(response);
  }
  render() {
    return (
      <BaseRoute>
        <Container>
          <div className="WrapContainer">
            {Carts.data &&
              Carts.data.map((d, i) => {
                return <Myitem data={d} key={i} />;
              })}
          </div>
        </Container>
      </BaseRoute>
    );
  }
}
export default MyCart;
