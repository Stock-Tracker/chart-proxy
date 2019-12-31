let obj = {
  REVERSE_PROXY_PORT: `80`,
  REVERSE_PROXY_URL: `http://localhost`,
  SERVICE_CHART_PORT: `4444`,
  SERVICE_CHART_URL: `http://localhost`,
  SERVICE_PEOPLE_ALSO_BOUGHT_PORT: `4550`,
  SERVICE_PEOPLE_ALSO_BOUGHT_URL: `http://localhost`
};

if (process.env.NODE_ENV === 'production') {
  obj = Object.assign({}, obj, {
    // the client will the get deployed urls from the browser, as it's running
    REVERSE_PROXY_URL: null,
    SERVICE_CHART_URL: null,
    SERVICE_PEOPLE_ALSO_BOUGHT_URL: null
  });
}

module.exports = obj;