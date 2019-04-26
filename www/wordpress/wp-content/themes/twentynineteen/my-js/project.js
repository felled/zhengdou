$(function () {
    var offsetWid = document.documentElement.clientWidth;

    $(".tab-list span").hover(function () {
        var e =$(this).attr("name");
        $(".poj-characteristic > div").addClass("hidden");
        $(".poj-characteristic").find("."+e+"-char").removeClass("hidden");
        $(".tab-list span").removeClass("active");
        $(this).addClass("active");
    })
    /*pc-code*/
    $(".code-img").hover(function () {
        $(".hover-code").toggleClass("hover");
    });
    if(offsetWid < 1024){
        /*mb-code*/
        $(".code-img,.code-a").click(function () {
            $(".mb-code-fox").css("display","block");
        });
        $(".mb-code-fox .black").click(function () {
            $(this).parents(".mb-code-fox").css("display","none");
        })
    }
})