import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      email: '',
      emailValid: true,
      once: {
        title: 'One time download',
        amount: '$10'
      },
      unlimited: {
        title: 'Unlimited Download',
        amount: '$30'
      }

    }
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  };

  async submit(ev) {
    if (this.state.email === "") {
      this.setState({ emailValid: false });
    } else {
      let { token } = await this.props.stripe.createToken({ email: this.state.email });
      this.props.onModalFormSubmit(token);
      this.props.activateLoading();
    }
  }

  render() {
    const type = this.props.whichOption === 'once'
      ? this.state.once
      : this.state.unlimited;
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ cursor: 'pointer', position: 'absolute', width: '15px', height: '15px', right: '4px', top: '4px' }}>
          <img src="/images/x.svg" onClick={this.props.onRequestClose} />
        </div>
        <div>
        </div>
        <div className="checkout">
          <h1 className="modal-title">{type.title}</h1>
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
          </div>
          <div className="credit-card-group">
            <p style={{ alignSelf: "flex-start", fontWeight: 'bold' }}>CREDIT CARD</p>
            <div className="card-number">
              <CardNumberElement className="card-number-input" />
            </div>
            <div className="card-exp-ccv">
              <CardExpiryElement className="exp" />
              <CardCVCElement className="ccv" />
            </div>
          </div>

        </div>
        <button
          style={{ fontWeight: 'bold' }}
          className="purcahse-button"
          onClick={this.submit}
        >
          Pay {type.amount}
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);