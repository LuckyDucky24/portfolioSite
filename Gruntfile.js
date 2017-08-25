module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-responsive-images');


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
             all: ['Gruntfile.js']
        },
        watch: {
            files: ['Gruntfile.js'],
            tasks: ['jshint']
        },
        responsive_images: {
            options: {
                // Task-specific options go here
            },
            your_target: {
                // Target-specific file lists and/or options go here.
            },
        },
    })


    // task setup
    grunt.registerTask('default', []);
};