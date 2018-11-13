import React from 'react';
import ColorBox from './ColorBox';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { setCornerRadius, setColor } from '../../../actions/generate';
import { updateCheckedTier } from '../../../actions/checkout';
import CustomizeHeader from './CustomizeHeader';
import { startPurchase, downloadForUnlimited } from '../../../actions/services/index';
import CheckoutFormModal from '../../stripe/CheckoutFormModal';
import Slider from 'rc-slider';
import { startSignOut } from '../../../actions/auth';
import LoginModal from './loginModal';
import CustomSelect from '../../CustomSelect';
import 'rc-slider/assets/index.css';

class Customize extends React.Component {

  state = {
    loginModal: false,
    charging: false,
    complete: false,
    loading: false,
    selectOptions: ['Select Purchase Option', 'Unlimited', 'One Time'],
    currentColor: '',
    tooltipVis: true,
  };

  handleLoginModalClose = () => {
    this.setState(({ loginModal: false }));
  };

  showSignIn = () => {
    const color = document.getElementById('hero-section-id').style.background;
    const colors = color.split('(')[1].split(')')[0].split(',');
    const newColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.95)`

    this.setState(({ loginModal: true, currentColor: newColor }));
  };

  toolTipHover = () => {
    const vis = this.state.tooltipVis ? 'visible' : 'hidden';
    this.toolTip.style.visibility = vis
    this.setState(({ tooltipVis: !this.state.tooltipVis }));
  };

  componentDidUpdate() {
    if (this.props.shouldScroll) {
      const pos = this.customize.offsetTop;
      this.customize.scrollIntoView({ behavior: "smooth", alignToTop: true });
    }
  }

  handleTierChange = (tier) => {
    if (tier === 1) {
      this.props.updateCheckedTier('unlimited');
    } else if (tier === 2) {
      this.props.updateCheckedTier('once');
    }
  };

  onColorChange = (index, value) => { this.props.setColor(index, value); };
  onChangeRadius = (radius) => { this.props.setCornerRadius(radius); };

  onChangeRadiusInput = (e) => {
    const radius = e.target.value;
    if (radius === "") {
      this.props.setCornerRadius(0);
    }
    if (parseInt(radius) <= 48 && radius.match(/^(\s*|\d+)$/)) {
      this.props.setCornerRadius(parseInt(radius));
    }
  };

  /*
   * When user clicks on action button first check
   * what tier the user is, if user is unlimited:
   *    - download file with current config
   * If user has no tier or is of tier 'once'
   *    - Open modal for payment
   */
  onPurchase = (e) => {
    const color = document.getElementById('hero-section-id').style.background;
    const colors = color.split('(')[1].split(')')[0].split(',');
    const newColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.95)`
    e.preventDefault();
    if (this.props.checkout.tier === 'unlimited') {
      this.download()
    } else {
      this.setState({ charging: true, currentColor: newColor });
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
    this.setState(({ complete: true }))
  };

  /* 
   * This method is only called when the
   * user is authenticated and the user has
   * an unlimited tier
   */
  download = () => {
    this.props.downloadForUnlimited(() => {
      // this.handleModalClose();
    });
  };

  handleModalClose = () => {
    this.setState({ charging: false, complete: false, loading: false });
  }

  _activateLoadingState = () => {
    this.setState(({ loading: true }));
  };

