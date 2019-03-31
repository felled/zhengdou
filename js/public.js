$(function () {
    /*head*/
    $(".navigation li").hover(function () {
        var e = $(this).find(".nav-slind");
        e.slideDown();
    },function () {
        var e = $(this).find(".nav-slind");
        e.slideUp();
    });
})