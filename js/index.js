
var i=0;
window.onload=function(){
    $(".loading").hide();
    //星球动画 -  设置的时间间隔为 150s
    var time = setInterval('changeImage()', 150);
    window.setTimeout(function () {
        window.clearInterval(time);
    }, 150 * 11);
};
function changeImage(){
    // div 的高设置为 500px，所有每次向右 500px切换到下一张图片
    i += -500;
    $(".star-ani").css("background-position","" + i + "px -0px");
}
