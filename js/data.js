/**
 * Created by luohui on 15/11/30.
 */
define(function () {

    function Data() {

    }

    Data.menuData = {
        "dishMenu": [{
            "dishGroupId": "5833e087d0b9426ca673ebb2f35c09c6",
            "dishGroupName": "零食",
            "dishDesc": [{
                "dishId": "5405c0da20fc463fb057e73e88703821",
                "dishName": "凉皮",
                "price": "8.0",
                "dishPic": "image/mo22.png"
            }]
        }, {
            "dishGroupId": "b3287f2b909141f98c8db2011a8b24eb",
            "dishGroupName": "川菜",
            "dishDesc": [{
                "dishId": "fd675d9fd7aa49d8ae109b11c48503c6",
                "dishName": "土豆丝",
                "price": "15.0",
                "dishPic": "resource\/image\/picLib\/img-3.png"
            }, {
                "dishId": "c30d8f85da1849af849b34328614e7cc",
                "dishName": "夫妻肺片",
                "price": "28.0",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "8df7ece789dd41a29b7dc769c67c2ec6",
                "dishName": "麻婆豆腐",
                "price": "10.0",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "4f04729d73f14aa4b5e9be7f7da3b88e",
                "dishName": "西红柿炒鸡蛋",
                "price": "15.0",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "169cfd9e12ad425ca1d262bf1739332c",
                "dishName": "东坡肘子",
                "price": "38.98",
                "dishPic": "image/mo22.png"
            }]
        }, {
            "dishGroupId": "f0683984dca846088f90e4c707077dd7",
            "dishGroupName": "西北菜",
            "dishDesc": [{
                "dishId": "ad4de0cdd221409f88bcf326eab73f21",
                "dishName": "孜然羊肉",
                "price": "80.0",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "fd675d9fd7aa49d8ae109b11c48503c6",
                "dishName": "土豆丝",
                "price": "15.0",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "4d4532504f42481ba39462603a9bac97",
                "dishName": "孜然脆骨",
                "price": "78.88",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "5832584e0b2b48df9afd18ba4d89d4da",
                "dishName": "大盘鸡",
                "price": "100.0",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "e8992036fa4d4f44a0dbbef2d7436143",
                "dishName": "卤牛肉",
                "price": "50.0",
                "dishPic": "image/mo22.png"
            }, {
                "dishId": "511922a3d58e4f218b617ad619ecc80d",
                "dishName": "烤羊肉串",
                "price": "3.0",
                "dishPic": "image/mo22.png"
            }]
        }]
    };


    Data.dishGroup = '<li class="active"><a href="#${pageId}"><span>${groupName}</span>' +
        '<em class="dish-add-num hide">0</em></a></li>';

    Data.dishListContainer =
        '<li id="${pageId}">' +
        '<div class="title">${groupName}</div>' +
        '<ul class="dish-list clear">${dishListContent}</ul>' +
        '</li>';

    Data.dishListContent =
        '<li class="dish-container">' +
        '<div class="dish-img"><img src="image/mo22.png"></div>' +
        '<div class="dish-content"><div class="dish-title">卤牛肉</div></div>${dishPrice}</li>';

    Data.dishPrice =
        '<div class="dish-price"><em>￥</em><span>20</span>/份</div>' +
        '<div class="dish-choose clear">' +
        '<span class="dish-plus"></span><span class="dish-num">0</span> <span class="dish-jian"></span>' +
        '</div></div>';

    Data.orderDish = '<li id="${id}" data-dish_id="${dishId" data-group_row="_2_5">' +
        '<div class="clear"><span class="dish-show-name">烤羊肉串</span>' +
        '<p class="menu-cont-price1"><em>￥</em><span>${price}</span>/份 </p>' +
        '<span class="dish-plus" style="display: inline;"></span>' +
        '<span class="dish-num" style="display: inline;">1</span>' +
        '<span class="dish-jian"></span>' +
        '</div></li>';

    return {
        Data: Data
    }
});