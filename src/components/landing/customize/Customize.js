import React from 'react';
import ColorBox from './ColorBox';
import { connect } from 'react-redux';
import { setCornerRadius, setColor } from '../../../actions/generate';
import { updateCheckedTier } from '../../../actions/checkout';
import CustomizeHeader from './CustomizeHeader';
import startPurchase from '../../../actions/services/index';
import CheckoutFormModal from '../../stripe/CheckoutFormModal';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Customize extends React.Component {

  state = {
    tier: 'once',
    charging: false
  }

  handleTierChange = (tier) => {
    this.setState({ tier });
    this.props.updateCheckedTier(tier);
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

  onPurchase = (e) => {
    e.preventDefault();
    this.setState({ charging: true });
  }

  handleNetworkPurchace = (token) => {
    this.props.startPurchase(token);
  };

  handleModalClose = () => {
    this.setState({ charging: false });
  }

  render() {
    return (
      <div className="customize-section">
        <CustomizeHeader />
        <div className="content-container flex-row-break-dl">
          <div>
            <h2 className="heading">Colours</h2>
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
          <div className="corner-radius-container">
            <h2 className="heading">Corner Radius</h2>
            <div className="custom-slider-flex">
              <div className="radius-box">
                <input
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
                  handleStyle={{ background: "white", border: "2px solid black" }}
                  trackStyle={{ background: "black" }}
                  activeDotStyle={{}}
                  step={1}
                  onChange={this.onChangeRadius}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          <h2 className="heading">Purchase</h2>
          <div className="flex-row-normal">
            <div className="radio-purchase">
              <div className="radio-group">
                <div onClick={() => this.handleTierChange('once')} className="radio-outer">
                  {this.state.tier === 'once' && <div className="radio-inner" />}
                </div>
                <p>One time</p>
              </div>
              <div className="radio-group">
                <div onClick={() => this.handleTierChange('unlimited')} className="radio-outer">
                  {this.state.tier === 'unlimited' && <div className="radio-inner" />}
                </div>
                <p>Lifetime</p>
              </div>
            </div>
            <div className="">
              <button
                className="purchace-button"
                onClick={this.onPurchase}
              >
                Purchace
              </button>
            </div>
          </div>
        </div>
        <CheckoutFormModal
          charging={this.state.charging}
          handleModalClose={this.handleModalClose}
          onModalFormSubmit={(token) => this.handleNetworkPurchace(token)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  config: state.config,
  keys: Object.keys(state.config.colors)
});

const mapDispatchToProps = (dispatch) => ({
  setColor: (index, value) => dispatch(setColor({ colorIndex: index, colorValue: value })),
  setCornerRadius: (radius) => dispatch(setCornerRadius(radius)),
  startPurchase: (state) => dispatch(startPurchase(state)),
  updateCheckedTier: (tier) => dispatch(updateCheckedTier(tier))
});


export default connect(mapStateToProps, mapDispatchToProps)(Customize);