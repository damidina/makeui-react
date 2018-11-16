import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCornerRadius } from '../../actions/generate';
import MediaQuery from 'react-responsive';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Corners extends Component {

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

  render() {
    const cornerRadius = this.props.config.cornerRadius;
    return (
      <div style={{ padding: '16px' }}>
        <div style={content}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="radius-box" style={{ borderRadius: `${cornerRadius}px`, marginRight: '24px' }}>
              <input
                className="radius-box--input"
                type="text"
                value={this.props.config.cornerRadius}
                onChange={this.onChangeRadiusInput}
              />
            </div>
            <MediaQuery minWidth={700}>
              <div style={{ width: '525px' }}>
                <Slider
                  min={0}
                  max={48}
                  value={this.props.config.cornerRadius}
                  railStyle={{ background: "black", width: '100%' }}
                  handleStyle={{ background: "white", border: "3px solid black", width: '30px', height: '30px', marginLeft: '-13px', marginTop: '-13px' }}
                  trackStyle={{ background: "black" }}
                  step={1}
                  onChange={this.onChangeRadius}
                />
              </div>
            </MediaQuery>
          </div>
          <MediaQuery maxWidth={699}>
            <div style={{ width: '90vw', marginTop: '24px' }}>
              <Slider
                min={0}
                max={48}
                value={this.props.config.cornerRadius}
                railStyle={{ background: "black", width: '100%' }}
                handleStyle={{ background: "white", border: "3px solid black", width: '30px', height: '30px', marginLeft: '-13px', marginTop: '-13px' }}
                trackStyle={{ background: "black" }}
                step={1}
                onChange={this.onChangeRadius}
              />
            </div>
          </MediaQuery>
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
    )
  }
}

const content = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  maxWidth: '600px'
};

const pdc = {
  cursor: 'pointer',
  border: '3px solid black',
  height: '50px',
  width: '50px',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const mapStateToProps = (state) => ({
  config: state.config
});

const mapDispatchToProps = (dispatch) => ({
  setCornerRadius: (radius) => dispatch(setCornerRadius(radius))
});

export default connect(mapStateToProps, mapDispatchToProps)(Corners);