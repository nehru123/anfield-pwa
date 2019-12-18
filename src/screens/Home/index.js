import React, { Component } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../Home/MediaCard";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import SearchIcon from "@material-ui/icons/Search";

import BaseRoute from "../../components/BaseRoute";
import { products } from "../../services/stores";

const Container = styled.div`
  width: 100%;

  .myCard {
    display: flex;
  }
  .Catalog {
    display: flex;
    justify-content: space-around;
    img {
      height: 65px;
      width: 65px;
    }
  }
  .Mytitle {
    color: black;
    font-size: 30px;
    margin: 50px;
  }
  .WrapperCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

@observer
class Home extends Component {
  async componentDidMount() {
    await products.fetchProducts();
    console.log(products.data);
  }

  renderHome() {
    return (
      <div>
        <TextField
          style={{ marginTop: 30, padding: 40 }}
          id="input-with-icon-textfield"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <div className="Mytitle">Catalog</div>
        <div className="Catalog">
          <img src="https://icon-library.net/images/bag-icon-png/bag-icon-png-0.jpg"></img>

          <img src="https://cdn3.iconfinder.com/data/icons/iconomous-the-rest/512/77-Gift-512.png"></img>
        </div>

        <div className="Mytitle">Best Seller</div>
        <div className="WrapperCard">
          {products.data.map((d, i) => {
            return <MediaCard data={d} key={i} />;
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <BaseRoute>
        <Container>{this.renderHome()}</Container>
      </BaseRoute>
    );
  }
}

export default Home;
