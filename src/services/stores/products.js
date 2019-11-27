//MODULES
import { observable, action } from "mobx";
import axios from "axios";

//STORE
class Products {
  @observable product = {};
  @observable data = [];
  @observable isFetchingProducts = false;

  @action
  async fetchProducts() {
    try {
      this.isFetchingProducts = true;

      let { data } = await axios.get("/getProductList?");

      this.data = data;
    } catch (err) {
      console.log(err);
    } finally {
      this.isFetchingProducts = false;
    }
  }
}

export default window.products = new Products();
