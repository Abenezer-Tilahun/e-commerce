import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signinImage from '../../assets/images/Signin/signin.png';
import Logo from '../../assets/images/logo/log.png';
import google from '../../assets/images/Signin/goggle.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const registrationData = {
      name,
      email,
      phone: phoneNumber,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (response.ok) {
        // Replace alert with a more user-friendly notification

        navigate('/signin'); // Redirect to login page
      } else {
        alert(data.message); // Show error message from the server
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
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
          <img src={Logo} alt="Logo" className="signin-logo" />
          <h1>Sign Up</h1>
          <form className="auth-form" onSubmit={handleSignUp}>
            <div className="form-group-wrapper">
              <div className="form-group">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                Sign Up
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
              Registered?
              <a href="/login">Sign In</a>
            </div>
            <div className="social-login">
              <p>Or continue with</p>
              <button type="button" className="google-login">
                <img src={google} alt="Google" />
                Sign Up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
