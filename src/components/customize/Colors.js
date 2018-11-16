import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorItem from './ColorItem';
import { setColor } from '../../actions/generate';
import MediaQuery from 'react-responsive';

class Colors extends Component {
  render() {
    return (
      <div style={{ padding: '16px' }}>
        <div style={content}>
          {this.props.keys.map((key) => (
            <ColorItem
              key={key}
              index={key}
              onChange={(key, value) => this.props.setColor(key, value)}
              color={this.props.config.colors[key]} />
          ))}
        </div>
      </div>
    )
  }
}

const content = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: '625px'
};

const mapStateToProps = (state) => ({
  config: state.config,
  keys: Object.keys(state.config.colors)
});

const mapDispatchToProps = (dispatch) => ({
  setColor: (index, value) => dispatch(setColor({ colorIndex: index, colorValue: value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Colors);