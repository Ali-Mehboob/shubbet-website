//  菜单展开
$(".klx").click(function () {
  if ($(this).find(".lz-xl").css("display") == "none") {
    $(this).find(".lz-xl").slideDown(200);
    $(".cz i ").css("transform","rotate(90deg)")
  } else {
    $(this).find(".lz-xl").slideUp(200);
    $(".cz i ").css("transform","rotate(0)")
  }
});



//  设置根字号
var whdef = 100 / 750;
var wH = window.innerHeight;
var wW = window.innerWidth;
var rem = wW * whdef;
$('html').css('font-size', rem + "px");
$(window).resize(function () {
  var whdef = 100 / 750;
  var wH = window.innerHeight;
  var wW = window.innerWidth;
  var rem = wW * whdef;
  $('html').css('font-size', rem + "px");
});



// 手机端菜单
$(".menu").click(function () {
  if ($(".l-tog-z").css("display") == "none") {
    $(".l-tog-z").fadeIn(0)
  } else {
    $(".l-tog-z").fadeOut(0)
  }
})

// 主页手机端菜单
$(".menu-idx").click(function () {
  if ($(".p-idx-menu").css("display") == "none") {
    $("body").css("padding-top", "235px")
    $(".p-idx-menu").slideDown(200)
  } else {
    $(".p-idx-menu").slideUp(200)
    $("body").css("padding-top", "70px")
  }
})



//  视频
$(".video_btn").on("click", function () {
  var video = $(this).attr("video-src");
  $("#video-c iframe").attr("src", video);

  $(".video_box").css('display', 'block');
  $(".shadow").css('display', 'block');
});


//  关闭视频
$(".video_close").click(function () {
  $(".video_box").css("display", "none");
  $(".shadow").css("display", "none");
  
  $("#video-c iframe").attr("src","");
})


