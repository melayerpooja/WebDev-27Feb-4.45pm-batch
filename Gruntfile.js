module.exports = function(grunt){
   
grunt.initConfig({
    Pkg: grunt.file.read('package.json'),
    watch: {
        options: {
        livereload: true
    },
    html: {
        files: ['*.html', 'src/{,*/}/*.html', 'dashboard/*.html'],
    },
    css: {
        files: ['*.css', 'styles/css/*.css'],
    }

},
connect: {
    server: {
        options: {
            port: 9001,
            livereload: true
        }
    }
}
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('default', ['connect', 'watch']);
}