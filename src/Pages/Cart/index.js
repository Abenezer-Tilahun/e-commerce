import React from 'react';
import gamepadthumbnail from '../../assets/images/wishlist/product-joystick-1.png';

const Cart = () => (
  <div className="cart-container">
    <h1 className="cart-title">Your Cart</h1>
    <p className="cart-detail">There are 1 products in your Cart</p>
    <div className="table-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cart-product">
              <img
                src={gamepadthumbnail}
                alt="Product"
                className="cart-product-image"
              />
              <div className="cart-product-details">
                <p className="cart-product-title">Sample Product</p>
                <p className="cart-product-review">⭐⭐⭐⭐⭐4.5 (Customer Reviews)</p>
              </div>
            </td>
            <td className="cart-unit-price">$20.00</td>
            <td className="cart-quantity">
              <div className="counter">
                <button type="button">-</button>
                <span>1</span>
                <button type="button">+</button>
              </div>
            </td>
            <td className="cart-remove">
              <button type="button" className="cart-remove-button">x</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="3">Cart Totals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td colSpan="2">$50.00</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td colSpan="2">$55.20</td>
          </tr>
          <tr>
            <td>Estimated For</td>
            <td colSpan="2">Dire Dawa</td>
          </tr>
          <tr>
            <td>Total</td>
            <td colSpan="2">$60.00</td>
          </tr>
          <tr>
            <td colSpan="3" className="center">
              <button type="button" className="cart-button">Place Order</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Cart;
