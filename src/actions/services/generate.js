import { getIdToken } from '../../helpers/auth';

const requestGenerate = (customOptions, tier = '', count = 1) => getIdToken()
  .then((authIdToken) => {
    // if (tier === 'once' && count >= 1) return Promise.reject(new Error('Max generation limit reached!'));

    const payload = {
      ...customOptions,
      authIdToken,
      count,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    return fetch(`http://localhost:4000/generate`, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data.Location;
      });
  })
  .catch(console.error);

export {
  requestGenerate,
}