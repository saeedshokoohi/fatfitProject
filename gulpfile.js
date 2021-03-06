var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    argv = process.argv;
// var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');


/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');
var paths = {
  scripts: ['client/js/**/*.coffee', 'client/js/*.js', '!client/external/**/*.coffee'],
  images: 'resources/img/*'
};
gulp.task('watch', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts','images'],
    function(){
      gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
      gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
      buildBrowserify({ watch: true }).on('end', done);
    }
  );
});
// Copy all static images
gulp.task('images', ['clean'], function() {
  console.log('running images task...');
  return gulp.src(paths.images)
    // Pass in options to the task
  //  .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('www/build/img'));
});

gulp.task('build', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts','images'],
    function(){
      buildBrowserify().on('end', done);
    }
  );
});

function myCopyFonts()
{
  copyFonts({src:['resources/fonts/*','node_modules/ionic-angular/fonts/**/*.+(ttf|woff|woff2)'],dest:'www/build/fonts'});
};
function myCopyScripts()
{
  copyScripts({src:[
  'node_modules/es6-shim/es6-shim.min.js',
  'node_modules/angular2/bundles/angular2-polyfills.js',
  'node_modules/gauge.js/dist/gauge.js',
   'node_modules/jquery/dist/jquery.js'
    
  ]})
};
function myBuildSaas()
{
  buildSass({src:['app/theme/app.+(ios|md|wp).scss',
  'node_modules/gauge.js/dist/gauge.css'
  ]});
};
gulp.task('sass', myBuildSaas);
gulp.task('html', copyHTML);
gulp.task('fonts', myCopyFonts);
gulp.task('scripts', myCopyScripts);

gulp.task('clean', function(){
  return del('www/build');
});
