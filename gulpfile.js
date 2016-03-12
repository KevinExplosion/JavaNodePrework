var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
//throw your require variables up here!

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function(){
  return browserify({ /*this is a key*/entries:
    ['./tmp/allConcat.js'] /*this is an object*/})

  //calls browserify function defined above. Tells it which files to browserify in brackets.
    .bundle() //function passed to the result of browserify
    .pipe(source('app.js')) //create app.js
    .pipe(gulp.dest('./build/js')); //put it inside of this file path
    //"chain of function calls," one long line of tasks"
});
