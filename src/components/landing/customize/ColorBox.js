import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker'
import { setColor, addColor, removeColor, setCornerRadius } from '../../../actions/generate';

class ColorBox extends React.Component {

  state = {
    pickerVisible: false
  }

  onColorChange = (hex) => {
    this.props.setColor(this.props.index, hex);
  };

  onPickerChange = ({ hex }) => {
    console.log(hex);
    this.props.setColor(this.props.index, hex);
  };

  onRemove = () => {
    this.props.removeColor(this.props.index);
  };

  onColorClick = () => {
    console.log('clicked');
    this.setState({ pickerVisible: !this.state.pickerVisible });
  };

  handleClose = () => {
    this.setState({ pickerVisible: false });
  }


  render() {

    const popover = {
      position: 'absolute',
      zIndex: '2',
    }

    const cover = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }

    const title = {
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '0px',
    }

    const desc = {
      marginTop: '4px',
      fontSize: '18px',
      lineHeight: '24px'
    }

    const primaryText = "This is usually your brand color that is applied to important parts of the UI.";
    const secondaryText = "Choose a color that compliments your primary color. This will be applied to less important call-to-actions.";

    return (
      <div>
        <div className="color-box full-width-mobile" onClick={this.onColorClick}>
          <div className="color-box--color" style={{ background: this.props.color }}>
          </div>
          <div className="color-box--hex">
            <p className="color-box--input">{this.props.color}</p>
          </div>
        </div>
        {
          this.state.pickerVisible
            ? (
              <div>
                <div style={cover} onClick={this.handleClose}></div>
                <div style={popover}>
                  <div style={{ position: "absolute" }}>
                    <ColorPicker color={this.props.color} onColorChange={this.onColorChange} onChange={this.onPickerChange} />
                  </div>
                </div>
              </div>
            )
            : null
        }

        {
          (this.props.index === '02' || this.props.index === '01') && (
            <div style={{ maxWidth: '300px', position: 'relative' }}>
              <p style={title}>{this.props.index === '01' ? 'Primary Color' : 'Secondary Color'}</p>
              <p style={desc}>{this.props.index === '01' ? primaryText : secondaryText}</p>
            </div>
          )
        }
      </div>

    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  setColor: (index, value) => dispatch(setColor({ colorIndex: index, colorValue: value })),
  removeColor: (index) => dispatch(removeColor({ colorIndex: index }))
});

export default connect(undefined, mapDispatchToProps)(ColorBox);

