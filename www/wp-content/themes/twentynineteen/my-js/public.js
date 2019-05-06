$(function () {
    /*禁止右键*/
    $(document).bind("contextmenu",function(e){
        return false;
    });
    /*head*/
    $(".navigation li").hover(function () {
        $(".navigation li").removeClass("active")
        var e = $(this).find(".nav-slind");
        e.slideDown();
        $(".hover-blur").addClass("blur");
        $(".blur-img").addClass("blur");
    },function () {
        var e = $(this).find(".nav-slind");
        e.slideUp();
        $(".hover-blur").removeClass("blur");
        $(".blur-img").removeClass("blur");
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

    /*左侧留言*/
    $(".me-right").click(function () {
         $(this).toggleClass("big");
         $(".me-conten").toggleClass("height");
         $(".leavMessage").toggleClass("bottom");
    })
    /*pojrct*/
    $(".poj-info").click(function (event) {
        event.stopPropagation();
    })
    /*法律声明*/
    var offsetWid = document.documentElement.clientWidth;
    $(".law").click(function () {
        if(offsetWid < 1024){
            window.location.href="http://www.szcubean.com/law/" ;
        }else {
            $(".right-fox").toggleClass("right-fox-right");
            $(".poj-info").toggleClass("right-poj");
            $(".footer").toggleClass("right-ani");
        }
    });

    /*分页*/

    $(".page-info ul").hide();
    $(".page-info ul:first-child").show().addClass("active first");
    $(".page-info ul:last-child").addClass("last");

    /*点击下一页*/
    $(".next").click(function () {
        var e = $(".page-info .active");
        $(".pages .prev").text("上一页");
        if(e.hasClass("last")){
            /* e.prev("ul").hide().removeClass("active");
             e.show()*/
        }else {
            e.hide().removeClass("active");
            e.next("ul").show().addClass("active");
        }
    });

    /*点击上一页*/
    $(".prev").click(function () {
        var e = $(".page-info .active");
        if(e.prev("ul").hasClass("first")){
            $(".pages .prev").text("第一页");
        }
        if(e.hasClass("first")){

        }else {
            e.hide().removeClass("active");
            e.prev("ul").show().addClass("active");
        }
    })
})