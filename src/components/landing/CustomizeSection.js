import React, { Component } from 'react';
import CustomizeHeader from './customize/CustomizeHeader'

export default class CustomizeSection extends Component {

  componentDidUpdate() {
    if (this.props.shouldScroll) {
      const pos = this.customize.offsetTop;
      this.customize.scrollIntoView({ behavior: "smooth", alignToTop: true });
    }
  }

  render() {
    return (
      <div style={container}>
        <CustomizeHeader />
        <button style={buttonStyle}>Test It Out!</button>
      </div>
    );
  }
};

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh'
}

const buttonStyle = {
  padding: '16px',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: 'black',
  fontSize: '20px',
  marginBottom: '25px',
  border: 'none'
};