  render() {

    const cornerRadius = this.props.config.cornerRadius;
    const checkoutStatus = this.props.auth.isAuthenticated ? (this.props.checkout.tier === 'unlimited' ? true : this.props.checkout.checked === 'none' ? false : true) : (this.props.checkout.checked === 'none' ? false : true);

    return (
      <div style={{ overflow: 'hidden' }} className="customize-section" ref={r => this.customize = r}>
        <CustomizeHeader />
        <div className="content-container flex-row-break-dl">
          <div className="full-width-mobile">
            <h2 className="sub-heading black">COLORS</h2>
            <div className="flex-row-normal">
              {this.props.keys.map((key) => (
                <ColorBox
                  key={key}
                  index={key}
                  onChange={(key, value) => this.onColorChange(key, value)}
                  color={this.props.config.colors[key]} />
              ))}
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <h2 className="sub-heading black">CORNER RADIUS</h2>
              <div style={{ width: '24px', height: '24px', alignSelf: 'center', marginTop: '15px', marginLeft: '10px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-170px', bottom: '1px' }}>
                    <div ref={r => this.toolTip = r} className="tooltip">
                      <p>This defines how round you want your corners! 0 is square!</p>
                    </div>
                  </div>
                </div>
                <img onMouseOver={this.toolTipHover} onMouseLeave={this.toolTipHover} src="/images/info.svg" />
              </div>
            </div>
            <div className="custom-slider-flex">
              <div className="radius-box" style={{ borderRadius: `${cornerRadius}px` }}>
                <input
                  className="radius-box--input"
                  type="text"
                  value={this.props.config.cornerRadius}
                  onChange={this.onChangeRadiusInput}
                />
              </div>
              <div className="slider-container">
                <Slider
                  min={0}
                  max={48}
                  value={this.props.config.cornerRadius}
                  railStyle={{ background: "black" }}
                  handleStyle={{ background: "white", border: "3px solid black", width: '30px', height: '30px', marginLeft: '-13px', marginTop: '-13px' }}
                  trackStyle={{ background: "black" }}
                  step={1}
                  onChange={this.onChangeRadius}
                />
              </div>
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: 0 }}>Corners</p>
            <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>The radius will be applied to the corners of borders, buttons, and form fields.</p>
            <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: 0 }}>Predefined Corners</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              {/* find pdc at bottom of this file */}
              <div onClick={() => this.onChangeRadius(0)} style={{ ...pdc, borderRadius: '0px', }} className={cornerRadius === 0 ? 'cr-selected' : ''}>
                <p style={{ fontSize: '18px' }}>0</p>
              </div>
              <div onClick={() => this.onChangeRadius(5)} style={{ ...pdc, borderRadius: '5px' }} className={cornerRadius === 5 ? 'cr-selected' : ''}>
                <p style={{ fontSize: '18px' }}>5</p>
              </div>
              <div onClick={() => this.onChangeRadius(10)} style={{ ...pdc, borderRadius: '10px' }} className={cornerRadius === 10 ? 'cr-selected' : ''}>
                <p style={{ fontSize: '18px' }}>10</p>
              </div>
              <div onClick={() => this.onChangeRadius(15)} style={{ ...pdc, borderRadius: '15px' }} className={cornerRadius === 15 ? 'cr-selected' : ''}>
                <p style={{ fontSize: '18px' }}>15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          <h2 className="sub-heading black">PURCHASE</h2>
          <div className="flex-row-normal">
            {
              this.props.checkout.tier !== 'unlimited' && (
                <CustomSelect
                  titles={this.state.selectOptions}
                  handleOptionSelect={this.handleTierChange}
                />
              )
            }

            <MediaQuery maxWidth={722}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: 0 }}>Payment</p>
                <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>We accept credit cards through our secured third party provider Stripe.</p>
                {
                  this.props.auth.isAuthenticated
                    ? <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>{this.props.auth.userInfo.email} <a className="link" onClick={this.props.signOut}>sign out</a></p>
                    : <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>Already have an account? <a onClick={this.showSignIn} className="link">sign in</a></p>
                }
              </div>
            </MediaQuery>

            <div style={this.props.checkout.tier === 'unlimited' ? { width: '100%' } : {}}>
              <button
                disabled={!checkoutStatus}
                className="purchace-button full-width-mobile"
                onClick={this.onPurchase}
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

              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  {this.props.checkout.tier !== 'unlimited' && <img style={{ width: '60px', alignSelf: 'center', position: 'absolute' }} src="/images/arm-hand.svg" />}
                </div>
              </div>
            </div>
            <MediaQuery minWidth={723}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: 0 }}>Payment</p>
                <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>We accept credit cards through our secured third party provider Stripe.</p>
                {
                  this.props.auth.isAuthenticated
                    ? (
                      <div>
                        <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>{this.props.auth.userInfo.email} <a className="link" onClick={this.props.signOut}>sign out</a></p>
                        <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>Plan: {this.props.checkout.tier}</p>
                      </div>
                    )
                    : <p style={{ fontSize: '18px', marginTop: '4px', lineHeight: '24px' }}>Already have an account? <a onClick={this.showSignIn} className="link">sign in</a></p>
                }
              </div>
            </MediaQuery>

          </div>
        </div>

        <LoginModal
          isOpen={this.state.loginModal}
          handleModalClose={this.handleLoginModalClose}
          currentColor={this.state.currentColor}
        />

        <CheckoutFormModal
          charging={this.state.charging}
          handleModalClose={this.handleModalClose}
          onModalFormSubmit={(token) => this.handleNetworkPurchase(token)}
          whichOption={this.props.checkout.checked}
          purchaseComplete={this.state.complete}
          justLoading={this.state.loading}
          activateLoading={this._activateLoadingState}
          currentColor={this.state.currentColor}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  config: state.config,
  keys: Object.keys(state.config.colors),
  auth: state.auth,
  checkout: state.checkout
});

const mapDispatchToProps = (dispatch) => ({
  setColor: (index, value) => dispatch(setColor({ colorIndex: index, colorValue: value })),
  setCornerRadius: (radius) => dispatch(setCornerRadius(radius)),
  startPurchase: (state, callback) => dispatch(startPurchase(state, callback)),
  updateCheckedTier: (tier) => dispatch(updateCheckedTier(tier)),
  signOut: () => dispatch(startSignOut()),
  downloadForUnlimited: (callback) => dispatch(downloadForUnlimited(callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(Customize);

const pdc = {
  cursor: 'pointer',
  border: '3px solid black',
  height: '42px',
  width: '42px',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};