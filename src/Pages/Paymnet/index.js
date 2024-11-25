import React from 'react';
import telebirr from '../../assets/images/payment/telebirr.png';
import awash from '../../assets/images/payment/awashbirr.png';
import chapa from '../../assets/images/payment/chapa.png';
import cbebirr from '../../assets/images/payment/cbebirr.png';
import flagEthiopia from '../../assets/images/payment/ethiopia.png';

const Payment = () => (
  <div className="Payment-container">
    <h1 className="Payment-title">Payment</h1>
    <p className="Payment-detail">Payment Methods</p>
    <div className="Payment-options">
      {/* Payment Methods */}
      <div className="Payment-methods-grid">
        <label htmlFor="telebirr">
          <input id="telebirr" type="radio" name="payment" value="Telebirr" />
          <span>Telebirr</span>
          <img src={telebirr} alt="Telebirr" className="payment-logo" />
        </label>
        <label htmlFor="awash">
          <input id="awash" type="radio" name="payment" value="Awash" />
          <span>Awash</span>
          <img src={awash} alt="Awash" className="payment-logo" />
        </label>
        <label htmlFor="chapa">
          <input id="chapa" type="radio" name="payment" value="Chapa" />
          <span>Chapa</span>
          <img src={chapa} alt="Chapa" className="payment-logo" />
        </label>
        <label htmlFor="cbe-birr">
          <input id="cbe-birr" type="radio" name="payment" value="CBE Birr" />
          <span>CBE Birr</span>
          <img src={cbebirr} alt="CBE Birr" className="payment-logo" />
        </label>
      </div>

      {/* Price Summary and Mobile Input */}
      <div className="Payment-details-row">
        <div className="Payment-summary">
          <p className="summary-text">Price Summary</p>
          <div className="summary-details">
            <p>
              Subtotal:
              <span>$50</span>
            </p>
            <p>
              Total:
              <span>$60</span>
            </p>
          </div>
        </div>
        <div className="Payment-mobile">
          <label htmlFor="mobile-number">
            Enter mobile number to continue
            <div className="mobile-input">
              {/* Custom mobile code section */}
              <div className="custom-select">
                <img
                  src={flagEthiopia}
                  alt="Ethiopian Flag"
                  className="flag-icon"
                />
                <p className="mobile-code">+251</p>
              </div>
              <input id="mobile-number" type="text" placeholder="Mobile Number" />
            </div>
          </label>
          <button type="button" className="continue-btn">Continue</button>
        </div>

      </div>
    </div>
  </div>
);

export default Payment;
