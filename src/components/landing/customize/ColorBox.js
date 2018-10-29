import React from 'react';
import { connect } from 'react-redux';
import { setColor, addColor, removeColor, setCornerRadius } from '../../../actions/generate';

class ColorBox extends React.Component {

  onColorChange = (e) => {
    this.props.setColor(this.props.index, e.target.value);
  }

  onRemove = () => {
    this.props.removeColor(this.props.index);
  }

  render() {
    return (
      <div className="color-box" >
        <div className="color-box--color" style={{ background: this.props.color }}></div>
        <div className="color-box--hex">
          <input
            className="color-box--input"
            value={this.props.color}
            onChange={this.onColorChange}
          />
          <button onClick={this.onRemove} className="color-box--remove">x</button>
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

