import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { product, addToCart } = this.props;
    const { image, name, price, shortDescription, quantity } = product;

    return (
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
                  style={{ maxWidth: "100%", maxHeight: "400px" }}
                />
                <p className="font-weight-bold">Mô tả ngắn:</p>
                <p>{shortDescription}</p>
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
