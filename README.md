# promisify-fetch
The library is a wrapper for 'fetch' in promising way. It it commonly used for downloading files or get http content from the remote.

# Usage
```javascript
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

```javascript
/**
 * fetch url content from remote
 * @param  {string} url      url
 * @param  {object} options  Please refer to https://www.npmjs.com/package/fetch
 * @return {promise}         promise
 */

fetchURL(url[,options])
```
Inspired by [fetch](https://www.npmjs.com/package/fetch)

# Good Library Companions
# [promisify-cli](https://www.npmjs.com/package/promisify-cli)
# [promisify-bash](https://www.npmjs.com/package/promisify-bash)
# [promisify-fs](https://www.npmjs.com/package/promisify-fs)
# [promsifiy-git](https://www.npmjs.com/package/promisify-git)
# [promsifiy-npm](https://www.npmjs.com/package/promisify-npm)
