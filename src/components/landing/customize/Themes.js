import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThemeItem from './ThemeItem';
import { setTheme } from '../../../actions/generate';

class Themes extends Component {
  onThemeSelect = (value) => {
    this.props.setTheme(parseInt(value));
  };

  render() {
    return (
      <div className="theme-section">
        <ThemeItem
          value={1}
          title="E-Commerce Theme"
          description="Choose this theme if you’re designing or prototyping an online shopping experience like an e-shop or a large marketplace platform."
          author="Rob Simpson"
          authorLink="https://www.robsimpson.me/"
          previewLink="https://upbeat-einstein-84e77d.netlify.com/"
          icon="/images/ecom-theme.png"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={2}
          title="Finance Mobile App Theme"
          description="This is the perfect theme if you're designing a financial mobile app. It can also be used for other apps with user profiles and payments."
          author="Dami Dina"
          authorLink="http://damidina.com"
          previewLink="https://upbeat-einstein-84e77d.netlify.com/starter.html"
          icon="/images/landing-theme.png"
          currentTheme={this.props.theme}
          onThemeSelect={this.onThemeSelect}
        />
        <ThemeItem
          value={3}
          title="Landing Page Set"
          description="Get this theme if you’re designing a landing page and want to test for performance. The variation of layouts will give you all the options."
          author="Dami Dina"
          authorLink="http://damidina.com"
          previewLink="https://upbeat-einstein-84e77d.netlify.com/landing.html"
          icon="/images/landing-theme.png"
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
