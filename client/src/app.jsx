import React from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils/utils.js';
import config from '../../env.config'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: window.location.href,
      ticker: 'ABCD',
      chartUrl: null,
      theme: 'theme-closed-up' // TODO: change this CSS theme depending on the time of the day ...
    };
  }

  // TODO: DRYer way to handle this ...
  componentDidMount() {
    console.log('config: ', config);

    let reverseProxyUrlThroughPort;
    if (config.REVERSE_PROXY_URL === null) {
      reverseProxyUrlThroughPort = window.location.origin;
    } else {
      reverseProxyUrlThroughPort = `${config.REVERSE_PROXY_URL}:${config.REVERSE_PROXY_PORT}`;
    }

    // For each relevant microservice, create a script tag with the appropriate URL, and add it to the DOM
    // Service Chart
    let serviceChartUrl;
    if (config.SERVICE_CHART_URL === null) {
      serviceChartUrl = `${window.location.protocol}//${window.location.hostname}`;
    } else {
      serviceChartUrl = `${config.SERVICE_CHART_URL}`;
    }

    let script = document.createElement('script');
    script.src = `${serviceChartUrl}:${config.SERVICE_CHART_PORT}/bundle.js`;
    document.querySelector('body').appendChild(script);

    let link = document.createElement('link')
    link.href = `${serviceChartUrl}:${config.SERVICE_CHART_PORT}/app.css`;
    link.rel = 'stylesheet';
    document.querySelector('body').appendChild(link);

    // Service People Also Bought
    let servicePeopleAlsoBoughtUrl;
    if (config.SERVICE_PEOPLE_ALSO_BOUGHT_URL === null) {
      servicePeopleAlsoBoughtUrl = `${window.location.protocol}//${window.location.hostname}`;
    } else {
      servicePeopleAlsoBoughtUrl = `${config.SERVICE_PEOPLE_ALSO_BOUGHT_URL}`;
    }

    let script2 = document.createElement('script');
    script2.src = `${servicePeopleAlsoBoughtUrl}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/bundle.js`;
    document.querySelector('body').appendChild(script2);

    let link2 = document.createElement('link')
    link2.href = `${servicePeopleAlsoBoughtUrl}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/app.css`;
    link2.rel = 'stylesheet';
    document.querySelector('body').appendChild(link2);

    // TODO: how to go about reading the ticker from the url and sending it to the microservice?
    // const ticker = utils.determineTicker(this.state.url);
    // this.setState({ chartUrl: `${urls.local}` });

    // fetch(`${urls.local}`)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className={`react-root ${this.state.theme}`}>
        <div className="main-container">
          <header>
            <div id="logo">
              logo goes here
            </div>
            <div id="search">
              <input type="text"></input>
            </div>
            <nav>
              <ul className="nav-list">
                <li className="nav-list-item">Free Stock</li>
                <li className="nav-list-item">Portfolio</li>
                <li className="nav-list-item">Cash</li>
                <li className="nav-list-item">Messages</li>
                <li className="nav-list-item">Account</li>
              </ul>
            </nav>
          </header>
          <main>
            <div className="row">
              <div>
                <div id="tags">
                  <ul className="tag-list">
                    <li className="tag-list-item">Computer Hardware</li>
                    <li className="tag-list-item">100 Most Popular</li>
                    <li className="tag-list-item">Computer Software</li>
                  </ul>
                </div>
                <div id="chart">
                </div>
                <div id="about"></div>
                <div id="collections"></div>
                <div id="news"></div>
                <div id="analyst-ratings"></div>
                <div id="earnings"></div>
                <div id="pab"></div>
              </div>
              <aside></aside>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));