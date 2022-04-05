function request(
  url = '',
  options = {},
) {
  let REACT_APP_API_DOMAIN;
  if (process.env.ENV === 'RELEASE') {
    REACT_APP_API_DOMAIN = 'https://za-order-system.herokuapp.com/';
  } else {
    REACT_APP_API_DOMAIN = 'http://localhost:8080/';
  }
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };
  return new Promise((resolve, reject) => {
    fetch(REACT_APP_API_DOMAIN + url, {
      method: 'GET',
      ...options,
      headers,
    })
      .then(resolve)
      .catch((err) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          ...err.res,
          message: err.message,
        });
      });
  });
}

export default request;
