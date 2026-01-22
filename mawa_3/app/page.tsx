'use client';

import React from 'react';
import styled from 'styled-components';

export default function Page() {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Sign In</div>

        <form className="form">
          <input
            placeholder="E-mail"
            type="email"
            className="input"
            required
          />

          <input
            placeholder="Password"
            type="password"
            className="input"
            required
          />

          <span className="forgot-password">
            <a href="#">Forgot Password?</a>
          </span>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <div className="social-account-container">
          <span className="title">Or sign in with</span>

          <div className="social-accounts">
            <button className="social-button google" type="button">
              <svg viewBox="0 0 488 512" className="svg">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </button>

            <button className="social-button apple" type="button">
              <svg viewBox="0 0 384 512" className="svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9z" />
              </svg>
            </button>

            <button className="social-button facebook" type="button">
              <svg viewBox="0 0 320 512" className="svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Make padding and borders predictable */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;

  .container {
    max-width: 350px;
    background: #1a1a1a;
    border-radius: 30px;
    padding: 35px 30px;
    border: 3px solid #ff751f;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: #ff751f;
  }

  .form {
    margin-top: 25px;
  }

  .input {
    width: 100%;
    background: #222240;
    border: none;
    padding: 15px 20px;
    border-radius: 15px;
    margin-top: 20px;
    color: white;
    transition: all 0.3s;
    box-sizing: border-box; /* ensures input stays within container */
  }

  .input:focus {
    outline: none;
    border: 2px solid #ff914d;
    box-shadow: 0 0 10px rgba(255,117,31,0.4);
  }

  .forgot-password a {
    font-size: 11px;
    color: #ff751f;
    text-decoration: none;
    display: block;
    margin-top: 10px;
  }

  .login-button {
    width: 100%;
    margin-top: 25px;
    padding: 15px;
    border-radius: 15px;
    border: none;
    font-weight: bold;
    background: linear-gradient(45deg, #ff751f, #ff914d);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .login-button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(255,117,31,0.4);
  }

  .social-account-container {
    margin-top: 30px;
  }

  .title {
    text-align: center;
    font-size: 10px;
    color: #ff751f;
  }

  .social-accounts {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }

  .social-button {
    background: #1a1a1a;
    border: 2px solid #ff751f;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .social-button:hover {
    transform: scale(1.2);
    background: #ff751f;
    box-shadow: 0 5px 15px rgba(255,117,31,0.4);
  }

  .svg {
    width: 18px;
    height: 18px;
    fill: #ff751f;
  }

  .social-button:hover .svg {
    fill: #121212;
  }
`;
