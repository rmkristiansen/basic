module.exports = function(grunt) {

  grunt.initConfig({
    // Watches for changes and runs tasks
    // Livereload is setup for the 35729 port by default
    sass: {
    	dist: {
      	options: {
          style: 'expanded'
        },
    		files: [{
    			src : 	'css/style.scss',
    			dest:   'css/style.css'
    		}]
    	}
    }, //sass

    watch: {
      sass: {
        files: ['css/*/*.scss', 'css/style.scss', 'css/style.css'],
        tasks: ['sass'],
        options: {
          livereload: 35729
        }
      },
      html: {
        files: ['**/*.html'],
        options: {
          livereload: 35729
        }
      },
      php: {
        files: ['**/*.php'],
        options: {
          livereload: 35729
        }
      }
    }, //watch

  }); // grunt.initConfig

  // Default task
  grunt.registerTask('default', [ 'sass', 'watch' ] );
  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower');

}; // module.exports