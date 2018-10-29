import { auth } from '../firebase/firebase';

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
    signOut,
    signInSuccess,
}