/*Created by Loki Luo on 2016/6/28*/

import comonSer from "./common-server";
import memberSer from "./member-server";
export default class getSer {
    constructor() {
        // this.$http = $http;
        // this.scope = $scope;
        // this.scope.test = 'page1';
    }

    $get ($http) {
        return new comonSer($http);
    }

    

}
getSer.prototype.$get.$inject = ["$http"];
getSer.$inject = [];