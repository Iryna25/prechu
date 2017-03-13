$(function(){
  var swiper = new Swiper('.swiper-container');
  $('.swiper-container').Swiper()

});



$(function(){
  if($(window).width() > '840') {
  $('.bxslider').bxSlider(
      {
       pager:false
      }
    )
  }

});



$(function(){

  $('.navbar-toggle').click(function(e){
  e.preventDefault();
  })

  $('.navbar-toggle').on('click', function(){
    var target = $(this).attr('href');
    $(target).addClass('collapse');
  })

})


 
  
