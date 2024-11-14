$("document").ready(function(){
    
//     $('.center').slick({
//     centerMode: false,
//     centerPadding: '60px',
//     slidesToShow: 6,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

    
// $('.lazy').slick({
//     lazyLoad: 'ondemand',
//     slidesToShow: 6,
//     slidesToScroll: 1
//   });
  
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
    
  });
});
