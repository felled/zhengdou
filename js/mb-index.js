$(function () {
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
})