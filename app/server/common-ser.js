/*Created by Loki Luo on 2016/12/7*/

export default class comonSer {
    constructor($http,$timeout,config) {
        Object.assign(this,{$http,$timeout,config});
    };
    commonHttp(option){
        let URL = this.config.TEST ? option.localhostUrl : this.config.DOMAIN + option.url;
        let self = this;
        if(option.loading)
            this.showLoading({"tipText":"loading"});
        return this.$http({
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            url: option.localhostUrl,
            data: option.data
        }).
        then(function successCallback(response) {
            console.log('含头地址===' + JSON.stringify(response));
                    if(option.loading)
                    self.$timeout(function(){
                        self.hideLoading({
                            "tip":true,
                            "tip_option":"success",
                            "time":3000
                        });
                    },2000);
            return response.data;
          },function errorCallback(error) {
            console.log(JSON.stringify("出错了===" + JSON.stringify(error)));
            return {
                "fail":true
            };
          });
    }

    showLoading(option){
        var $loading_cover = $(".loading_cover");
        this.fadeIn($loading_cover,{
                "in_animate":"fadeIn",
                "out_animate":"fadeOut"
        });
        $loading_cover.find(".loadding_text").html(option.tipText);
            
    }
    /**
    option = {
        tip:true/false,
        tip_option:success/fail,
        time:
    }
    */
    hideLoading(option){
        let self = this;
        let $loading_cover = $(".loading_cover");
        this.fadeOut($loading_cover,{
                    "in_animate":"fadeIn",
                    "out_animate":"fadeOut"
            });
        if(option&&option.tip){
            var time = option.time || 1500;
            var $loading_success = $(".loading_"+option.tip_option);
            this.fadeIn($loading_success,{
                "in_animate":"fadeIn",
                "out_animate":"fadeOut"
            });
            this.$timeout(function(){
                self.fadeOut($loading_success,{
                    "in_animate":"fadeIn",
                    "out_animate":"fadeOut"
                });
            },time);
        }

    }

    /**
    option = {
        in-animate:
        out-animate
    }
    */
    fadeIn($obj,option){
        // alert($obj.length);
        $obj.show();
        $.each($obj,function(){
            $(this).addClass('animated');
            $(this).removeClass(option.out_animate).addClass(option.in_animate);
            // i==0 ? $(this).removeClass('fadeOut').addClass('fadeIn'):$(this).removeClass('fadeOut').addClass('fadeIn');
        });
    }
    fadeOut($obj,option){
        $.each($obj,function(){
            $(this).addClass(option.out_animate);
            //i==0 ? $(this).addClass('fadeOut'):$(this).addClass('fadeOut');
        });
        this.$timeout(function(){$obj.hide();},500);
    }    
    static newInstance ($http,$timeout,config) {
        return new comonSer($http,$timeout,config);
    }
}
comonSer.newInstance.$inject = ["$http","$timeout","config"];
// comonSer.$inject = ["$http","$timeout","config"];