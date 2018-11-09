import React from 'react';
import { CustomPicker } from 'react-color';
import { Saturation, Hue, EditableInput } from 'react-color/lib/components/common';

class ColorPicker extends React.Component {

  _onColorChange = ({ hex }) => {
    const hexStr = String(hex);
    this.props.onColorChange(hexStr);
  };

  render() {
    return (
      <div style={pickerContainer}>
        <div style={satContainer}>
          <Saturation {...this.props} />
        </div>
        <div style={hueContainer}>
          <Hue {...this.props} />
        </div>
        <div style={hexContainer}>
          <EditableInput
            value={this.props.hex}
            label={'hex'}
            style={inputStyles}
            onChange={this._onColorChange}
          />
        </div>
      </div>
    );
  }
}

export default CustomPicker(ColorPicker);

const pickerContainer = {
  width: '300px',
  padding: '5px',
  border: 'black 3px solid',
  background: 'white'
};

const satContainer = {
  width: '284px',
  height: '100px',
  position: 'relative',
  border: 'black 3px solid',
};

const hueContainer = {
  width: '284px',
  height: '25px',
  position: 'relative',
  marginTop: '8px',
  border: 'black 3px solid',
};

const hexContainer = {
  width: '284px',
  position: 'relative',
  marginTop: '8px',
};

const inputStyles = {
  wrap: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  input: {
    width: '100%',
    border: 'black 3px solid',
  },
  label: {
    marginRight: '4px',
    paddingTop: '3px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
  },
};