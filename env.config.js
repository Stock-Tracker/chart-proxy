let obj = {
  REVERSE_PROXY_URL: `http://localhost`,
  REVERSE_PROXY_PORT: `80`,
  SERVICE_CHART_URL: `http://localhost`,
  SERVICE_CHART_PORT: `4444`,
  SERVICE_PEOPLE_ALSO_BOUGHT_URL: `http://localhost`,
  SERVICE_PEOPLE_ALSO_BOUGHT_PORT: `4550`
};

if (process.env.NODE_ENV === 'production') {
  obj = Object.assign({}, obj, {
    // the client will the get deployed urls from the browser, as it's running
    REVERSE_PROXY_URL: process.env.REVERSE_PROXY_URL,
    SERVICE_CHART_URL: process.env.SERVICE_CHART_URL,
    SERVICE_PEOPLE_ALSO_BOUGHT_URL: process.env.SERVICE_PEOPLE_ALSO_BOUGHT_URL,
  });
}

module.exports = obj;