module.exports = function(grunt){
   
grunt.initConfig({
    Pkg: grunt.file.read('package.json'),
    watch: {
        options: {
        livereload: true
    },
    html: {
        files: ['*.html', '27Feb2018/*.html', '28Feb2018/*.html', '1Mar2018/*.html'],
    },
    css: {
        files: ['*.css', '27Feb2018/*.css', '28Feb2018/*.css', '1Mar2018/*.css'],
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