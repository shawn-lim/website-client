/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  main: {
    files: [
      {src: ['img/**'], dest: buildFolder},
      {src: ['bower_components/font-awesome/fonts/**'], dest: buildFolder+'/fonts/', filter: 'isFile', expand: true, flatten: true},
      {src: ['bower_components/bootstrap/fonts/**'], dest: buildFolder+'/fonts/', filter: 'isFile', expand: true, flatten: true},
      {src: ['fonts/**'], dest: buildFolder, filter: 'isFile', expand:true},
      {src: ['grunt/server/**'], dest: buildFolder, filter: 'isFile', expand:true, flatten: true}
    ]
  }
};
