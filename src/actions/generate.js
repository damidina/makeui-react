import { setBackgroundColor } from "./background";


const SET_COLOR = 'SET_COLOR';
const ADD_COLOR = 'ADD_COLOR';
const REMOVE_COLOR = 'REMOVE_COLOR'
const SET_CORNER_RADIUS = 'SET_CORNER_RADIUS';

export { SET_COLOR, REMOVE_COLOR, SET_CORNER_RADIUS };

const setColor = (colorVals) => (dispatch) => {
  dispatch(setColor2(colorVals));
  if (colorVals.colorIndex === "01") {
    dispatch(setBackgroundColor(colorVals.colorValue));
  }
}

const setColor2 = ({ colorIndex = '', colorValue = '' }) => ({
  type: SET_COLOR,
  colorIndex,
  colorValue
});

const addColor = ({ colorIndex = '', colorValue = '' }) => ({
  type: ADD_COLOR,
  colorIndex,
  colorValue
});

const removeColor = ({ colorIndex = '' }) => ({
  type: REMOVE_COLOR,
  colorIndex
});

const setCornerRadius = cornerRadius => ({
  type: SET_CORNER_RADIUS,
  cornerRadius
});

const setTheme = (theme) => ({
  type: 'SET_THEME',
  theme
});

export { setColor, addColor, removeColor, setCornerRadius, setTheme };