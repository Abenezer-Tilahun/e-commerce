import React from 'react';
import gamepadthumbnail from '../../assets/images/order/product-joystick-1.png';

const OrderCheck = () => (
  <div className="order-check">
    <h1>BILLING DETAILS</h1>
    <form className="order-form">
      {/* Full Name and Country */}
      <div className="form-row">
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter country"
            className="form-input"
          />
        </div>
      </div>

      {/* Street Address */}
      <div className="form-group">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="Enter street address"
          className="form-input"
        />
      </div>

      {/* Town/City, State/Country, Postal Code */}
      <div className="form-row">
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="townCity">Town/City</label>
          <input
            type="text"
            id="townCity"
            name="townCity"
            placeholder="Enter town/city"
            className="form-input"
          />
        </div>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="stateCountry">State/Country</label>
          <input
            type="text"
            id="stateCountry"
            name="stateCountry"
            placeholder="Enter state/country"
            className="form-input"
          />
        </div>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Enter postal code"
            className="form-input"
          />
        </div>
      </div>

      {/* Phone Number and Email Address */}
      <div className="form-row">
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="Enter email address"
            className="form-input"
          />
        </div>
      </div>
    </form>
    {/* Tables Section */}
    <div className="tables-container">
      {/* Selected Items Table */}
      <table className="table">
        <thead>
          <tr>
            <th colSpan="3">Selected Items</th>
          </tr>
          <tr>
            <th>Variation</th>
            <th>Unit Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={gamepadthumbnail}
                alt="Product"
                className="productorder-image"
              />
              <p>Sliver</p>
            </td>
            <td>$25.00</td>
            <td>
              <div className="counter">
                <button type="button">-</button>
                <span>1</span>
                <button type="button">+</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Summary Table */}
      <table className="table">
        <thead>
          <tr>
            <th colSpan="3">Your Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shipping</td>
            <td colSpan="2">$5.00</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td colSpan="2">$30.00</td>
          </tr>
          <tr>
            <td colSpan="3" className="center">
              <button type="button" className="order-button">Place Order</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

);

export default OrderCheck;
