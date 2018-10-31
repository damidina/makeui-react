import { auth } from '../firebase/firebase';
import { startSignOut, signInSuccess } from '../actions/auth';

export default () => dispatch => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(signInSuccess(user));
    } else {
      dispatch(startSignOut());
    }
  });

  if (auth.isSignInWithEmailLink(window.location.href)) {
    const email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      // handle that case here
    }

    auth.signInWithEmailLink(email, window.location.href)
      .then(() => {
        window.localStorage.removeItem('emailForSignIn');
        window.history.replaceState(null, null, window.location.pathname);
      })
      .catch(console.error);
  };
};