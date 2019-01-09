import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker'
import { setColor, addColor, removeColor, setCornerRadius } from '../../../actions/generate';
import MediaQuery from 'react-responsive';

class ColorBox extends React.Component {

  state = {
    pickerVisible: false,
    pickerWidth: 0
  }

  onColorChange = (hex) => {
    this.props.setColor(this.props.index, hex);
  };

  onChangeSat = (data) => {
    console.log('SAT')
  };

  onPickerChange = (data) => {
    this.props.setColor(this.props.index, data.hex);
  };

  onRemove = () => {
    this.props.removeColor(this.props.index);
  };

  onColorClick = () => {
    this.setState({
      pickerVisible: !this.state.pickerVisible,
      pickerWidth: this.colorBox.offsetWidth
    });
  };

  handleClose = () => {
    this.setState({ pickerVisible: false });
  }

  handleResize = () => {
    this.setState(({ pickerWidth: this.colorBox.offsetWidth }));
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
      marginTop: '10px',
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
      <div ref={r => this.colorBox = r} className="color-box">
        <div className="color-palette" onClick={this.onColorClick}>
          <div className="color-box--color" style={{ background: this.props.color }}>
          </div>
          <div className="color-box--hex">
            <p className="color-box--input">{this.props.color}</p>
          </div>
        </div>
        {
          this.state.pickerVisible
            ? (
              <div className="pass-grid">
                <div style={cover} onClick={this.handleClose}></div>
                <div style={popover}>
                  <div style={{ position: "absolute" }}>
                    <ColorPicker width={this.state.pickerWidth} color={this.props.color} onChangeSat={this.onChangeSat} onChangeComplete={this.onPickerChange} />
                  </div>
                </div>
              </div>
            )
            : null
        }

        {
          (this.props.index === '02' || this.props.index === '01') && (
            <MediaQuery maxWidth={460}>
              {(match) => {
                if (match) {
                  return <div>
                    <p style={{ ...title, fontSize: '14px' }}>{this.props.index === '01' ? 'Primary Color' : 'Secondary Color'}</p>
                    <p style={{ ...desc, fontSize: '14px' }}>{this.props.index === '01' ? primaryText : secondaryText}</p>
                  </div>
                } else {
                  return <div>
                    <p style={title}>{this.props.index === '01' ? 'Primary Color' : 'Secondary Color'}</p>
                    <p style={desc}>{this.props.index === '01' ? primaryText : secondaryText}</p>
                  </div>
                }
              }
              }
            </MediaQuery>
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

