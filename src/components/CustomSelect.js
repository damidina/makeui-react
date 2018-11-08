import React, { Component } from 'react';

class CustomSelect extends Component {

  state = {
    currentOption: this.props.titles[0] ? this.props.titles[0] : 'No titles',
    showOptions: false,
    carretOffset: 0
  }

  handleOptionSelect = (index) => {
    this.setState(({ currentOption: this.props.titles[index] }));
    this.props.handleOptionSelect(index);
  };

  toggleShowOptions = () => {
    this.carret.style.transform = `rotate(${this.state.carretOffset + 180}deg)`;
    this.setState(({
      showOptions: !this.state.showOptions,
      carretOffset: this.state.carretOffset + 180
    }));
  }

  onMouseOver = (e) => {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
  };

  onMouseLeave = (e) => {
    e.target.style.background = 'white'
    e.target.style.color = 'black';
  };

  render() {
    return (
      <div
        style={{ ...selectStyle, ...this.props.selectStyle }}
        onClick={this.toggleShowOptions}
      >
        <div style={this.state.showOptions ? { ...itemContainer, ...flex } : { ...itemContainerLast, ...flex }}>
          <p style={itemText} >{this.state.currentOption}</p>
          <div ref={r => this.carret = r} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px' }}>
            <img src="images/carret-down.svg" />
          </div>
        </div>
        {
          this.state.showOptions && this.props.titles.map((title, index) => {
            if (index !== 0 && index !== this.props.titles.length - 1) {
              return <div
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                onClick={() => this.handleOptionSelect(index)}
                style={itemContainer}
                key={title}><p style={itemText}>{title}</p></div>
            } else if (index === this.props.titles.length - 1) {
              return <div
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                onClick={() => this.handleOptionSelect(index)}
                style={itemContainerLast}
                key={title}><p style={itemText}>{title}</p></div>
            }
          })
        }
      </div>
    );
  }
}

const selectStyle = {
  border: 'solid 3px black',
  minHeight: '62px',
  minWidth: '300px',
  width: 'calc(100% - 224px)',
  cursor: 'pointer',
  alignSelf: 'flex-start',
  margin: '1.2rem 1.2rem 1.2rem 0'
};

const itemContainer = {
  height: '62px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  display: 'flex',
  borderBottom: 'solid 3px black'
};

const itemContainerLast = {
  height: '62px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  display: 'flex',
};

const flex = {
  justifyContent: 'space-between',
  flexDirection: 'row'
}

const itemText = {
  margin: 'auto 0 auto 0',
  padding: '0 0 0 8px',
  fontSize: '24px'
}

export default CustomSelect;