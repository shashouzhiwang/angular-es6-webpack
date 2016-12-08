/**
 * @file gulp任务copy test-data
 * @author loki luo
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config');// gulp公共配置

exports.task = function () {
    gulp.src(config.paths.data)
    .pipe(gulp.dest(config.output+'/test-data'));

    gulp.src(config.paths.lib)
    .pipe(gulp.dest(config.output+'/lib'));

	gulp.src(config.paths.img)
    .pipe(gulp.dest(config.output+'/images'));

};
