/**
 * @file home.js
 * @author loki luo
 */

import './home.scss'; 

class homeCtrl{
	constructor($scope,commonSer){
		Object.assign(this,{$scope,commonSer});
		this.init();
	}
	init(){
		this.$scope.test = '我是home测试页面';
			this.commonSer.commonHttp({
	            "localhostUrl": "./../../test-data/bar.json",
	            "url": "",
	            "data": {},
	            "loading":true
            });
	}
	testClick(){
		vm.test = "双向绑定成功";
	}  
}

homeCtrl.$inject = ["$scope","commonSer"];

export default angular.module('homeModelCtrl', [])
    .controller(homeCtrl.name, homeCtrl).name;		
