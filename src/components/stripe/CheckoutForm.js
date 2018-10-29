import React, { Component } from 'react';
import { CardElement, EmailElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      email: '',
      emailValid: true
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
    }
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <input
          id="email"
          name="email"
          type="email"
          className={`StripeElement ${this.state.emailValid ? '' : 'StripeElement--invalid'}`}
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <CardElement />
        <button className="stripe-button" onClick={this.submit}>Pay $30</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);