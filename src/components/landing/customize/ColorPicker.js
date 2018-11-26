import React from 'react';
import { CustomPicker } from 'react-color';
import { Saturation, Hue, Alpha, EditableInput } from 'react-color/lib/components/common';
import color from 'react-color/lib/helpers/color';

class ColorPicker extends React.Component {

  onInputChange = (data, e) => {
    console.log('asdasdasd');
    if (data.HEX) {
      color.isValidHex(data.HEX) && this.props.onChange({
        hex: data.HEX,
        source: 'hex',
      }, e)
    } else if (data.R || data.G || data.B) {
      this.props.onChange({
        r: data.R || this.props.rgb.r,
        g: data.G || this.props.rgb.g,
        b: data.B || this.props.rgb.b,
        a: this.props.rgb.a,
        source: 'rgb',
      }, e)
    } else if (data.A) {
      if (data.A < 0) {
        data.A = 0
      } else if (data.A > 100) {
        data.A = 100
      }

      data.a /= 100
      this.props.onChange({
        h: this.props.hsl.h,
        s: this.props.hsl.s,
        l: this.props.hsl.l,
        a: data.a,
        source: 'rgb',
      }, e)
    }
  }

  render() {
    return (
      <div className="picker-container" style={{ width: `${this.props.width}px` }}>
        <div className="sat-container">
          <Saturation {...this.props} />
        </div>
        <div className="hue-container">
          <Hue {...this.props} />
        </div>
        <div className="alpha-container">
          <Alpha {...this.props} />
        </div>
        <div className="hex-container">
          <EditableInput
            value={this.props.hex.replace('#', '')}
            label={'HEX'}
            style={inputStylesHex}
            onChange={this.onInputChange}
          />
          <EditableInput
            value={this.props.rgb.r}
            label={'R'}
            style={inputStyles}
            onChange={this.onInputChange}
          />
          <EditableInput
            value={this.props.rgb.g}
            label={'G'}
            style={inputStyles}
            onChange={this.onInputChange}
          />
          <EditableInput
            value={this.props.rgb.b}
            label={'B'}
            style={inputStyles}
            onChange={this.onInputChange}
          />
          <EditableInput
            value={this.props.rgb.a}
            label={'A'}
            style={inputStyles}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default CustomPicker(ColorPicker);

const inputStyles = {
  wrap: {
    margin: '1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    textAlign: 'center',
    height: '30px',
    fontSize: '14px',
    width: '100%',
    border: 'black 2px solid',
  },
  label: {
    paddingTop: '3px',
    fontSize: '14px',
    color: 'black',
    fontWeight: 'bold'
  },
};

const inputStylesHex = {
  wrap: {
    margin: '1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%'
  },
  input: {
    textAlign: 'center',
    height: '30px',
    fontSize: '14px',
    width: '100%',
    border: 'black 2px solid',
  },
  label: {
    paddingTop: '3px',
    fontSize: '14px',
    color: 'black',
    fontWeight: 'bold'
  },
};