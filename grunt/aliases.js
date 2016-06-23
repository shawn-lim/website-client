/*jslint node: true */

module.exports = {
  'pre_build' : [
    'jshint',
    'wiredep:production',
    'clean:before',
    'sass',
    'dom_munger',
    'ngtemplates',
    'cssmin',
    'concat',
    'ngAnnotate',
    'uglify'
  ],
  'post_build':[
    'copy',
    'htmlmin',
    'clean:after',
    'wiredep:task'
  ],
  'build_silent': [
    'pre_build',
    'post_build'
  ],
  'build': [
    'pre_build',
    'bump',
    'post_build'
  ],
  'build_minor': [
    'pre_build',
    'bump:minor',
    'post_build'
  ],
  'build_major': [
    'pre_build',
    'bump:major',
    'post_build'
  ],
  'serve': [
    'wiredep:task',
    'dom_munger:read',
    'jshint',
    'connect',
    'watch'
  ],
  'test': [
    'dom_munger:read',
    'karma:all_tests'
  ]
};
