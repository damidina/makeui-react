import React, { Component } from 'react';

class Controller extends Component {

  state = {
    currentView: 0,
    canMoveForward: true,
    canMoveBackward: false,
    error: ''
  };

  forward = () => {

    const canMoveBackward = this.state.currentView + 1 === 0 ? false : true;
    const canMoveForward = this.state.currentView + 1 === this.props.views.length - 1 ? false : true;
    this.setState(({

      currentView: this.state.currentView + 1,
      error: '',
      canMoveBackward: canMoveBackward,
      canMoveForward: canMoveForward,
    }));
  };

  backward = () => {

    const canMoveBackward = this.state.currentView - 1 === 0 ? false : true;
    const canMoveForward = this.state.currentView - 1 === this.props.views.length - 1 ? false : true;
    this.setState(({
      currentView: this.state.currentView - 1,
      error: '',
      canMoveBackward: canMoveBackward,
      canMoveForward: canMoveForward,
    }));
  };


  render() {
    let Curview = this.props.views[this.state.currentView]
    return (
      <div style={controller}>
        <div style={controlsTop}>
          <div style={left}>
            {this.state.canMoveBackward && <img src="/images/chevron-down.svg" onClick={this.backward} style={{ ...buttonStyle, transform: 'rotate(90deg)' }} />}
          </div>
          <h2 style={{ marginTop: '20px', zIndex: '-999', position: 'absolute', width: '100vw', textAlign: 'center' }}>{this.props.titles[this.state.currentView]}</h2>
          <div style={right}>
            {this.state.canMoveForward && <img src="/images/chevron-down.svg" onClick={this.forward} style={{ ...buttonStyle, transform: 'rotate(-90deg)' }} />}
          </div>
        </div>
        <div style={{ marginBottom: '50px' }}>
          {<Curview />}
        </div>
        <div style={controlsBottom}>
          <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {
              this.props.views.map((item, index) => {
                if (this.state.currentView >= index) {
                  return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px' }}>
                      <div style={activeCircle}>
                        <div style={circle}>
                          {index + 1}
                        </div>
                      </div>
                      <p style={{ color: 'white', margin: '0px', marginTop: '4px' }}>{this.props.titles[index]}</p>
                    </div>
                  )
                } else {
                  return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px' }}>
                      <div style={activeCircleBlack}>
                        <div style={circle}>
                          {index + 1}
                        </div>
                      </div>
                      <p style={{ color: 'white', margin: '0px', marginTop: '4px' }}>{this.props.titles[index]}</p>
                    </div>
                  )
                }

              })
            }
          </div>
        </div>
      </div>
    );
  }
}

const circle = {
  width: '24px',
  height: '24px',
  border: '3px solid white',
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white'
};

const activeCircle = {
  width: '32px',
  height: '32px',
  border: '3px solid #FFD792',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white'
};

const activeCircleBlack = {
  width: '32px',
  height: '32px',
  border: '3px solid black',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white'
};

const buttonStyle = {
  cursor: 'pointer',
  marginBottom: '25px',
  width: '20px',
  height: '20px',
  border: 'none',
};

const controller = {
  display: 'flex',
  width: '100vw',
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center'
};

const controlsTop = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  left: '0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  zIndex: '999'
};

const controlsBottom = {
  padding: '16px',
  position: 'fixed',
  bottom: '0px',
  right: '0px',
  left: '0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  zIndex: '999'
};

const left = {
  marginTop: '24px',
  marginLeft: '24px',
};

const right = {
  marginTop: '24px',
  marginRight: '24px',
};


export default Controller;