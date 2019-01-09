import React, { Component } from 'react';
import { relative } from 'path';

class CustomSelect extends Component {

  state = {
    currentOption: this.props.titles[0] ? this.props.titles[0] : 'No titles',
    showOptions: false,
    carretOffset: 0,
    height: 62
  }

  handleResize = () => {
    const width = window.innerWidth
    if (width <= 520) {
      this.setState(({ height: 48 }));
    } else {
      this.setState(({ height: 62 }));
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
    if (e.target.id === "div") {
      e.target.style.background = 'black';
      e.target.style.color = 'white';
    }
  };

  onMouseLeave = (e) => {
    if (e.target.id === "div") {
      e.target.style.background = 'white'
      e.target.style.color = 'black';
    }

  };

  render() {
    return (
      <div
        className="select-body"
        onClick={this.toggleShowOptions}
      >
        <div className="addative-select-containers" style={this.state.showOptions ? { ...itemContainer, ...flex, ...borderControl } : { ...itemContainerLast, ...flex, ...borderControl }}>
          <p style={itemText} className="select-title">{this.state.currentOption}</p>
          <div ref={r => this.carret = r} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px' }}>
            <img src="images/carret-down.svg" />
          </div>
        </div>
        {
          this.state.showOptions && this.props.titles.map((title, index) => {
            if (index !== 0 && index !== this.props.titles.length - 1) {
              return <div
                id="div"
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                onClick={() => this.handleOptionSelect(index)}
                style={{ ...itemContainer, position: 'absolute', left: '0px', right: '0px', top: `${index * this.state.height}px` }}
                className="addative-select-containers"
                key={title}><p style={itemText} className="select-title">{title}</p></div>
            } else if (index === this.props.titles.length - 1) {
              return <div
                id="div"
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                onClick={() => this.handleOptionSelect(index)}
                style={{ ...itemContainerLast, position: 'absolute', left: '0px', right: '0px', top: `${index * this.state.height}px` }}
                className="addative-select-containers"
                key={title}><p style={itemText} className="select-title">{title}</p></div>
            }
          })
        }
      </div>
    );
  }
}

const borderControl = {
  borderTop: 'solid 3px black',
}

const selectStyle = {
  position: 'relative',
  minHeight: '62px',
  minWidth: '300px',
  width: 'calc(100% - 224px)',
  cursor: 'pointer',
  alignSelf: 'flex-start',
  margin: '1.2rem 1.2rem 1.2rem 0'
};

const itemContainer = {
  width: '100%',
  height: '62px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  display: 'flex',
  borderBottom: 'solid 3px black',
  borderLeft: 'solid 3px black',
  borderRight: 'solid 3px black',
  background: 'white',
};

const itemContainerLast = {
  width: '100%',
  background: 'white',
  height: '62px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderLeft: 'solid 3px black',
  borderRight: 'solid 3px black',
  borderBottom: 'solid 3px black',
  display: 'flex',
};

const flex = {
  justifyContent: 'space-between',
  flexDirection: 'row'
}

const itemText = {
  margin: 'auto 0 auto 0',
  padding: '0 0 0 20px',
  fontSize: '24px'
}

export default CustomSelect;