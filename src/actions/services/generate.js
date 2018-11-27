import { getIdToken } from '../../helpers/auth';

const requestGenerate = (customOptions, tier = '', count = 1) => getIdToken()
  .then((authIdToken) => {
    // if (tier === 'once' && count >= 1) return Promise.reject(new Error('Max generation limit reached!'));

    console.log(customOptions);

    const optionsWithTheme = {
      ...customOptions,
      theme: customOptions.theme === '1' ? 'base' : `theme${customOptions.theme}`
    };

    const payload = {
      optionsWithTheme,
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

    return fetch(`${process.env.BACKEND_URL}/generate`, options)
      .then(res => res.json())
      .then(data => {
        return data.Location;
      });
  })
  .catch(console.error);

export {
  requestGenerate,
}