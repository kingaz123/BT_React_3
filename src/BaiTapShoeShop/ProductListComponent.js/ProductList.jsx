import React, { Component } from "react";
import Product from "../ProductComponent/Product";

export default class ProductList extends Component {
  renderProductList = () => {
    let { productList, addToCart } = this.props; //nhận mảng productList và phương thức addToCart từ props được truyền từ ShoeShop xuống
    return productList.map((product) => {
      let { id } = product;
      return (
        <div className="col-3 mt-3" key={`shoe-${id}`}>
          <Product addToCart={addToCart} product={product} />
          {/* tiếp tục truyền phương thức addToCart xuống component con "Product" và truyền từng đối tượng sản phẩm được lấy ra từ mảng productList xuống bằng Props */}
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProductList()}</div>; //gọi hàm/phương thức renderProductList để render danh sách sản phẩm
  }
}
