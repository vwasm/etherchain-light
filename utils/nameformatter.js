const util = require('ethereumjs-util');

function nameFormatter(config) {
  this.conf = config;
  
  this.format = function(address) {
    if (address) {
      const checksumAddress = util.toChecksumAddress(address);
      if (this.conf.names[checksumAddress]) {
        return this.conf.names[checksumAddress];
      } else {
        return checksumAddress;
      }
    } else {
      return address;
    }
  }
}
module.exports = nameFormatter;
