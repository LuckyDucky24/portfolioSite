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
            dev: {
                files: [{
                    expand: true,
                    src: ['myWebsite/img/**/*.{jpg,gif,png}'],
                    cwd: 'src/',
                    dest: 'dist/'
                }]
            }
        },
    })


    // task setup
    grunt.registerTask('default', []);
};