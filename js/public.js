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
    /*法律声明*/
    var offsetWid = document.documentElement.clientWidth;
    $(".law").click(function () {
        if(offsetWid < 1024){
            window.location.href="../../page/law/law.html" ;
        }else {
            $(".right-fox").toggleClass("right-fox-right");
            $(".poj-info").toggleClass("right-poj");
            $(".footer").toggleClass("right-ani");
        }
    })


})