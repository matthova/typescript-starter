const gulp = require('gulp');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const path = require('path');
const nodemon = require('nodemon');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['foo', 'watch'], () => {
  nodemon({
    script: 'dist/server/index.js',
    ignore: ["**/*.*"], // Only using nodemon to trigger restart
    nodeArgs: ['--debug']
  });
});

gulp.task('watch', () => {
  const watchPath = path.join(__dirname, '/src/**/*.ts');
  gulp.watch([watchPath], ['foo']);
});

gulp.task('foo', () => {
  const tsResult = tsProject.src() // instead of gulp.src(...) 
  .pipe(sourcemaps.init()) // This means sourcemaps will be generated
  .pipe(tsProject());

  nodemon.emit('restart');
  
  return tsResult.js
  .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
  .pipe(gulp.dest('dist'));
});

// Get a clean exit when you kill the process with "ctrl + c"
process.once('SIGINT', function() {
  nodemon.once('exit', function() {
    process.exit();
  });
});
