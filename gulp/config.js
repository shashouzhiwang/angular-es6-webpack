/**
 * @file gulp配置
 * @author loki luo
 */
var VERSION = require('../package.json').version;
var serve = require('browser-sync');
var path = require('path');
var root = 'app';

function resolveToApp(files) {
    return path.join(root, files);
}
module.exports = {
    banner: '/*!\n'
    + ' * loki luo\n'
    + ' * @license MIT\n'
    + ' * v' + VERSION + '\n'
    + ' */\n',
    output: 'dist',
    debug: 'debug',
    entry: 'app/index.js',
    root: root,
    paths: {
        js: resolveToApp('/**/*!(.spec.js).js'),
        html: [
            resolveToApp('**/*.html')
        ],
        styl: resolveToApp('**/*.styl'),
        data: resolveToApp('test-data/*'),
        lib: resolveToApp('lib/**/*.*'),
        img: resolveToApp('images/*')
    },
    serve: serve
};
