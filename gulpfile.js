var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var plumber = require( 'gulp-plumber' );
var debug = require( 'gulp-debug' );
var concat = require( 'gulp-concat' );
var order = require( 'gulp-order' );
var minifyJs = require( 'gulp-uglify' );
var ngAnnotate = require( 'gulp-ng-annotate' );
var validateJs = require( 'gulp-jsvalidate' );
var browserSync = require('browser-sync').create();

gulp.task( 'sass', function() {
	return gulp.src( 'assets/sass/main.scss' )
        .pipe( plumber() )
		.pipe( sass() )
		.pipe( gulp.dest( 'assets/css/' ) );
} );

gulp.task( 'js', function() {
    return gulp.src( [
           'assets/js/app/modules/*.js',
           'assets/js/app/**/*.js'
        ] )
        .pipe( plumber() )
        .pipe( validateJs() )
        .pipe( concat( 'app.js' ) )
        .pipe( ngAnnotate() )
        // .pipe( minifyJs() )
        .pipe( gulp.dest( 'assets/js/dist/' ) );
} );

gulp.task('watch', function() {
    gulp.watch( 'assets/sass/**/*.scss', ['sass'] ).on('change', browserSync.reload);
	gulp.watch( 'assets/js/**/*.js', ['js'] ).on('change', browserSync.reload);
} );

gulp.task('server', function() {
    browserSync.init( {
        server: {
            baseDir: "./"
        }
    } );
});

gulp.task('default', ['server', 'watch', 'sass', 'js'] );
