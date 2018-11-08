import React from 'react';
import ColorBox from './ColorBox';
import { connect } from 'react-redux';
import { setCornerRadius, setColor } from '../../../actions/generate';
import { updateCheckedTier } from '../../../actions/checkout';
import CustomizeHeader from './CustomizeHeader';
import { startPurchase, downloadForUnlimited } from '../../../actions/services/index';
import CheckoutFormModal from '../../stripe/CheckoutFormModal';
import Slider from 'rc-slider';
import { startSignOut } from '../../../actions/auth';
import CustomSelect from '../../CustomSelect';
import 'rc-slider/assets/index.css';


class Customize extends React.Component {

  state = {
    tier: 'once',
    charging: false,
    complete: false,
    loading: false,
    selectOptions: ['Select Purchase Option', 'Unlimited', 'One Time']
  };

  componentDidUpdate() {
    if (this.props.shouldScroll) {
      console.log('scroll');
      const pos = this.customize.offsetTop;
      this.customize.scrollIntoView({ behavior: "smooth", alignToTop: true });
    }
  }

  handleTierChange = (tier) => {
    if (tier === 1) {
      this.setState(({ tier: 'unlimited' }));
      this.props.updateCheckedTier('unlimited');
    } else if (tier === 2) {
      this.setState(({ tier: 'once' }));
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
    e.preventDefault();
    if (this.props.checkout.tier === 'unlimited') {
      this.download()
    } else {
      this.setState({ charging: true });
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
  }

  render() {

    const cornerRadius = this.props.config.cornerRadius;

    return (
      <div className="customize-section" ref={r => this.customize = r}>
        <CustomizeHeader />
        <div className="content-container flex-row-break-dl">
          <div>
            <h2 className="sub-heading black">COLORS</h2>
            <div className="flex-row-normal max-half">
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
            <h2 className="sub-heading black">CORNER RADIUS</h2>
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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
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
            <CustomSelect
              titles={this.state.selectOptions}
              handleOptionSelect={this.handleTierChange}
            />
            <div className="">
              <button
                className="purchace-button"
                onClick={this.onPurchase}
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

          </div>
          {
            this.props.auth.isAuthenticated
              ? <p>{this.props.auth.userInfo.email} <a className="link" onClick={this.props.signOut}>sign out</a></p>
              : <p>Already have an account? <a className="link">sign in</a></p>
          }
        </div>
        <CheckoutFormModal
          charging={this.state.charging}
          handleModalClose={this.handleModalClose}
          onModalFormSubmit={(token) => this.handleNetworkPurchase(token)}
          whichOption={this.props.checkout.checked}
          purchaseComplete={this.state.complete}
          justLoading={this.state.loading}
          activateLoading={this._activateLoadingState}
        />
      </div>
    )
  }
}

const pdc = {
  cursor: 'pointer',
  border: '3px solid black',
  height: '42px',
  width: '42px',
  marginTop: '10px',
  marginRight: '42px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

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