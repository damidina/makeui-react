import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThemeItem from './ThemeItem';
import { setTheme } from '../../../actions/generate';

class Themes extends Component {

  onThemeSelect = (e) => {
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
          description="Best if you are building an app or web platform, this theme offers everything you need for interactive user experiences."
          author="Dami Dina"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={2}
          title="Data Visualization Theme"
          components="150 Components"
          layouts="20 Layouts"
          description="Best if you are building an app or web platform, this theme offers everything you need for interactive user experiences."
          author="Dami Dina"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={3}
          title="Bootstrap Theme"
          components="150 Components"
          layouts="20 Layouts"
          description="Best if you are building an app or web platform, this theme offers everything you need for interactive user experiences."
          author="Dami Dina"
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