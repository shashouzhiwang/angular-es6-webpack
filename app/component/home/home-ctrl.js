/**
 * @file home.js
 * @author loki luo
 */

import './home.scss'; 
export default angular.module('homeModelCtrl',[])
		.controller('homeCtrl',["$scope","commonSer",($scope,commonSer) => {

			$scope.test = '我是home测试页面';

			$scope.testClick = function(){
				
				$scope.test = "双向绑定成功";
			}
			commonSer.commonHttp({
	            "localhostUrl": "./../../test-data/bar.json",
	            "url": "",
	            "data": {},
	            "loading":true
            });

		}])
		.name    
		               