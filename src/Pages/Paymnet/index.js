import React, { useState } from 'react';
import telebirr from '../../assets/images/payment/telebirr.png';
import awash from '../../assets/images/payment/awashbirr.png';
import chapa from '../../assets/images/payment/chapa.png';
import cbebirr from '../../assets/images/payment/cbebirr.png';
import flagEthiopia from '../../assets/images/payment/ethiopia.png';
import successIcon from '../../assets/images/payment/paymnetsuccess.png';
import failureIcon from '../../assets/images/payment/paymnetfailed.png';

const Payment = () => {
  const [showModal, setShowModal] = useState(false); // State to toggle modal
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' or 'failure'
  const [paymentAmount] = useState(60); // Payment amount for summary

  const handlePayment = () => {
    // Example: Simulate a payment process
    const isSuccessful = Math.random() > 0.5; // Random success/failure
    setPaymentStatus(isSuccessful ? 'success' : 'failure');
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false); // Close modal

  return (
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
                <span>
                  $
                  {paymentAmount}
                </span>
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
            <button type="button" className="continue-btn" onClick={handlePayment}>
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button type="button" className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-icon">
              <img
                src={paymentStatus === 'success' ? successIcon : failureIcon}
                alt={paymentStatus === 'success' ? 'Success' : 'Failed'}
              />
            </div>
            <h2 className={paymentStatus === 'success' ? 'success-text' : 'error-text'}>
              {paymentStatus === 'success' ? 'Success' : 'Your payment failed'}
            </h2>
            <p>
              {paymentStatus === 'success'
                ? `Your payment of $${paymentAmount} completed successfully.`
                : `Payment could not be completed. Retry payment of $${paymentAmount} using the options below:`}
            </p>
            {paymentStatus !== 'success' && (
              <div className="retry-options">
                <label htmlFor="telebirr-retry">
                  <input id="telebirr-retry" type="radio" name="payment-option" />
                  <img src={telebirr} alt="Telebirr" />
                </label>
                <label htmlFor="chapa-retry">
                  <input id="chapa-retry" type="radio" name="payment-option" />
                  <img src={chapa} alt="Chapa" />
                </label>
              </div>
            )}
            <button type="button" className="action-btn" onClick={closeModal}>
              {paymentStatus === 'success' ? 'OK' : 'Retry'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
