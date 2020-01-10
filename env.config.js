let obj = {
  REVERSE_PROXY_URL: `http://localhost`,
  REVERSE_PROXY_PORT: `80`,
  SERVICE_CHART_URL: `http://localhost`,
  SERVICE_CHART_PORT: `4444`,
  SERVICE_PEOPLE_ALSO_BOUGHT_URL: `http://localhost`,
  SERVICE_PEOPLE_ALSO_BOUGHT_PORT: `4550`,
  SERVICE_ABOUT_URL: `http://localhost`,
  SERVICE_ABOUT_PORT: `3333`
};

if (process.env.NODE_ENV === 'production') {
  obj = Object.assign({}, obj, {
    REVERSE_PROXY_URL: process.env.REVERSE_PROXY_URL,
    SERVICE_CHART_URL: process.env.SERVICE_CHART_URL,
    SERVICE_PEOPLE_ALSO_BOUGHT_URL: process.env.SERVICE_PEOPLE_ALSO_BOUGHT_URL,
    SERVICE_ABOUT_URL: process.env.SERVICE_ABOUT_URL,
  });
}

module.exports = obj;