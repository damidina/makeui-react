import { auth } from '../firebase/firebase';
import { setTier } from './checkout';

const startSignOut = () => dispatch => {
    dispatch(signOut());
    dispatch(setTier(''));
};


const signOut = () => {
    auth.signOut();
    return { type: 'SIGN_OUT' };
};

const signInSuccess = (userInfo) => {
    return {
        type: 'SIGN_IN_SUCCESS',
        userInfo
    }
};

export {
    startSignOut,
    signInSuccess,
}