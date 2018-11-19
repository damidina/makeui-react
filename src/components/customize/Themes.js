import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThemeItem from './ThemeItem';
import { setTheme } from '../../actions/generate';
import MediaQuery from 'react-responsive';


class Themes extends Component {

  onThemeSelect = (e) => {
    console.log(e.target.value);
    this.props.setTheme(parseInt(e.target.value));
  };

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <MediaQuery maxWidth={809}>
          <div style={contentColumn}>
            <ThemeItem
              mobile={true}
              value={1}
              title="Starter Web App Theme"
              components="150 Components"
              layouts="20 Layouts"
              currentTheme={this.props.theme}
              onThemeSelect={this.onThemeSelect}
            />
            <ThemeItem
              mobile={true}
              value={2}
              title="Data Theme"
              components="150 Components"
              layouts="20 Layouts"
              currentTheme={this.props.theme}
              onThemeSelect={this.onThemeSelect}
            />
            <ThemeItem
              mobile={true}
              value={3}
              title="Bootstrap Theme"
              components="150 Components"
              layouts="20 Layouts"
              currentTheme={this.props.theme}
              onThemeSelect={this.onThemeSelect}
            />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={810}>
          <div style={contentRow}>
            <ThemeItem
              mobile={false}
              value={1}
              title="Starter Web App Theme"
              components="150 Components"
              layouts="20 Layouts"
              currentTheme={this.props.theme}
              onThemeSelect={this.onThemeSelect}
            />
            <ThemeItem
              mobile={false}
              value={2}
              title="Data Theme"
              components="150 Components"
              layouts="20 Layouts"
              currentTheme={this.props.theme}
              onThemeSelect={this.onThemeSelect}
            />
            <ThemeItem
              mobile={false}
              value={3}
              title="Bootstrap Theme"
              components="150 Components"
              layouts="20 Layouts"
              currentTheme={this.props.theme}
              onThemeSelect={this.onThemeSelect}
            />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

const contentRow = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '772px'
};

const contentColumn = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  marginTop: '60px',
  marginBottom: '10px',
};

const mapStateToProps = (state) => ({
  theme: state.config.theme
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(setTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Themes);