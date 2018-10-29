import database from '../firebase/firebase';

const getUserData = (uid, f) => {
  const userRef = database.ref(`users/${uid}`);
  userRef.on('value', (ss) => {
    const value = ss.val();
    f(value);
  });
};

export { getUserData }
