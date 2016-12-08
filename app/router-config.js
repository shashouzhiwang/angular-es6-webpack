/**
 * Created by Loki.Luo on 2016/9/3.
 */
let router = angular.module('main.router', [
        'ui.router'
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/home',
                // views: {
                    // app: {
                        templateUrl: 'component/home/home.html',
                        controller: 'homeCtrl as vm'
                    // }
                // }
            })

            .state('page1', {
                url: '/page1',
                // views: {
                    // app: {
                        templateUrl: 'component/page1/page1.html',
                        controller: 'page1Ctrl as vm'
                    // }
                // }
            })


            ;
    }).name;

export default router;