$(function () {
      $(".tab-list span").hover(function () {
          var e =$(this).attr("name");
          $(".poj-characteristic > div").addClass("hidden");
          $(".poj-characteristic").find("."+e+"-char").removeClass("hidden");
          $(".tab-list span").removeClass("active");
          $(this).addClass("active");
      })
})