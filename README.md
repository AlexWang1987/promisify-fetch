# promisify-fetch
The library is a wrapper for 'fetch' in promising way. It it commonly used for downloading files or get http content from the remote.

# Inspired by fetch [fetch](https://www.npmjs.com/package/fetch)

# Usage
```
var fetch = require('promisify-fetch');

fetch
  .fetchURL('http://google.com')
  .then(function(body) {
    console.log(body);
  })
  .catch(function(e) {
    console.log(e);
  })
```

# API
This is a primising wrapper for 'fetch' package. more specific options, please refer to [fetch](https://www.npmjs.com/package/fetch)

```
/**
 * fetch url content from remote
 * @param  {string} url      url
 * @param  {object} options  Please refer to https://www.npmjs.com/package/fetch
 * @return {promise}         promise
 */

fetchURL(url[,options])
```
