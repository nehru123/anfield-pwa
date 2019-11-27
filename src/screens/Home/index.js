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

import BaseRoute from "../../components/BaseRoute";
import { products } from "../../services/stores";

const Container = styled.div`
  display: block;
  size: 100vh;

  .myCard {
    max-width: 100%;
    margin: 10px;
  }
  .Mytitle {
    font-family: aqua;
    font-size: 50px;
    margin: 40px;
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
        <div className="Mytitle">Leather Bag Collection</div>
        <div
          className="MyCategory"
          style={{
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "center"
          }}
        >
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
