/**
 * @file gulp任务test
 * @author loki luo
 */

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');// gulp公共配置

exports.task = function () {
  return gulp.src([config.output+'/*', config.debug,'!'+config.output+'/test-data/','!'+config.output+'/images/','!'+config.output+'/lib/'])
    .pipe(clean({force: true}))
};
