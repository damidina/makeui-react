import React from 'react';

export default function Footer() {
  return (
    <section className="footer">
      <div className="content-container flex-center footer-container">
        <div className="flex-column align-center">
          <div className="logo-box"><img src="/images/makeui-logo.svg" /></div>
          <div className="flex-row separate">
            <p className="sub-heading center-text">Contact</p>
            <p className="sub-heading center-text">Login</p>
            <p className="sub-heading center-text">Make</p>
          </div>
          <div>
            <p className="sub-heading center-text">Have questions or feedback? <a href="mailto:contact@makeui.com"> Contact us</a>
            </p>
          </div>
          <div><p className="paragraph center-text"> Copyright &copy; 2018 MakeUI. All rights reserved</p></div>
        </div>
      </div>
    </section>
  );
};