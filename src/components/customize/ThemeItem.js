import React from 'react';

const ThemeItem = (props) => {
  return (
    <div style={props.mobile ? themeContainerMobile : themeContainer}>
      <div style={themePreview}></div>
      <div style={themeInfo}>
        <h3 style={{ ...marginNone, marginBottom: '16px' }}>{props.title}</h3>
        <div style={row}>
          <div style={circle}></div><p style={marginNone}>{props.components}</p>
        </div>
        <div style={row}>
          <div style={circle}></div><p style={marginNone}>{props.layouts}</p>
        </div>
      </div>
      <button
        value={props.value}
        onClick={props.onThemeSelect}
        style={props.currentTheme === props.value ? themeSelected : themeSelect}
      >
        {props.currentTheme === props.value ? 'Selected' : 'Select Theme'}
      </button>
    </div>
  )
}


const row = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '4px'
};

const circle = {
  width: '14px',
  height: '14px',
  borderRadius: '7px',
  border: '3px solid black',
  marginRight: '8px'
};

const themeContainer = {
  position: 'relative',
  border: '3px solid black',
  display: 'flex',
  flexDirection: 'column',
  width: '250px',
  height: '250px',
  marginBottom: '25px'
};

const themeContainerMobile = {
  position: 'relative',
  border: '3px solid black',
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100vw - 32px)',
  height: '250px',
  marginBottom: '25px'
};

const themePreview = {
  height: '100px',
  width: '100%',
  backgroundColor: 'grey',
};

const themeInfo = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '8px'
};

const themeSelect = {
  outline: 'none',
  height: '40px',
  position: 'absolute',
  border: '3px solid black',
  color: 'white',
  backgroundColor: 'black',
  width: 'calc(100% - 16px)',
  bottom: '8px',
  left: '8px',
  fontWeight: 'bold'
};

const themeSelected = {
  outline: 'none',
  height: '40px',
  position: 'absolute',
  border: '3px solid #FFD792',
  color: 'white',
  backgroundColor: 'black',
  width: 'calc(100% - 16px)',
  bottom: '8px',
  left: '8px',
  fontWeight: 'bold'
};

const marginNone = {
  margin: '0px',
}


export default ThemeItem;