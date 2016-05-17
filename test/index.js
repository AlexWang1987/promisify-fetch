var fetch = require('../index.js');

fetch
  .fetchURL('http://google.com')
  .then(function(d) {
    console.log(d);
  })
  .catch(function(e) {
    console.log(e);
  })
