//MODULES
import { observable, action } from "mobx";
import axios from "axios";

//STORE
class Cart {
  @observable product = {};
  @observable data = [];
  @observable isFetchingProducts = false;

  @action
  async addCart(name, price) {
    try {
      this.isFetchingProducts = true;

      await axios.post("/addCart?", { name, price });
    } catch (err) {
      console.log(err);
    } finally {
      this.isFetchingProducts = false;
    }
  }
  async getCart() {
    try {
      this.isFetchingProducts = true;

      let { data } = await axios.get("/getCarts");

      this.data = data;
    } catch (err) {
      console.log(err);
    } finally {
      this.isFetchingProducts = false;
    }
  }
}

export default window.carts = new Cart();
