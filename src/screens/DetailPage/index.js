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
import Cart from "../../services/stores/Cart";

const Container = styled.div`
  overflow: hidden;

  size: 100vh;
  display: block;
  justify-content: center;

  .MyCard {
    overflow: hidden;
    max-width: 100%;
    margin: 10px;
  }
  .fotoproduk {
    display: flex;

    max-width: 100%;
    margin: auto;
  }

  .wrapperCard {
    padding: 50px;
    background-color: #f7f9fc;
    width: 650px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transform: translate(0px, -60px);
  }
  .namaproduk {
    font-family: Bebas-Regular;
    font-size: 30px;
  }
  .hargaproduk {
    font-weight: bold;
    font-size: 25px;
  }
  .Con {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }
  .myButton {
    width: 100%;
    height: 40px;
    margin-top: 90px;
  }
`;

@observer
class DetailPage extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <PopupRoute title="Detail Product">
        <Container>
          <Grid container justify="center">
            <div className="MyCard">
              <img className="fotoproduk" src={products.product.imageURL}></img>
              <div className="Con">
                <div className="wrapperCard">
                  <p className="namaproduk">{products.product.name}</p>
                  <p className="hargaproduk">Rp.{products.product.price}</p>
                  <p style={{ fontSize: 20 }}>Deskripsi</p>
                  <p>
                    We and our partners use technology such as cookies on our
                    site to personalise content and ads, provide social media
                    features, and analyse our traffic. Click below to consent to
                    the use of this technology across the web. You can change
                    your mind and change your consent choices at anytime by
                    returning to this site
                  </p>
                  <p className="deskripsiproduk">
                    .{products.product.description}
                  </p>

                  <Button
                    onClick={async () => {
                      await Cart.addCart(
                        products.product.name,
                        products.product.price
                      );
                      this.props.history.push(`/cart`);
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
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </PopupRoute>
    );
  }
}

export default DetailPage;
