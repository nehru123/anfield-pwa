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
import { withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import RemoveIcon from "@material-ui/icons/Remove";
import CheckoutButton from "../CheckoutButton";

import Fab from "@material-ui/core/Fab";
import BaseRoute from "../../components/BaseRoute";

const Container = styled.div`
  margin: auto;
  padding: 10px;
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

class Myitem extends Component {
  render() {
    let { data } = this.props;
    return (
      <Container>
        <div className="WrapContainer">
          <div className="picture-wrapeer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhz5VP00ScWa0YiDcOdij2hHDlikcUYX9fb_bf322K8Rvt2p33"></img>
            <h5>{data.product[1].name}</h5>
            <h5>{data.product[1].price}</h5>

            <p style={{ marginTop: -20 }}>{data.quantity}</p>
          </div>
          <div className="details">
            <div className="controls">
              <Tooltip
                title="Add"
                size="small"
                aria-label="add"
                style={{ margin: 10 }}
              >
                <Fab color="secondary">
                  <RemoveIcon />
                </Fab>
              </Tooltip>
              <p>1</p>
              <Tooltip
                title="Add"
                size="small"
                aria-label="add"
                style={{ margin: 10 }}
              >
                <Fab color="secondary">
                  <AddIcon />
                </Fab>
              </Tooltip>

              <Tooltip title="Delete" style={{ margin: -12 }}>
                <IconButton aria-label="delete">
                  <DeleteIcon style={{ fontSize: 30 }} />
                </IconButton>
              </Tooltip>

              <Divider variant="middle" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default withRouter(Myitem);
