import React from 'react';

export default function Footer() {
  return (
    <section className="footer">
      <div className="content-container flex-center footer-container">
        <div className="flex-column align-center">
          <div style={{ width: '60px', height: '60px' }}><img src="/images/makeui-logo.svg" /></div>
          <div className="flex-row">
            <p style={{ marginRight: '30px' }} className="sub-heading center-text">LOGIN</p>
            <p className="sub-heading center-text">MAKE</p>
          </div>
          <div>
            <p style={feedback} className="center-text">Have questions or feedback? <a style={bold} className="underline" href="mailto:contact@makeui.com"> Contact us</a>
            </p>
          </div>
          <div>
            <p style={fine} className="center-text">Created by <span style={bold}>TomYum</span> and designed by <span style={bold}>Equal Parts Studio</span>.</p>
            <p style={fine} className="center-text">Copyright &copy; 2018 MakeUI. All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const feedback = {
  fontSize: '18px'
};

const bold = {
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'black'
}

const fine = {
  fontSize: '12px',
}