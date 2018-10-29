import { auth } from '../firebase/firebase';

function sendSignIn(email, settings = {}) {
  const actionCodeSettings = Object.assign({}, {
    url: window.location.href,
    handleCodeInApp: true,
  }, settings);

  return auth.sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('emailForSignIn', email);
    })
    .catch(console.error);
};

function getIdToken() {
  return auth.currentUser.getIdToken()
    .catch(console.error);
}

function signInNewUser(token) {
  return auth.signInWithCustomToken(token)
    .catch((err) => {
      console.error(err);
    });
}

export {
  sendSignIn,
  getIdToken,
  signInNewUser,
}