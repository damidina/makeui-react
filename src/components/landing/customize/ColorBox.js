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

  render() {
    return (
      <div>
        <div className="color-box" >
          <div className="color-box--color"
            style={{ background: this.props.color }}
            onClick={this.onColorClick}
          >
            <div className={`tooltip-content ${this.state.pickerVisible ? 'visible' : ''}`} >
              <SketchPicker color={this.props.color} onChange={this.onPickerChange} />
            </div>
          </div>
          <div className="color-box--hex">
            <input
              className="color-box--input"
              value={this.props.color}
              onChange={this.onColorChange}
            />
            <button onClick={this.onRemove} className="color-box--remove">x</button>
          </div>
        </div>



      </div>

    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  setColor: (index, value) => dispatch(setColor({ colorIndex: index, colorValue: value })),
  removeColor: (index) => dispatch(removeColor({ colorIndex: index }))
});

export default connect(undefined, mapDispatchToProps)(ColorBox);

