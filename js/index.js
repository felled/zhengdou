
window.onload=function(){
    /*loading*/
    setTimeout(function(){
        $(".load .load-info").remove();
        $('.star-bg').removeClass("hidden").addClass("calc");
        $(".load-star").removeClass("hidden").addClass("loadstar-ani");
        $('.load-img').attr("src","images/home/pc-home/load-bg-2.png").addClass("load-img-clac");
        $('.ani-conten').removeClass("calc-ani hidden");
    }, 1300);
    setTimeout(function(){
        $(".load").remove();
    }, 1500);
    setTimeout(function(){
        $(".meteor").css("opacity","1");
    }, 1600);
    setTimeout(function(){
        $(".ani-bg").addClass("ani-ani");
        $(".star-img").addClass("star-ani");
    }, 1600);
    setTimeout(function(){
        $(".star-img").addClass("ani-paused");
        $(".roller-hover").addClass("roller-scale");
        $(".rivers-hover").addClass("rivers-scale");
        $(".horn-hover").addClass("horn-scale");
        $(".ufo-hover").addClass("ufo-scale");
        $(".pond-hover").addClass("pond-scale");
    }, 3000);
    /*中间星球鼠标hover动画*/
   /* $(".star-off a").hover(function(){
        $(this).parents(".star-position").addClass("ani-paused");
        $(this).next("div").addClass("star-ani").removeClass("ani-paused");
    },function () {
        $(this).next("div").addClass("ani-paused");
        $(this).parents(".star-position").removeClass("ani-paused");
    });*/

    /*动画例子*/
    $(".position > a").hover(function () {
        if($(this).next().hasClass("roller-img")){
            $(this).next().addClass("roller-ani");
        }
        if($(this).next().hasClass("rivers-img")){
            $(this).next().addClass("rivers-ani");
        }
        if($(this).next().hasClass("horn-img")){
            $(this).next().addClass("horn-ani");
        }
        if($(this).next().hasClass("ufo-img")){
            $(this).next().addClass("ufo-ani");
        }
        if($(this).next().hasClass("pond-img")){
            $(this).next().addClass("pond-ani");
        }
        /*停止动画帧*/
       /* $(this).parents(".position").addClass("ani-paused");
        $(this).next().removeClass("ani-paused");*/
    },function () {
        if($(this).next().hasClass("roller-img")){
            $(this).next().removeClass("roller-ani");
        }
        if($(this).next().hasClass("rivers-img")){
            $(this).next().removeClass("rivers-ani");
        }
        if($(this).next().hasClass("horn-img")){
            $(this).next().removeClass("horn-ani");
        }
        if($(this).next().hasClass("ufo-img")){
            $(this).next().removeClass("ufo-ani");
        }
        if($(this).next().hasClass("pond-img")){
            $(this).next().removeClass("pond-ani");
        }
      /*  $(this).parents(".position").removeClass("ani-paused");
        $(this).next().addClass("ani-paused");*/
    });

    /*小火箭动画*/
    $(".code-fox").click(function () {
        $(this).toggleClass("code-ani-fox");
    });

    /*点击弹出中间导航*/
    $('body').on('click', '.sne-ani', function(event) {
        $(".project-bg").removeClass("show");
        $(".animg").removeClass("hover-scale");
        event.stopPropagation();
        $(this).find(".animg").addClass("hover-scale");
        $(this).find (".project-bg").addClass("show");
    });
    $('body').on('click', '.star-position a', function(event) {
        $(".project-bg").removeClass("show");
        $(".animg").removeClass("hover-scale");
        event.stopPropagation();
        $(this).parents(".star-position").find (".project-bg").addClass("show");
    });
    /*点击空白隐藏中间导航*/
    $(window).click(function(){
        $(".project-bg").removeClass("show");
        $(".animg").removeClass("hover-scale");
    });

};

