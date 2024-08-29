$(document).ready(function(){


  $('.navigation-bar i').on('click',function(){
var classs = $('.navigation-bar i').attr('class');
    if(classs.includes('bar')){
      $('.mob-navigation').fadeIn(300);
      $('.fa-bars').attr('class','fas fa-times-circle');
    }
    else{
      $('.mob-navigation').fadeOut(300);
      $('.fa-times-circle').attr('class','fas fa-bars');
}



});
$('.mob-navigation ul.menu a').click(function(){
  $('.mob-navigation').fadeOut(300);
  $('.fa-times-circle').attr('class','fas fa-bars');

})






  //scroll
  var scroll = $(window).scrollTop();
  if(scroll > 100){
    $('.navigation-bar').css({'background':'black','height':'70px'})
  }
  else {
    $('.navigation-bar').css({'background':'','height':'60px'})
  }
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 100){
      $('.navigation-bar').css({'background':'black','height':'70px'})
    }
    else {
      $('.navigation-bar').css({'background':'','height':'60px'})
    }
});

})
