import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import checkoutReducer from '../reducers/checkout';
import generateReducer from '../reducers/generate';
import { setCheckoutProps } from '../actions/checkout';
import { getUserData } from '../helpers/database';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const authPropsMiddleware = store => next => action => {
    if (action.type === 'SIGN_IN_SUCCESS') {
        const { uid } = action.userInfo;
        getUserData(uid, ({ count, tier }) => store.dispatch(setCheckoutProps(tier, count)));
    }
    next(action);
}

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            config: generateReducer,
            checkout: checkoutReducer
        }),
        composeEnhancers(applyMiddleware(thunk, authPropsMiddleware))
    );
    return store;
};

