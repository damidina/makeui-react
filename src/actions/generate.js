const SET_COLOR = 'SET_COLOR';
const ADD_COLOR = 'ADD_COLOR';
const REMOVE_COLOR = 'REMOVE_COLOR'
const SET_CORNER_RADIUS = 'SET_CORNER_RADIUS';

export { SET_COLOR, REMOVE_COLOR, SET_CORNER_RADIUS };

const setColor = ({ colorIndex = '', colorValue = '' }) => ({
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

export { setColor, addColor, removeColor, setCornerRadius };