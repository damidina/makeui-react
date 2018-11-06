import React from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import { setColor, addColor, removeColor, setCornerRadius } from '../../../actions/generate';

class ColorBox extends React.Component {

  state = {
    pickerVisible: false
  }

  onColorChange = (e) => {
    this.props.setColor(this.props.index, e.target.value);
  };

  onPickerChange = ({ hex }) => {
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
      position: 'relative',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }

    return (
      <div>
        <div className="color-box" onClick={this.onColorClick}>
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
                    <SketchPicker color={this.props.color} onChange={this.onPickerChange} />
                  </div>
                </div>
              </div>
            )
            : null
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

