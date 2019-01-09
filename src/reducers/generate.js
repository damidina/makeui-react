import { combineReducers } from 'redux';

import customDefault from '../selectors/defaults.json';
import { SET_COLOR, ADD_COLOR, REMOVE_COLOR, SET_CORNER_RADIUS } from '../actions/generate';

const colors = (state = customDefault.colors, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        [action.colorIndex]: action.colorValue,
      };
    // case ADD_COLOR:
    //   if (state.length < 6) {
    //     return [...state, {
    //       "index": action.colorIndex,
    //       "hex": action.colorValue
    //     }];
    //   } else { return state }
    // case REMOVE_COLOR:
    //   return state.filter(({ index }) => {
    //     index !== action.colorIndex
    //   });
    default:
      return state;
  }
};

const cornerRadius = (state = customDefault.cornerRadius, action) => {
  switch (action.type) {
    case SET_CORNER_RADIUS:
      return action.cornerRadius;
    default:
      return state;
  }
};

const theme = (state = 1, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.theme;
    default:
      return state;
  }
};

export default combineReducers({ colors, cornerRadius, theme });