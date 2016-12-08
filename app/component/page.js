/**
 * @file 入口JS
 * @author loki luo
 */

import homeCtrl from './home/home-ctrl';
import pageCtrl from './page1/page1';
let page = angular.module('main.page', [
   
    homeCtrl,  
  	pageCtrl
]).name;

export default page;        