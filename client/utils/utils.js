module.exports = {
  /**
   *
   * Parses the urls and returns the ticker of the particular stock we're interested in
   * @param {String} The url of the page that is currently loaded
   * @returns {String} The ticker of the stock in question
   */
  // TODO: add tests
  determineTicker(url) {
    return url.slice(url.indexOf('stocks') + 7);
  }
};
