const gulp = require('gulp')
const del = require('del')
const less = require('gulp-less')

gulp.task('clean', () => del(['dist/**']))

gulp.task('build:less', () => gulp.src('src/theme.less').pipe(less()).pipe(gulp.dest('dist')))

gulp.task('build', gulp.parallel('build:less'))

gulp.task('default', gulp.series('clean', 'build'))
