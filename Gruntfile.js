module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
             all: ['Gruntfile.js']
        },
        watch: {
            files: ['Gruntfile.js'],
            tasks: ['jshint']
        }
    });


    // task setup
    grunt.registerTask('default', []);
};