import React from 'react';
import gamepadthumbnail from '../../assets/images/wishlist/product-joystick-1.png';

const Wishlist = () => (
  <div className="Wishlist-container">
    <h1 className="Wishlist-title">My List</h1>
    <p className="Wishlist-detail">There are 1 products in your My List</p>
    <table className="Wishlist-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="Wishlist-product">
            <img
              src={gamepadthumbnail}
              alt="Product"
              className="Wishlist-product-image"
            />
            <div className="Wishlist-product-details">
              <p className="Wishlist-product-title">Sample Product</p>
              <p className="Wishlist-product-review">⭐⭐⭐⭐⭐4.5 (Customer Reviews)</p>
            </div>
          </td>
          <td className="Wishlist-unit-price">$20.00</td>
          <td className="Wishlist-remove">
            <button type="button" className="Wishlist-remove-button">x</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Wishlist;
