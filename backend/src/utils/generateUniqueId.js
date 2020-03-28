const cryto = require('crypto');

module.exports = function generateUniqueId(){
  return cryto.randomBytes(4).toString('HEX');
}