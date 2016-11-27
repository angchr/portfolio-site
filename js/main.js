$(document).ready(function (){

$(window).on('load', function () {
    $('#masonry').masonry({
      columnWidth: '.item',
      itemSelector: '.item'
    });
});

    $("#portfolio").hover(function (){
    $(".leftPop, .bottomLeftPop, bottomRightPop").show().animate({opacity:0}, 50);
    $(".topShow, .bottomShow, .centerShow, .rightPop").show().animate({opacity: 1}, 500);
    $(".afterClickAbout, #masonry").hide();
  });

  $("#me").hover(function () {
    $(".rightPop, .bottomLeftPop, bottomRightPop").animate({opacity:0}, 50);
    $(".topShow, .bottomShow, .centerShow, .leftPop").show().animate({opacity: 1}, 500);
    $(".afterClickAbout, #masonry").hide();
  });

  $("#ideas").hover(function () {
    $(".rightPop, .leftPop, .bottomRightPop").show().animate({opacity:0}, 50);
    $(".topShow, .bottomShow, .centerShow, .bottomLeftPop").show().animate({opacity: 1}, 500);
    $(".afterClickAbout, #masonry").hide();
  });

  $("#talk").hover(function () {
    $(".rightPop, .leftPop, .bottomLeftPop").show().animate({opacity:0}, 50);
    $(".topShow, .bottomShow, .centerShow, .bottomRightPop").show().animate({opacity: 1}, 500);
    $(".afterClickAbout, #masonry").hide();
  });

  $("#about").on('click', function (){
    $(".afterClickAbout").show().animate({opacity: 1}, 500);
    $(".topShow, .bottomShow, .centerShow").hide();
  });

  $("#portfolio-click").on('click', function (){
    $("#masonry").show().animate({opacity: 1}, 500);
    $(".topShow, .bottomShow, .centerShow").hide();
  });

});
