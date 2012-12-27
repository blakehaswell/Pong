module.exports = function (grunt) {
    
    grunt.initConfig({
        jasmine: {
            src: 'src/*.js',
            specs: 'test/specs/*Spec.js',
            helpers: 'test/helpers/*Helper.js',
            timeout: 10000
        }
    });
    
    grunt.loadNpmTasks('grunt-jasmine-runner');
    
}