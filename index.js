module.exports = class wispjs {
    constructor(config) {
      this.config = config;
    }
}

exports.printMsg = function() {
    console.log(this.config.apiKey)
}