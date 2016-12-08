/**
 * Created by Loki.Luo on 2016/9/3.
 */
import './page1.scss';
export default angular.module('page1ModelCtrl',[])
		.controller('page1Ctrl',["$scope",($scope) => {

			$scope.test = '我是page1测试页面';

			$scope.testClick = function(){
				
				$scope.test = "双向绑定成功";
			}

		}])
		.name