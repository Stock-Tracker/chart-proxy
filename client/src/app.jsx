import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
                <div id="chart"></div>
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