// javascript code




$(document).ready(function() {


  





  $(function() {
    $('.toggle-overlay').click(function() {
      $('.search-overlay').toggleClass('open');
    })
  })


  // menu toggle button

  $('.menu-toggle').click(function() {
    $('.menu-toggle').toggleClass('active');
  })

  // filter section

  $(".gallery-button").click(function() {
    var name = $(this).attr('data-filter');
    if(name == "all") {
      $(".shot-thumbnail").show('2000');
    }else{
      $(".shot-thumbnail").not('.' + name).hide('2000');
      $(".shot-thumbnail").filter('.'+ name).show('2000');
    }
  })

  $(".navigation a").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
  });





  // owl carousel

  $('#our-team').owlCarousel({
     loop: true,
     autoplay: true,
     margin: 10,
     responsiveClass:true,
     nav:false,
     dot:true,
     responsive:{
          0:{
            items:1
          },

          600:{
            items:2
          },

          1000:{
            items:3
          }
     }


  });



  $(window).scroll(function() {
    if($(this).scrollTop() >= 500) {
      $(".back-to-top").fadeIn(200);
    }else{
      $(".back-to-top").fadeOut(200);
    }
  })
});


   