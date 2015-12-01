define(['jquery'], function ($) {

    function Menu(opts) {
        this.opts = $.extend({}, Menu.DEFAULTS, opts)

    }

    Menu.DEFAULTS = {
        menuData:[]
    };


    Menu.prototype._showMenu = function(menuData){

        if(typeof menuData == 'object' && !$.isArray(menuData)){
            console.log("menuData is not a array");
            return ;
        }
        var i, j;
        for(i = 0; i < menuData.length; i++){
            var menu = menuData[i],menuList = menu.dishDesc;
            if($.isEmptyObject(menu) && !(menuList && $.isArray(menuList))){
                continue ;
            }

            for(j = 0; j < menuList.length; j++){
                var dish = menu.dishDesc[j];
                if($.isEmptyObject(dish)){
                    continue;
                }



            }



        }






    };




    return {
        Menu: Menu
    };
});