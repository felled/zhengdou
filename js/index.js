
window.onload=function(){
    $(".loading").hide();
    /*head*/
    $(".navigation li").hover(function () {
        var e = $(this).find(".nav-slind");
        e.slideDown();
    },function () {
        var e = $(this).find(".nav-slind");
        e.slideUp();
    })
    //星球动画 -  设置的时间间隔为 150s
    var time = setInterval('changeImage()', 120);
    window.setTimeout(function () {
        window.clearInterval(time);
    }, 120 * 11);
    /*鼠标hover动画*/
    $(".star-ani").hover(function(){
        starTime = setInterval('changeImage()', 120);
        $(".roller-ani").addClass("roller-scale");
        $(".rivers-ani").addClass("rivers-scale");
        $(".horn-ani").addClass("horn-scale");
        $(".ufo-ani").addClass("ufo-scale");
        $(".pond-ani").addClass("pond-scale");
        $(".ani-bg").addClass("ani-ani");
    },function () {
        clearInterval(starTime);
    });

    $(".sne-ani").hover(function(){
        $(this).css("transition","all 0s");
        if($(this).hasClass("roller-ani")){
            rollerTime = setInterval('roller()', 100);
        };
        if($(this).hasClass("rivers-ani")){
            riversTime = setInterval('rivers()', 100);
        };
        if($(this).hasClass("ufo-ani")){
            ufoTime = setInterval('ufo()', 100);
        };
        if($(this).hasClass("horn-ani")){
            hornTime = setInterval('horn()', 100);
        };
        if($(this).hasClass("pond-ani")){
            pondTime = setInterval('pond()', 100);
        };

    },function () {
        if($(this).hasClass("roller-ani")){
            clearInterval(rollerTime);
        };
        if($(this).hasClass("rivers-ani")){
            clearInterval(riversTime);
        };
        if($(this).hasClass("ufo-ani")){
            clearInterval(ufoTime);
        };
        if($(this).hasClass("horn-ani")){
            clearInterval(hornTime);
        };
        if($(this).hasClass("pond-ani")){
            clearInterval(pondTime);
        };
    })

    /*小火箭动画*/
    $(".code-fox").click(function () {
        $(this).toggleClass("code-ani-fox");
    });

    /*点击弹出中间导航*/
    $('body').on('click', '.rivers-ani,.project-bg', function(event) {
        event.stopPropagation();
        $(".project-bg").addClass("show");
    });
    /*点击空白隐藏中间导航*/
    $(window).click(function(){
        $(".project-bg").removeClass("show");
    });
};
var i=0;
function changeImage(){
    // div 的宽设置为 500px，所有每次向右 500px切换到下一张图片
    i += -500;
    $(".star-ani").css("background-position","" + i + "px -0px");
}
var m=0;
function ufo(){
    // div 的宽设置为 300，所有每次向右 300px切换到下一张图片
    m += -300;
    $(".ufo-ani").css("background-position","" + m + "px -0px");
}
var b=0;
function roller(){
    // div 的宽设置为 400，所有每次向右 400px切换到下一张图片
    b += -400;
    $(".roller-ani").css("background-position","" + b + "px -0px");
}
var h=0;
function rivers(){
    // div 的宽设置为 300，所有每次向右 300px切换到下一张图片
    h += -300;
    $(".rivers-ani").css("background-position","" + h + "px -0px");
}
var r=0;
function horn(){
    // div 的宽设置为 300，所有每次向右 300px切换到下一张图片
    r += -300;
    $(".horn-ani").css("background-position","" + r + "px -0px");
}
var e=0;
function pond(){
    // div 的宽设置为 300，所有每次向右 300px切换到下一张图片
    e += -250;
    $(".pond-ani").css("background-position","" + e + "px -0px");
}
