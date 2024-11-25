import React from 'react';

const Coupon = () => (
  <div className="coupon-container">
    <h1 className="coupon-title">Loyalty Points</h1>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Reason</th>
            <th>Type</th>
            <th>Loyalty Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Register</td>
            <td>Gained</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Deliver</td>
            <td>Redeem</td>
            <td>50</td>
          </tr>
          <tr className="total-row">
            <td colSpan="2">Total Loyalty Points</td>
            <td>250</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Coupon;
