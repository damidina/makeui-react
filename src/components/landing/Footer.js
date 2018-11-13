import React from 'react';
import LoginModal from './customize/loginModal';

class Footer extends React.Component {

  state = {
    loginModal: false,
    currentColor: '',
  };

  handleLoginModalClose = () => {
    this.setState(({ loginModal: false }));
  };

  openLoginModal = () => {
    const color = document.getElementById('hero-section-id').style.background;
    const colors = color.split('(')[1].split(')')[0].split(',');
    const newColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.95)`
    this.setState(({ loginModal: true, currentColor: newColor }));
  };

  render() {
    return (
      <section className="footer">
        <div className="content-container flex-center footer-container">
          <div className="flex-column align-center">
            <div style={{ width: '60px', height: '60px' }}><img src="/images/makeui-logo.svg" /></div>
            <div className="flex-row">
              <p style={{ margin: '15px', cursor: 'pointer' }} onClick={this.openLoginModal} className="sub-heading center-text">LOGIN</p>
              <p style={{ margin: '15px', cursor: 'pointer' }} onClick={this.props.onMakeClick} className="sub-heading center-text">MAKE</p>
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
        <LoginModal
          isOpen={this.state.loginModal}
          handleModalClose={this.handleLoginModalClose}
          currentColor={this.state.currentColor}
        />
      </section>
    );
  }
};

export default Footer;

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