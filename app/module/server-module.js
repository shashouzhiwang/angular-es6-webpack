/**
 * Created by Loki.Luo on 2016/12/2.
 */
import commonSer from "./../server/common-ser";
import memberSer from "./../server/member-ser";



export default angular.module("main.ser", [])
    .service("commonSer",commonSer)
    .service("memberSer",memberSer)
    .name;