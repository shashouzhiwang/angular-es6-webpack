/**
 * Created by Loki.Luo on 2016/11/3.
 */
// import loadingTemp from './directive/loading-temp.html';
export default 
angular
.module('loadingComp',[])
.directive('loading',[() => {
        var option = {
            restrict:'AE',
            scope:{
                
            },
            templateUrl:'./directive/loading-temp.html',
            link:function(scope){
                scope.tipText = scope.tipText || "数据加载中...";
            }
        };
        return option;
    }])
.name