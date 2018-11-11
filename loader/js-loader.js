const utils = require('loader-utils');
// import { validateOptions } from 'schema-utils';

module.exports = function(source) {
  const options = utils.getOptions(this);
  return source;
}