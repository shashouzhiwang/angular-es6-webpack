/**
 * @file 入口JS
 * @author loki luo
 */   

// import ctrl from './module/ctrl-module.js';
// import homeCtrl from "./component/home/home-ctrl";
import server from './module/server-module.js';

import router from './router-config.js';

import config from './config';

import page from './component/page';

import loadingComp from './directive/loading';

angular.module('main', [
    page,
    server,
    config,
    router,
    loadingComp
]);
