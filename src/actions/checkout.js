const UPDATE_CHECKED_TIER = 'UPDATE_CHECKED_TIER';
const SET_TIER = 'SET_TIER';
const SET_COUNT = 'SET_COUNT';

const updateCheckedTier = (checked) => ({
  type: UPDATE_CHECKED_TIER,
  checked
});

const setTier = (tier) => ({
  type: SET_TIER,
  tier
});

const setCount = (count) => ({
  type: SET_COUNT,
  count
});

const setCheckoutProps = (tier, count) => (dispatch) => {
  if (!!tier) dispatch(setTier(tier));
  if (!!count) dispatch(setCount(count));
}

export {
  UPDATE_CHECKED_TIER,
  SET_COUNT,
  SET_TIER,

  updateCheckedTier,
  setCount,
  setTier,
  setCheckoutProps,
}