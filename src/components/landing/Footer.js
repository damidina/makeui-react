import React from 'react';
import LoginModal from './customize/loginModal';
import MediaQuery from 'react-responsive';

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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <p style={{ margin: '15px', cursor: 'pointer' }} onClick={this.openLoginModal} className="sub-heading center-text">LOGIN</p>
              <p style={{ margin: '15px', cursor: 'pointer' }} onClick={this.props.onMakeClick} className="sub-heading center-text">MAKE</p>
            </div>
            <div style={{margin: '15px', fontSize: '18px'}}>
              <p className="center-text" style={{ lineHeight: '27px' }}>Are you a designer building amazing themes?</p><p><a style={bold} className="underline" href="mailto:dami@tomyum.design"> Send us a message</a> to publish themes on our platform.</p>
            </div>
            <div>
              <MediaQuery minWidth={500}>
                {(match) => {
                  if (match) {
                    return <p style={feedback} className="center-text">Have questions or feedback? <a style={bold} className="underline" href="mailto:dami@tomyum.design"> Contact us.</a></p>
                  } else {
                    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <p style={feedback} className="center-text">Have questions or feedback?</p>
                      <a style={{ ...bold, marginBottom: '20px' }} className="underline" href="mailto:dami@tomyum.design"> Contact us.</a>
                    </div>
                  }
                }}
              </MediaQuery>
            </div>
            <div>
              <p style={fine} className="center-text">Created by <a style={bold} href="http://tomyum.design/" target="_blank" rel="nofollow noopener noreferrer">TomYum</a> and designed by <a style={bold} href="https://equalparts.studio/" target="_blank" rel="nofollow noopener noreferrer">Equal Parts Studio</a>.</p>
              <p style={fine} className="center-text">Copyright &copy; 2019 MakeUI. All rights reserved.</p>
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
