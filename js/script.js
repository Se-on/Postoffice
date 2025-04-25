$(document).ready(function(){

  site=true;

  //햄버거
  $(".menu-btn").click(function(){
    $(".menu-btn").toggleClass("active");
    $(".sub-bgbox").toggleClass("active");
    $(".sub").slideToggle();
  });

  //카테고리
  $(".menu a").hover(function(){
    $(this).find(".sub li").stop().slideDown();
    $(".sub").stop().slideDown();
  }, function(){
    $(this).find(".sub li").stop().slideUp();
    $(".sub").stop().slideUp();
  });  
  $(".menu a").mouseenter(function(){
    $(".sub-bgbox").addClass("active");
  }, function(){
    $(".sub-bgbox").removeClass("active");
  });

  //슬라이드
  let slideContainer = $('.slider'),
    slideWidth = slideContainer.width(),
    slideHeight = slideContainer.height(),
    slideCount = $('.slide-items li').length,
    slideItemsWidth = slideWidth * slideCount,
    slidePrev = slideContainer.find(".slide-side .prev .fa-solid"),
    slideNext = slideContainer.find(".slide-side .next .fa-solid");

  $('.slide-item').css({'width':slideWidth, 'height':slideHeight});
  $('.slide-items').css({'width':slideItemsWidth, 'height':slideHeight});
  $('.slide-item:last-child').prependTo($('.slide-items'));
  $('.slide-items').css({'margin-left':-slideWidth});

  function slideLeft(){
    $(".slide-items").stop().animate({left: -slideWidth},500,function(){
    $('.slide-items').css({"left": 0});
    $('.slide-item:first-child').appendTo('.slide-items');
    });
  };
  
  slideAuto = setInterval(slideLeft, 6000);
  function slideRight(){
    $(".slide-items").stop().animate({left: slideWidth},500,function(){
    $('.slide-items').css({"left": 0});
    $('.slide-item:last-child').prependTo('.slide-items');
    });
  };
  
  slideAuto = setInterval(slideRight, 6000);
  slidePrev.click(function(e){
    e.preventDefault();
    slideRight();
  });
  slideNext.click(function(e){
    e.preventDefault();
    slideLeft();
  });

  slideContainer.mouseenter(function(){
    clearInterval(slideAuto);
  })
  .mouseleave(function(){
    slideContainer();
  });

  //사이트맵
  $(".title").click(function(){
    $(this).toggleClass("active");
    $(".sub-navi").slideToggle(200);
  });

  //쇼핑몰 롤링
  $(".offnav li a").mouseenter(function(){
    let imageSwap = $(this).attr("data-src");
    $(".offimageholder img").attr({"src":imageSwap})
  });

  //엽서
  $(".postap-btn li").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  let result = $(this).attr("data-alt");
  $(".tabContents div").removeClass("active");
  $("#"+result).addClass("active").hide().fadeIn();
  });

});