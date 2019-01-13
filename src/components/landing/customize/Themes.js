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
          title="E-Commerce Theme"
          components="150 Components"
          layouts="20 Layouts"
          description="Choose this theme if you’re designing or prototyping an online shopping experience like an e-shop or a large marketplace platform."
          author="Rob Simpson"
          authorLink="https://www.robsimpson.me/"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={4}
          title="Finance Mobile App Theme"
          components="150 Components"
          layouts="20 Layouts"
          description="This is the theme for you if you are designing a financial mobile app, but it can also be used for other apps with user profiles and payments."
          author="Dami Dina"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={5}
          title="Landing Page Set"
          components="150 Components"
          layouts="20 Layouts"
          description="Get this theme if you’re designing a landing page and want to test for performance. The variation of layouts will give you all the options."
          author=""
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