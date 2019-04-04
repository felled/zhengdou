$(function () {
    /*head*/
    $(".navigation li").hover(function () {
        var e = $(this).find(".nav-slind");
        e.slideDown();
    },function () {
        var e = $(this).find(".nav-slind");
        e.slideUp();
    });

    /*pojrct*/
    $(".happy-valley").click(function () {
        $(".right-fox").toggleClass("right-fox-right");
        $(".poj-info").toggleClass("right-poj");
        $(".content,.footer").toggleClass("right-ani");
    })
})