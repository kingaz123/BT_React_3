import React, { Component } from "react";
import ProductList from "./ProductListComponent.js/ProductList";
import Cart from "./CartComponent/Cart";

export default class ShoeShop extends Component {
  productList = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  state = {
    productCart: [],
  };
  addToCart = (product) => {
    let { id, name, price, image } = product;
    let productNew = {
      id: id,
      name: name,
      price: price,
      image: image,
      soLuong: 1, //thuộc tính "soLuong" là số lượng sản phẩm khi thêm mới 1 sản phẩm vào giỏ hàng (1 sản phẩm mỗi lần thêm), khác với "Quantity" là thông tin số lượng còn lại của mỗi sản phẩm từ mảng dữ liệu ProductList.
    };
    let productCartUpdate = [...this.state.productCart]; //tạo mảng giỏ hàng clone để phục vụ cho việc cập nhật các thay đổi lên mảng giỏ hàng gốc

    //Tìm sản phẩm đã có sẵn trong giỏ hàng để xử lý số lượng khi thêm lại sản phẩm đó. Nếu sản phẩm đã có trong giỏ hàng thì không cần thêm lại sản phẩm mà chỉ tăng số lượng lên 1.
    let productFind = this.state.productCart.find((productCart) => {
      return productCart.id === productNew.id;
    });
    if (productFind) {
      productFind.soLuong += 1; //Nếu sản phẩm đã sẵn có trong giỏ hàng (có productFind) thì tăng số lượng sản phẩm thêm 1
    } else {
      productCartUpdate.push(productNew); //Nếu chưa có sản phẩm trong giỏ hàng thì thêm sản phẩm đó vào mảng giỏ hàng
    }
    alert(`Thêm sản phẩm "${productNew.name}" vào giỏ hàng thành công!`);
    this.setState({
      productCart: productCartUpdate, //cập nhật mảng giỏ hàng
    });
  };

  deleteFromCart = (productID) => {
    let productCartUpdate = [...this.state.productCart]; //tạo mảng giỏ hàng clone để phục vụ cho việc cập nhật các thay đổi lên mảng giỏ hàng gốc

    let index = productCartUpdate.findIndex(
      (productCart) => productCart.id === productID //tìm index sản phẩm có id trùng với id cần xóa trong mảng giỏ hàng clone
    );

    if (index > -1) {
      productCartUpdate.splice(index, 1); //nếu trong mảng giỏ hàng với id trùng với id sản phẩm cần xóa (index trả về >-1) thì xóa chổ vị trí index ấy
    }

    this.setState({
      productCart: productCartUpdate, //cập nhật mảng giỏ hàng
    });
  };

  updateSoLuong = (productID, soLuongNew) => {
    let productCartUpdate = [...this.state.productCart]; //tạo mảng clone

    let index = productCartUpdate.findIndex(
      (productCart) => productCart.id === productID
    ); //tìm sản phẩm cần cập nhật số lượng trong mảng giỏ hàng dựa trên id sản phẩm

    if (index > -1) {
      let productToUpdate = productCartUpdate[index];

      productToUpdate.soLuong += soLuongNew; //nếu có sản phẩm đó thì tăng số lượng 1 lượng bằng số lượng cần tăng (soLuongNew)

      if (productToUpdate.soLuong < 1) {
        alert("Bạn không thể giảm số lượng sản phẩm về 0");
        productToUpdate.soLuong = 1; //nếu giảm số lượng về 0 thì đồng nghĩa với việc xóa sản phẩm, mà đó là việc của tính năng xóa sản phẩm rồi chứ không còn là cập nhật số lượng sản phẩm, nên giữ số lượng là 1.
      }

      this.setState({
        productCart: productCartUpdate,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="row my-4">
          <div className="col-10">
            <h1>Bài tập Shoe Shop</h1>
          </div>
          <div className="col-2">
            <p
              data-toggle="modal"
              data-target="#exampleModal"
              className="text-dark pt-3"
            >
              <i class="fa-solid fa-cart-shopping fa-2xl"></i>
            </p>
          </div>
        </div>
        <h2 className="my-5 text-success">--- Sản phẩm của chúng tôi ---</h2>
        <div className="container-fluid">
          {/* truyền mảng productList vàphương thức addToCart xuống cho thành phần con productList: */}
          <ProductList
            addToCart={this.addToCart}
            productList={this.productList}
          />
          {/* truyền phương thức updateSoLuong, phương thức deleteFromCart và mảng productCart (từ state) xuống thành phần con Cart */}
          <Cart
            updateSoLuong={this.updateSoLuong}
            deleteFromCart={this.deleteFromCart}
            productCart={this.state.productCart}
          />
        </div>
      </div>
    );
  }
}
