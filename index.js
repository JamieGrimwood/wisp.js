module.exports = class wispjs {
  constructor(config) {
    this.config = config;
  }
}

module.exports.printMsg = function() {
  console.log(this.config.apiKey)
}