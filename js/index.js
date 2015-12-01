requirejs.config({
    paths: {
        'jquery': '../lib/jquery-1.11/jquery-1.11.1.min',
        'menu':'../module/menu/menu'
    }
});

requirejs(['jquery','data', 'menu'], function ($, data, menu) {
    console.log(data);
    var winHeight = $(window).height();
    var menuHeight = winHeight - 50;
    $(".menu-right").css("height", menuHeight + "px");
    var $menuLeft = $('.menu-left');
    $menuLeft.css('height', menuHeight - 52 + "px");

    $('.menu-nav').find('li').on('click', function () {
        var $this = $(this);
        $this.addClass('active').siblings('li').removeClass('active');
    });

    var $mask = $('.mask');
    var $dishIcon = $('.menu-select .menu-dish-icon');
    var $menuDishCar = $('.menu-dish-car');

    $('#orderDish').on('click', function () {
        var $this = $(this), btnData = $this;
        if(!btnData.isOk || btnData.isOk == 0){
            $this.html("确定");
            $mask.show().addClass('animated slideInUp');
            $menuDishCar.show().addClass('animated slideInUp');
            $dishIcon.hide();
            $this.data('isOk', 1);
            var menuDishCarHeight = $menuDishCar.height();
            $('#selectDish').height((menuDishCarHeight-93) + 'px');
        }
    });

    $mask.on("click", function () {
        var $this = $(this);
        $this.hide().removeClass('animated slideInUp');
        $menuDishCar.hide().removeClass('animated slideInUp');
        $dishIcon.show();
        $('#orderDish').html('选好了').data('isOk', '0');
    });

    var menu = new menu.Menu({
        menuData : data
    });

    $('.menu-wrap').fadeIn();

});