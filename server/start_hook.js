// start_hook.js
require('babel-register')({
  presets: ['es2015-node6', 'react'],
});
require('./server.js');
