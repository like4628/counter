$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
    anchors: ['TrendPage', 'IntroPage', 'MasterpiecePage', 'ElitePage' , 'Remarkable'],
    menu: '#rightMenu'
	});
 
  
  //視差滾動
  var rellax = new Rellax('.rellax',{
  center : true
    });
  //owl 輪播
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText: [],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3 
        },
        1000:{
            items:4
        }
    }
  })
  
  //fancybox
  $("[data-fancybox]").fancybox({
    loop: true
  });
});