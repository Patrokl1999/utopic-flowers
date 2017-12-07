$(document).ready(function () {
    var burger = $('.burger');
    var burger_active = $('.burger_active');
    var trigger = $('.trigger');
    var menu = $('.navigation');
    burger.click(function () {
        burger.toggleClass('burger_active');
        menu.toggleClass('trigger');
    });
    burger_active.click(function () {
        burger.removeClass('burger_active');
    });
       $(".navigation").mCustomScrollbar();
    });
jQuery( document ).ready(function( $ ) {
    $( '#my-slider' ).sliderPro();
    $( '#my-slider' ).sliderPro({
        width: 960,
        height: 380,
        arrows: true,
        buttons: true,
        waitForLayers: true,
        fade: true,
        autoplay: true,
        autoScaleLayers: false
    });
});