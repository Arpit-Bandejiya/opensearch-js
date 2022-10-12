'use strict';

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path'];
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' };

function createPitApi(params, options, callback) {
  console.log("YEs we are hitting the API!!!!!!!!");
  console.log(params, options, callback);
  
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, keepAlive, ...querystring } = params;

  let path = '';

  if (method == null) method = 'POST';
  path = '/' + encodeURIComponent(index) + '/' + '_search' + '/' + 'point_in_time';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = createPitApi;
