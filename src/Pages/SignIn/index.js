import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signinImage from '../../assets/images/Signin/signin.png';
import Logo from '../../assets/images/logo/log.png';
import google from '../../assets/images/Signin/goggle.png';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const loginData = {
      emailOrPhone: email, // Either email or phone
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token (e.g., in localStorage or context)
        localStorage.setItem('authToken', data.token);

        // Navigate to the home page or a protected route
        navigate('/');
      } else {
        alert(data.message); // Show error message from the server
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="signin-container">
      {/* Ellipses at corners */}
      <div className="ellipse large-left-top" />
      <div className="ellipse small-left-top" />
      <div className="ellipse large-right-bottom" />
      <div className="ellipse small-right-bottom" />
      <div className="ellipse left-bottom" />
      <div className="ellipse right-top" />

      {/* Left Image Section */}
      <div className="signin-image">
        <img src={signinImage} alt="SignIn Visual" />
      </div>

      {/* Right Form Section */}
      <div className="signin-form">
        <div className="form-container">
          {/* Logo section */}
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="signin-logo" />
            <h2>Welcome Back!</h2>
            <p>Sign in to your account</p>
          </div>
          <form className="auth-form" onSubmit={handleSignIn}>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="emailOrPhone">Email or Phone Number</label>
              <input
                type="email"
                id="emailOrPhone"
                placeholder="Enter your email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-links">
              <a href="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
            </div>

            <div className="signup-link">
              Not registered?
              {' '}
              <a href="/signup">Sign Up</a>
            </div>

            <div className="social-login">
              <button type="button" className="google-login">
                <img src={google} alt="Google" />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
