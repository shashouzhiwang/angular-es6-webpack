/**
 * Created by Loki.Luo on 2016/12/2.
 */
import commonSer from "./../server/common-ser";
import memberSer from "./../server/member-ser";



export default angular.module("main.ser", [])
    .factory("commonSer",commonSer.newInstance)
    .service("memberSer",memberSer)
    .name;