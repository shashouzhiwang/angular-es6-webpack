/**
 * @file gulp任务 监听任务
 * @author loki luo
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config');// gulp公共配置
var path = require('path');

exports.dependencies = ['default'];
var path = config.paths.html.concat(config.paths.js);
exports.task = function () {
    config.serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: config.output}
    });
    gutil.log(gutil.colors.red('server启动'));
    var reload = function () {
        return config.serve.reload();
    };
    gulp.watch(config.paths.html.concat(config.paths.js), ['default', reload]);
};
