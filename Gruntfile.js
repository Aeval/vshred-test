module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		purifycss: {
			options: {},
			target: {
				src: ['index.html', 'src/js/*.js'],
				css: ['src/css/*.css'],
				dest: 'tmp/purestyles.css',
			},
		},
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-purifycss');

	// Default task(s).
	grunt.registerTask('default', ['purifycss']);
};
