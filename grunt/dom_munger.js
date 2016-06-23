/*jslint node: true */

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  read: {
    options: {
      read: [
        {selector: 'script[data-concat!="false"]', attribute: 'src', writeto: 'appjs'},
        {selector: 'link[rel="stylesheet"][data-concat!="false"]', attribute: 'href', writeto: 'appcss'}
      ]
    },
    src: 'index.html'
  },
  update: {
    options: {
      remove: ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
      append: [
        {selector: 'head', html: '<script src="app.full.min.js"></script>'},
        {selector: 'head', html: '<link rel="stylesheet" href="app.full.min.css">'}
      ]
    },
    src: 'index.html',
    dest: buildFolder + 'index.html'
  }
};
