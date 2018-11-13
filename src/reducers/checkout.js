import {
  UPDATE_CHECKED_TIER,
  SET_TIER,
  SET_COUNT,
} from '../actions/checkout';

export default (state = { checked: 'none', tier: '', count: 1 }, action) => {
  switch (action.type) {
    case UPDATE_CHECKED_TIER:
      return {
        ...state,
        checked: action.checked,
      };

    case SET_TIER:
      return {
        ...state,
        tier: action.tier,
      }

    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      }

    default:
      return state;
  }
};
