'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		watch: {
			ng: {
				files: ['public/js/ng/**/*.js', 'public/js/ng/*.js'],
				tasks: ['uglify:ng']
			}	
		},
		bower_concat: {
			all: {
				dest: 'public/js/bower.js',
				cssDest: 'public/css/bower.css',
				mainFiles: {
					'bootstrap': ['dist/css/bootstrap.css', 'dist/css/bootstrap-theme.css']	
				},
				exclude: [
					'mocha', 'morrisjs', 'raphael',
					'flot', 'flot.tooltip', 'datatables',
					'datatables-plugins', 'datatables-responsive',
					'holderjs'
				]
			}
		},
		cssmin: {
			target: {
				files: {
					'public/css/bower.css' : ['public/css/bower.css', 'public/css/style.css']
				}
			}
		},
		uglify: {
			bower: {
				options: {
					mangle: true,
					compress: true
				},
				files: {
					'public/js/bower.js': ['public/js/bower.js']
				}
			},
			ng: {
				options: {
					mangle: false,
					compress: false
				},
				files: { 
					'public/js/app.js': ['public/js/ng/app.js','public/js/ng/**/*.js']
				}
			}	
		},
		copy : {
			dist: {
				files: [
					{
						expand: true,
						cwd: 'bower_components/bootstrap/dist',
						src: ['fonts/*.*'],
						dest: 'public/'
					},
					{
						expand: true,
						cwd: 'bower_components/font-awesome',
						src: ['fonts/*.*'],
						dest: 'public/'
					}
				]
			}
		}
	});
	
	grunt.registerTask('default', [
		'bower_concat',
		'copy:dist',
		'uglify',
		'cssmin'
	]);
};