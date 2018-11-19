import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCheckedTier } from '../../actions/checkout';
import CustomSelect from '../CustomSelect';
import CheckoutFormModal from '../stripe/CheckoutFormModal';
import LoginModal from '../landing/customize/loginModal';
import { startPurchase, downloadForUnlimited } from '../../actions/services/index';
import { startSignOut } from '../../actions/auth';


class Checkout extends Component {

  state = {
    selectOptions: ['Select Purchase Option', 'Unlimited', 'One Time'],
    currentColor: '',
    modalOpen: false,
    complete: false,
    loading: false,
    loginOpen: false,
  };

  handleModalClose = () => { this.setState(({ modalOpen: false })); };
  handleLoginModalClose = () => { this.setState(({ loginOpen: false })); };

  handleTierChange = (tier) => {
    if (tier === 1) {
      this.props.updateCheckedTier('unlimited');
    } else if (tier === 2) {
      this.props.updateCheckedTier('once');
    }
  };

  /* 
   * This method starts the purchase flow,
   * ie. it opens up the CheckoutModal. The 
   * checkout modal handles the presentation
   * of the modal components while this checkout
   * component handles the actualcheckout, by passing
   * needed functions to the modal.
   */
  initiatePurchaseFlow = (e) => {
    // const color = document.getElementById('hero-section-id').style.background;
    // const colors = color.split('(')[1].split(')')[0].split(',');
    // const newColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.95)`;
    e.preventDefault();
    if (this.props.checkout.tier === 'unlimited') {
      this.props.downloadForUnlimited(() => { });
    } else {
      // Opens modal with correct color background
      this.setState({ modalOpen: true, currentColor: 'rgba(207, 232, 186, 0.95)' });
    }
  };

  /* 
   * This method is passed to the modal.
   * It is called when the user submits
   * the form with the correct information.
   * This should only be called when the user:
   *    - Has not purchased anything before
   *    - Has only purchased a one time download
   */
  handleNetworkPurchase = (token) => {
    this.props.startPurchase(token, () => {
      this.completePurchase()
    });
  };

  completePurchase = () => {
    this.setState(({ complete: true }));
  };

  activateLoadingState = () => {
    this.setState(({ loading: true }));
  };

  showSignIn = () => {
    this.setState(({ loginOpen: true, currentColor: 'rgba(207, 232, 186, 0.95)' }));
  };


  render() {

    const checkoutStatus = this.props.auth.isAuthenticated ? (this.props.checkout.tier === 'unlimited' ? true : this.props.checkout.checked === 'none' ? false : true) : (this.props.checkout.checked === 'none' ? false : true);

    return (
      <div style={{ padding: '16px' }}>
        <div style={content}>
          <CustomSelect
            titles={this.state.selectOptions}
            handleOptionSelect={this.handleTierChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: 0 }}>Payment</p>
            <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>We accept credit cards through our secured third party provider Stripe.</p>
            {
              this.props.auth.isAuthenticated
                ? <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>{this.props.auth.userInfo.email} <a className="link" onClick={this.props.signOut}>sign out</a></p>
                : <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>Already have an account? <a onClick={this.showSignIn} className="link">sign in</a></p>
            }
          </div>
          <button
            disabled={!checkoutStatus}
            className="purchace-button full-width-mobile"
            onClick={this.initiatePurchaseFlow}
            style={!checkoutStatus ? { backgroundColor: 'grey' } : { backgroundColor: 'black' }}
          >
            {
              this.props.auth.isAuthenticated
                ? (this.props.checkout.tier === 'unlimited'
                  ? 'Download'
                  : (this.props.checkout.checked === 'unlimited'
                    ? 'Upgrade'
                    : 'Purchase again'))
                : 'Purchase'
            }
          </button>
        </div>

        <LoginModal
          isOpen={this.state.loginOpen}
          handleModalClose={this.handleLoginModalClose}
          currentColor={this.state.currentColor}
        />

        <CheckoutFormModal
          modalOpen={this.state.modalOpen}
          handleModalClose={this.handleModalClose}
          onModalFormSubmit={(token) => this.handleNetworkPurchase(token)}
          whichOption={this.props.checkout.checked}
          purchaseComplete={this.state.complete}
          justLoading={this.state.loading}
          activateLoading={this.activateLoadingState}
          currentColor={this.state.currentColor}
        />

      </div>
    )
  }
}

const content = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: '625px',
  marginTop: '10px',
};

const mapStateToProps = (state) => ({
  config: state.config,
  auth: state.auth,
  checkout: state.checkout,
});

const mapDispatchToProps = (dispatch) => ({
  updateCheckedTier: (tier) => dispatch(updateCheckedTier(tier)),
  downloadForUnlimited: (callback) => dispatch(downloadForUnlimited(callback)),
  startPurchase: (state, callback) => dispatch(startPurchase(state, callback)),
  signOut: () => dispatch(startSignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);