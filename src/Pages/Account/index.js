import React, { useState } from 'react';
import profile from '../../assets/images/account/profile.jpeg';

const Account = () => {
  const [activeTab, setActiveTab] = useState('edit');

  return (
    <div className="account-container">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-picture">
          <img src={profile} alt="Profile" />
        </div>
      </div>

      {/* Form Section */}
      <div className="form-container">
        {/* Tabs */}
        <div className="tabs">
          <button
            type="button"
            className={`tab ${activeTab === 'edit' ? 'active' : ''}`}
            onClick={() => setActiveTab('edit')}
          >
            Edit Profile
          </button>
          <button
            type="button"
            className={`tab ${activeTab === 'password' ? 'active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </button>
        </div>

        {/* Forms */}
        {activeTab === 'edit' && (
          <div className="form-content">
            <h3>Edit Profile</h3>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <button type="button" className="save-button">Save</button>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="form-content">
            <h3>Change Password</h3>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="old-password">Old Password</label>
              <input
                type="password"
                id="old-password"
                placeholder="Enter old password"
              />
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="new-password">New Password</label>
              <input
                type="password"
                id="new-password"
                placeholder="Enter new password"
              />
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm new password"
              />
            </div>
            <button type="button" className="save-button">Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
