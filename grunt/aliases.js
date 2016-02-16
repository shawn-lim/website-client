/*jslint node: true */

module.exports = {
  'build': [
		'jshint',
		'wiredep:production',
		'clean:before',
		'sass',
		'dom_munger',
		'ngtemplates',
		'cssmin',
		'concat',
		'ngAnnotate',
		'uglify',
		'copy',
    'htmlmin',
    'clean:after'
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
