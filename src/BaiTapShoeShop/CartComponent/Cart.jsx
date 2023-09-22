import React, { Component } from "react";

export default class Cart extends Component {
  showCart = () => {
    let { productCart, deleteFromCart, updateSoLuong } = this.props;

    return productCart.map((proCart) => {
      let { id, name, price, soLuong, image } = proCart;
      return (
        <tr key={`cart${id}`}>
          <td>{id}</td>
          <td>
            <img style={{ width: "50px" }} src={image} alt="" />
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
              <h5 className="modal-title" id="exampleModalLabel">
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
                    <th scope="col">Mã</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.showCart()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
