import React, { Component } from "react";

export default class Product extends Component {
  state = {
    showModal: false, //mặc định là không hiển thị modal thông tin chi tiết của sản phẩm
  };

  openModal = () => {
    this.setState({ showModal: true });
  }; //khi gọi phương thức openModal thì chuyển đổi giá trị thuộc tính showModal thành true để hiển thị modal thông tin chi tiết sản phẩm

  closeModal = () => {
    this.setState({ showModal: false }); //khi gọi phương thức closeModal thì chuyển đổi giá trị thuộc tính showModal thành true để ẩn modal thông tin chi tiết sản phẩm
  };

  render() {
    const { product, addToCart } = this.props; //nhận đối tượng sản phẩm và phương thức addToCart được truyền xuống từ productList
    const { image, name, price, description, quantity } = product; //Bóc tách các thuộc tính của đối tượng product tương tứng

    return (
      //render thẻ sản phẩm trên giao diện
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <span className="font-weight-bold">Giá: </span>
            {price} USD
          </p>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            Thêm vào giỏ hàng
          </button>
          <button onClick={this.openModal} className="btn btn-secondary ml-2">
            Chi tiết
          </button>
        </div>
        {/* Bootstrap Modal thông tin chi tiết sản phẩm (state mặc định là bị ẩn đi) */}
        <div
          className={`modal fade ${this.state.showModal ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: this.state.showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{name}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={image}
                  alt={name}
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
                <p className="font-weight-bold">Mô tả:</p>
                <p>{description}</p>
                <p>
                  <span className="font-weight-bold">Giá: </span>
                  {price} USD
                </p>
                <p>
                  <span className="font-weight-bold">Số lượng còn lại: </span>
                  {quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
