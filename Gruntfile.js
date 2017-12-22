module.exports = function(grunt){
	//makes this file public to the rest of the app
	grunt.initConfig({
		//asking grunt to read this file
		pkg: grunt.file.readJSON('package.json'),
		//concatinating all js files-themodules into one
		concat : {
			dist:{
				src:[
					'js/modules/*.js',
					'js/main.js'
				],
				dest: 'prod/production.js'
			}
		}, //minifying it so the comp can read it better
			uglify: {
				build : {
					src : 'prod/production.js',
					dest : 'prod/production.min.js'
				}
			},
			sass : {
				dist: {
					options : {
						style: 'compressed'
					},
					files : {
						'css/main.css' : 'sass/main.scss'
					}
				}
			}


	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-sass'); keep this but it is broken on school comps
	grunt.registerTask('default', ['concat', 'uglify']); //'sass' need to add after uglify after dont forget the cmma after uglify
};