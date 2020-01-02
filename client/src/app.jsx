import React from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils/utils.js';
import urls from '../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: window.location.href,
      ticker: 'ABCD',
      chartUrl: null,
    };
  }

  componentDidMount() {

    // create a script tag with the appropriate URL, and add it to the DOM
    let script = document.createElement('script');
    script.src = "http://localhost:4444/bundle.js";
    document.querySelector('body').appendChild(script);


    // TODO: how to go about reading the ticker from the url and sending it to the microservice?
    // const ticker = utils.determineTicker(this.state.url);
    this.setState({ chartUrl: `${urls.local}` });

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
      <div className="react-root">
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
                <div id="people-also-bought"></div>
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