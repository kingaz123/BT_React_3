import React, { Component } from "react";
import Product from "../ProductComponent/Product";

export default class ProductList extends Component {
  renderProductList = () => {
    let { productList, addToCart } = this.props;
    return productList.map((product) => {
      let { id } = product;
      return (
        <div className="col-3 mt-3" key={`shoes${id}`}>
          <Product addToCart={addToCart} product={product} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProductList()}</div>;
  }
}
