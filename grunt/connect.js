/*jslint node: true */

var gbUtils = require('../gb-utils-required.js');
var rewrite = require('connect-modrewrite');

module.exports = {
  main: {
    options: {
      hostname: "0.0.0.0",
      port: 3001,
			middleware: function(connect, options, middlewares) {
				// 1. mod-rewrite behavior
				var rules = [
					'!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.woff|\\.ttf\\.gif$ /index.html'
				];
				middlewares.unshift(rewrite(rules));
				return middlewares;
			}
    }
  }
};
