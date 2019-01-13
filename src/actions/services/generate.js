import { getIdToken } from '../../helpers/auth';

const requestGenerate = (customOptions, tier = '', count = 1) => getIdToken()
  .then((authIdToken) => {
    // if (tier === 'once' && count >= 1) return Promise.reject(new Error('Max generation limit reached!'));

    const optionsWithTheme = {
      ...customOptions,
      theme: `theme${customOptions.theme}`
    };

    const payload = {
      ...optionsWithTheme,
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

    console.log(payload);

    return fetch(`${process.env.BACKEND_URL}/generate`, options)
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(data => {
        return data.Location;
      });
  })
  .catch(console.error);

export {
  requestGenerate,
}