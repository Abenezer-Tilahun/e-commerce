import React, { useState } from 'react';

import gamepadmain from '../../assets/images/product-detail/product-joystick-main.png';
import gamepadthumbnail1 from '../../assets/images/product-detail/product-joystick-1.png';
import gamepadthumbnail2 from '../../assets/images/product-detail/product-joystick-2.png';
import gamepadthumbnail3 from '../../assets/images/product-detail/product-joystick-3.png';
import gamepadthumbnail4 from '../../assets/images/product-detail/product-joystick-4.png';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-detail">
      <div className="product-header">
        <div className="product-images">
          <div className="thumbnail-images">
            <img src={gamepadthumbnail1} alt="Thumbnail 1" />
            <img src={gamepadthumbnail2} alt="Thumbnail 2" />
            <img src={gamepadthumbnail3} alt="Thumbnail 3" />
            <img src={gamepadthumbnail4} alt="Thumbnail 4" />
          </div>
          <img src={gamepadmain} alt="Main Product" className="main-image" />
        </div>
        <div className="product-info">
          <h1>Logitech G F710 Wireless Gamepad</h1>
          <p className="brand">Brand: LOGITECH</p>
          <p className="price">$192.00</p>
          <p className="availability">In Stock</p>
          <p className="description">
            2.4 GHz Wireless with USB Nano-Receiver, Controller Dual Vibrational
            Feedback, 4 Switch D-Pad, PC/Steam/Windows/AndroidTV.
          </p>
          <div className="size-selector">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label id="product-size-label" htmlFor="size-selector">Size:</label>
            <input type="hidden" id="size-selector" />
            <div className="size-buttons">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="quantity">
            <div className="quantity-controls">
              <button type="button">-</button>
              <input type="number" defaultValue="1" />
              <button type="button">+</button>
            </div>
            <button type="button" className="add-to-cart">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h2>Description</h2>
        <p>
          This product has been professionally inspected and tested by suppliers.
          The product may have minimal scratches or dents, and a battery with at
          least 80% capacity. Box may be generic and accessories may not be
          original, but will be compatible and fully functional. This product is
          eligible for a replacement or refund within 90 days of receipt if you
          are not satisfied.
        </p>
        <ul>
          <li>Brand: Logitech</li>
          <li>Compatible Devices: PC, Windows</li>
          <li>Controller Type: Windows</li>
          <li>Connectivity Technology: Wireless</li>
          <li>Color: Silver</li>
        </ul>
      </div>
      <div className="customer-reviews">
        <h2>Customer Questions & Answers</h2>
        <textarea placeholder="Write a Review" />
        <button type="button" className="submit-review">
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
