import React from 'react';
import { GiDeliveryDrone, GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import Facebook from '../../assets/images/footer/facebook.png';
import Instagram from '../../assets/images/footer/instgram.png';
import TikTok from '../../assets/images/footer/tiktok.png';
import Telegram from '../../assets/images/footer/telegram.png';
import qrsacn from '../../assets/images/footer/qr scan.jpeg';
import appStoreIcon from '../../assets/images/footer/App store.png';
import googlePlayIcon from '../../assets/images/footer/google play.png';
import logo from '../../assets/images/header/Logo.png';

const Footer = () => (
  <footer className="footer">
    {/* Top Section */}
    <div className="footer-top">
      <div className="feature">
        <GiDeliveryDrone className="feature-icon" />
        <h4>FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="feature">
        <BiSupport className="feature-icon" />
        <h4>24/7 CUSTOMER SERVICE</h4>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="feature">
        <GiReceiveMoney className="feature-icon" />
        <h4>MONEY BACK GUARANTEE</h4>
        <p>We return money within 30 days</p>
      </div>
    </div>

    {/* Middle Section */}
    <div className="footer-middle">
      <img src={logo} alt="Logo" className="logo-icon" />
      <div className="footer-section">
        <h4>Support</h4>
        <p>Dire Dawa, Addis Ababa</p>
        <p>Companydomain@gmail.com</p>
        <p>+251912345678</p>
      </div>
      <div className="footer-section">
        <h4>My Account</h4>
        <ul>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Download App</h4>
        <p>Save $3 with App New User Only</p>
        <div className="app-icons">
          <img src={qrsacn} alt="QR Code" />
          <div>
            <img src={appStoreIcon} alt="App Store" />
            <img src={googlePlayIcon} alt="Google Play" />
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com"><img src={Facebook} alt="Facebook" /></a>
          <a href="https://www.instagram.com"><img src={Instagram} alt="Instagram" /></a>
          <a href="https://www.tiktok.com"><img src={TikTok} alt="TikTok" /></a>
          <a href="https://telegram.org"><img src={Telegram} alt="Telegram" /></a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="footer-bottom">
      <p>&copy; 2024. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
