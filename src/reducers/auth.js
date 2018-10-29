export default (state = { userInfo: {}, isAuthenticated: false }, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        userInfo: action.userInfo,
        isAuthenticated: true,
      };
    case 'SIGN_IN_FAILED':
      return {
        ...state,
        isAuthenticated: false,
      }
    case 'SIGN_OUT':
      return {
        ...state,
        userInfo: {},
        isAuthenticated: false,
      }
    default:
      return state;
  }
};

