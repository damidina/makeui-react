import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThemeItem from './ThemeItem';
import { setTheme } from '../../../actions/generate';

class Themes extends Component {

  onThemeSelect = (e) => {
    console.log(e.target.value);
    this.props.setTheme(parseInt(e.target.value));
  };

  render() {
    return (
      <div className="theme-section">
        <ThemeItem
          value={1}
          title="Starter Web App Theme"
          components="150 Components"
          layouts="20 Layouts"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={2}
          title="Data Theme"
          components="150 Components"
          layouts="20 Layouts"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={3}
          title="Bootstrap Theme"
          components="150 Components"
          layouts="20 Layouts"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(setTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Themes);