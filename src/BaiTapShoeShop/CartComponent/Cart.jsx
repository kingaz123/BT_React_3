import React, { Component } from "react";

export default class Cart extends Component {
  //Phương thức để render nội dung giỏ hàng
  showCart = () => {
    let { productCart, deleteFromCart, updateSoLuong } = this.props; //nhận mảng productCart, phương thức deleteFromCart và phương thức updateSoLuong từ ShoeShop

    return productCart.map((productCart) => {
      let { id, name, price, soLuong, image } = productCart;
      return (
        <tr key={`product-${id}`}>
          <td>{id}</td>
          <td>
            <img style={{ width: "60px" }} src={image} alt="" />
          </td>
          <td>{name}</td>
          <td>
            <button
              onClick={() => {
                updateSoLuong(id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
            <span style={{ padding: "10px" }}>{soLuong}</span>
            <button
              onClick={() => {
                updateSoLuong(id, -1);
              }}
              className="btn btn-success"
            >
              -
            </button>
          </td>
          <td>
            {price} <span> USD</span>
          </td>

          <td>
            {price * soLuong} <span> USD</span>
          </td>
          <td>
            <button
              onClick={() => {
                deleteFromCart(id);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  //Phương thức tính tổng giá tiền tất cả sản phẩm trong giỏ hàng
  calculateTotalPrice = () => {
    let { productCart } = this.props;

    if (!productCart || productCart.length === 0) {
      return 0; // Trả về 0 nếu giỏ hàng rỗng hoặc chưa được khởi tạo
    }

    let totalPrice = 0;
    productCart.forEach((product) => {
      totalPrice += product.price * product.soLuong;
    });
    return totalPrice;
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title font-weight-bold"
                id="exampleModalLabel"
              >
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="text-align-center">
                      Mã
                    </th>
                    <th scope="col" className="text-align-center">
                      Hình
                    </th>
                    <th scope="col" className="text-align-center">
                      Tên
                    </th>
                    <th scope="col" className="text-align-center">
                      {" "}
                      Số lượng
                    </th>
                    <th scope="col" className="text-align-center">
                      Đơn giá
                    </th>
                    <th scope="col" className="text-align-center">
                      Thành tiền
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.showCart()}</tbody>
              </table>
              <p>
                <span className="font-weight-bold">
                  Tổng tiền phải thanh toán:
                </span>{" "}
                {this.calculateTotalPrice()} USD
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
