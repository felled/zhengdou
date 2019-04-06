$(function () {
    /*head*/
    $(".navigation li").hover(function () {
        var e = $(this).find(".nav-slind");
        e.slideDown();
    },function () {
        var e = $(this).find(".nav-slind");
        e.slideUp();
    });
    /*mb-head*/

        $(".page-open").click(function () {
            var e = $(this).attr("name");
            $(".fir").removeClass("show-page");
            $("."+ e +"").addClass("show-page");
        });

        $(".mb-muen").click(function () {
            $(".fir").addClass("show-page");
            $(".black").css("display","block");
        });

        $(".fir .black").click(function () {
            $(this).parents(".mb-page").removeClass("show-page");
            $(this).css("display","none");
        });
        $(".other-page .black").click(function () {
            $(this).parents(".mb-page").removeClass("show-page");
            $(".fir").addClass("show-page");
        });

    /*pojrct*/
    $(".poj-info").click(function (event) {
        event.stopPropagation();
    })
    $(".law").click(function () {
        $(".right-fox").toggleClass("right-fox-right");
        $(".poj-info").toggleClass("right-poj");
        $(".footer").toggleClass("right-ani");
    })
})