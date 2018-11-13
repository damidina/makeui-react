import React from 'react';
import Modal from 'react-modal';
import { sendSignIn } from '../../../helpers/auth';

class LoginModal extends React.Component {

  state = {
    email: '',
    emailSent: false,
    emailValid: true,
  };

  onEmailChange = (e) => {
    this.setState(({ email: e.target.value }));
  };

  submit = () => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(this.state.email));
    if (re.test(this.state.email)) {
      sendSignIn(this.state.email).then((res) => {
        this.setState(({ emailValid: true, emailSent: true }));
      }).catch((e) => {
        console.log(e)
      })
    } else {
      this.setState(({ emailValid: false }));
    }
  };

  render() {

    Modal.defaultStyles.overlay.backgroundColor = this.props.currentColor;

    return (
      <Modal
        isOpen={this.props.isOpen}
        ariaHideApp={false}
        onRequestClose={this.props.handleModalClose}
        closeTimeoutMS={0}
        className="modal"
      >
        <div>
          <div className="checkout">
            <h1 className="modal-title">LOGIN</h1>

            <div className="email-group">
              <p style={{ fontWeight: 'bold' }}>EMAIL</p>
              <input
                id="email"
                name="email"
                type="email"
                className={`StripeElement ${this.state.emailValid ? '' : 'StripeElement--invalid'}`}
                placeholder="Email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              {this.state.emailSent && <p style={{ fontWeight: 'bold' }}>Email Sent!</p>}
            </div>

          </div>
          <button
            style={{ fontWeight: 'bold' }}
            className="purcahse-button"
            onClick={this.submit}
          >
            Send Email Login Link
        </button>
        </div>
      </Modal>
    );
  }
};

export default LoginModal;