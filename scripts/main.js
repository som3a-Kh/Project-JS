//start dropdown 
$('.dropdown').on('click' , function (e){
    e.stopPropagation();
    $(this).toggleClass('open');
    $('.dropdown').not(this).removeClass('open');
});

$(document).on('click' , function(){
    $('.dropdown').removeClass('open');
})
// end dropdown 





// Scroll To Top
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('#scrollTop').addClass('show');
    } else {
        $('#scrollTop').removeClass('show');
    }
});

$('#scrollTop').click(function(e){
    e.preventDefault();
     $(window).scrollTop(0);
});





AOS.init();


// slick slider 
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        // prevArrow: '.prve',
        // nextArrow: '.next',
  });
});


// $(document).ready(function(){
//     $('.slider').slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '.prve',
//         nextArrow: '.next',
//         responsive: [
//             {
//                 breakpoint: 1100,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     prevArrow: false,
//                     nextArrow: false
//                 }
//             },
//             {
//                 breakpoint: 650,
//                 settings: {
//                     slidesToShow: 1,
//                     prevArrow: '.prve',
//                     nextArrow: '.next'
//                 }
//             }
//         ]
//     });
// });