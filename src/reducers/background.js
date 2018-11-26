export default (state = '#C3C6EE', action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR':
      return action.color;
    default:
      return state;
  }
};