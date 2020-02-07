module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    less: {
      style: {
        files: {
          'css/style.css': 'source/less/*.less',
        },
      },
    },
    watch: {
      style: {
        files: ['source/less/**/*.less'],
        tasks: ['less'],
      },
    },
  });
};
