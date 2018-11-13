import { store } from '../../app';
import { signInNewUser } from '../../helpers/auth';
import { requestGenerate } from './generate';
import { downloadFile } from '../../helpers/download';

const startPurchase = (token, callback) => (dispatch) => {

  const { config, checkout, auth } = store.getState();
  const { checked, tier, count } = checkout;
  const { isAuthenticated } = auth;

  let doCharge = true;

  if (!isAuthenticated) doCharge = true;
  if (isAuthenticated && tier === 'once' && count < 1) doCharge = true;
  if (isAuthenticated && tier === 'once' && count == 0) doCharge = false;
  if (isAuthenticated && tier === 'unlimited') doCharge = false;

  let uid = auth.userInfo.uid ? auth.userInfo.uid : false;

  let body = {
    token: token.id,
    email: token.email,
    checked,
    uid,
  };

  charge(body)
    .then(res => res.json())
    .then((res) => {
      if (res.authToken) {
        return signInNewUser(res.authToken);
      } else {
        throw new Error(`Something's wrong -- please try again`);
      }
    })
    .then(() => {
      return requestGenerate(config, tier, count);
    })
    .then((link) => {
      downloadFile(link, 'makeui.sketch');
      callback();
    })
    .catch((err) => {
      console.error(err);
    })
};


const charge = (body) => {
  return fetch(`${process.env.BACKEND_URL}/checkout/charge`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
};


const downloadForUnlimited = (callback) => (dispatch) => {
  const { config, checkout } = store.getState();
  const { tier, count } = checkout;

  requestGenerate(config, tier, count)
    .then((link) => {
      downloadFile(link, 'makeui.sketch');
      callback();
    })
    .catch((err) => {
      console.error(err);
    })
}

export { startPurchase, downloadForUnlimited };