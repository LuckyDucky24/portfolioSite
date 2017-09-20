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
                options: {
                    sizes: [
                        { name: 'small', width: 320 },
                        { name: 'medium', width: 640 },
                        { name: 'large', width: 1024 }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['**/*.{jpg,jpeg,gif,png}'],
                    cwd: 'img/',
                    dest: 'img/'
                }]
            }
        }
    });


    // task setup
    grunt.registerTask('default', ['responsive_images']);
};