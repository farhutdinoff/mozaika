$('.loop').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:50,
    responsive:{
        600:{
            items:7
        }
    }
});

$('.owl-carousel-6').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 2,
    responsive:{
        600:{
            items:6
        }
    }
});

$('.owl-carousel-4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 2,
    responsive:{
        600:{
            margin: 30,
            items:4
        }
    }
});

$('#menuToggle').click( function(){
  $('.nav').toggleClass("active");
  $('body').toggleClass("overflow-hidden");
});
