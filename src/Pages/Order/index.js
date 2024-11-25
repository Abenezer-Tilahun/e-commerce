import React from 'react';

const Order = () => (
  <div className="order-container">
    <h1 className="order-title">Order</h1>
    <div className="tableorder-responsive">
      <table className="tableorder table-striped">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Payment ID</th>
            <th>Product</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Total Amount</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>#98765</td>
            <td>Gamepad</td>
            <td>John Doe</td>
            <td>+1234567890</td>
            <td>123 Main Street, City</td>
            <td>$50</td>
            <td>john.doe@example.com</td>
          </tr>
          <tr>
            <td>#12346</td>
            <td>#98766</td>
            <td>Gamepad</td>
            <td>Jane Smith</td>
            <td>+1234567891</td>
            <td>456 Elm Street, City</td>
            <td>$50</td>
            <td>jane.smith@example.com</td>
          </tr>
          <tr>
            <td>#12347</td>
            <td>#98767</td>
            <td>Gamepad</td>
            <td>David Lee</td>
            <td>+1234567892</td>
            <td>789 Oak Avenue, City</td>
            <td>$50</td>
            <td>david.lee@example.com</td>
          </tr>
          <tr>
            <td>#12348</td>
            <td>#98768</td>
            <td>Gamepad</td>
            <td>Sarah Connor</td>
            <td>+1234567893</td>
            <td>101 Pine Lane, City</td>
            <td>$50</td>
            <td>sarah.connor@example.com</td>
          </tr>
          <tr>
            <td>#12349</td>
            <td>#98769</td>
            <td>Gamepad</td>
            <td>Bruce Wayne</td>
            <td>+1234567894</td>
            <td>Wayne Manor, Gotham</td>
            <td>$50</td>
            <td>bruce.wayne@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Order;
