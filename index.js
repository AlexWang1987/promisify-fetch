var Promise = require('bluebird');
var fetch = require('fetch');

var fetchUrl = fetch.fetchUrl;
// var fetchStream = fetch.FetchStream;

var pfetch = module.exports = {};

/**
 * fetch url content from remote
 * @param  {string} url     url
 * @param  {object} options Please refer to https://www.npmjs.com/package/fetch
 * @return {promise}         promise
 */
pfetch.fetchURL = function (url,options){
  //default settings
  var options = options || {};

  //timeout - 3s
  options['timeout'] = options['timeout'] || 3000;

  return new Promise(function(resolve,reject) {
    fetchUrl(url,options,function (error,meta,body){
      if(error) return reject(error)
      resolve(body.toString());
    })
  })
}

// pfetch.downLoad = function (url,dest){
//   return new Promise(function(resolve,reject) {
//     fetchStream
//   })
// }
