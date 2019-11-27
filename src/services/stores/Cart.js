//MODULES
import { observable, action } from "mobx";
import axios from "axios";

//STORE
class Cart {
  @observable product = {};
  @observable data = [];
  @observable isFetchingProducts = false;

  @action
  async fetchProducts() {
    try {
      this.isFetchingProducts = true;

      let { data } = await axios.get("/getCart?");

      this.data = data;
    } catch (err) {
      console.log(err);
    } finally {
      this.isFetchingProducts = false;
    }
  }
}

export default window.products = new Products();
