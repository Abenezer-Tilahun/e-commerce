import React from 'react';

const ForgotPassword = () => (
  <div className="auth-container">
    <h2>Forgot Password</h2>
    <p>Please enter your email address to receive a password reset link.</p>
    <form className="auth-form">
      <input type="email" placeholder="Email" required />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default ForgotPassword;
