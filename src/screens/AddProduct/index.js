import React, { Component } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

import PopupRoute from "../../components/PopupRoute";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

import Select from "@material-ui/core/Select";

const Container = styled.div`
  size: 100vh;
  display: block;
  margin: 1%;

  .MyCard {
    display: block;
    margin: 30px;
  }
`;
class AddProduct extends Component {
  render() {
    return (
      <PopupRoute title="Add Product">
        <Container>
          <Card className="MyCard">
            <CardActionArea style={{ backgroundColor: "white" }}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://cf.shopee.co.id/file/7207a2757db42a4448ebbfc45cc2a1be"
                title="Contemplative Reptile"
              />
              <CardContent>
                <h3>Tas Ori Wanita</h3>

                {/* <Typography variant="body2" color="textSecondary" component="p">
            Tas ini digunakan untuk membawa barang anda
          </Typography>
        */}
                <h4 style={{ fontWeight: "bold", color: "red" }}>Rp.120.000</h4>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                fullWidth
                style={{ display: "flex" }}
                variant="contained"
                size="medium"
                color="secondary"
                className="aaa"
              >
                Buy
              </Button>
            </CardActions>
          </Card>
        </Container>
      </PopupRoute>
    );
  }
}
export default AddProduct;
