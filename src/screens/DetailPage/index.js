import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { observer } from "mobx-react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PopupRoute from "../../components/PopupRoute";

import styled from "styled-components";
import { fontWeight } from "@material-ui/system";
import { products } from "../../services/stores";

const Container = styled.div`
  display: flex;
  padding-top: 50px;
  overflow: hidden;
  width: 90%;
  margin: auto;
  size: 100vh;

  /* .card {
    background: red;

    &:hover {
      background: green;
    }
  } */

  .details {
    background: grey;
  }

  .info {
    margin-top: 10px;
  }
  .info1 {
    display: flex;
    justify-content: space-around;
    margin: 1px;
  }
  .info2 {
    display: flex;
    justify-content: space-around;
    margin: 1px;
  }

  .MyCard {
    overflow: hidden;
    width: 100%;
    margin: 10px;
  }
  .BuyButton {
    margin: auto;
    width: 99%;
  }
`;

@observer
class DetailPage extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <PopupRoute title="Detail Product">
        <Container>
          <Grid container spacing={20} justify="center">
            <Card className={`MyCard`}>
              <CardMedia component="img" image={products.product.imageURL} />
              <CardContent>
                <Typography variant="h5" component="h3">
                  {products.product.name}
                </Typography>
                <h2 style={{ fontWeight: "bold", color: "red" }}>
                  {" "}
                  {products.product.price}
                </h2>
                <p>Description</p>
                <Typography variant="body2" color="textSecondary" component="p">
                  {products.product.description}
                </Typography>
                <div className="info">
                  <div className="info1">
                    <p style={{ fontWeight: "bold", fontSize: 14 }}>
                      Kategori : Handmade
                    </p>
                    <p style={{ fontWeight: "bold", fontSize: 14 }}>
                      Berat : 90 gram
                    </p>
                  </div>
                  <div className="info2">
                    <p style={{ fontWeight: "bold", fontSize: 14 }}>Size : M</p>
                    <p style={{ fontWeight: "bold", fontSize: 14 }}>
                      Stock : 5
                    </p>
                  </div>
                </div>

                <div className="details"></div>
              </CardContent>
            </Card>
            <Button
              onClick={() => {
                products.product = this.props.data;
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
          </Grid>
        </Container>
      </PopupRoute>
    );
  }
}

export default DetailPage;
