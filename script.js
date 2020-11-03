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
    dots: false,
    stagePadding: 10,
    navText: [],
    
    mouseDrag: false,
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

  //hackUI
  var ad = document.getElementById("ad");
  var ctx = ad.getContext("2d");
  ad.height = window.innerHeight;
  ad.width = window.innerWidth;
  var chinese = "onlyc7h3en2いやすい1ようе5ографи3че9ск11ое 0полستور1د: شر00كة تل ож"; //可以修改下落文字
  chinese = chinese.split("");
  var font_size = 12; //可以修改文字大小
  var columns = ad.width / font_size;
  var drops = [];
  for (var x = 0; x < columns; x++) drops[x] = 1;
  var ccolor = ["#0FF","#33B5E5", "#0099CC"];
  var cc = ccolor[Math.floor((Math.random() * ccolor.length))];

  function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, ad.width, ad.height);
      ctx.fillStyle = cc;//可以修改文字颜色
      ctx.font = font_size + "px arial";
      for (var i = 0; i < drops.length; i++) {
          var text = chinese[Math.floor(Math.random() * chinese.length)];
          ctx.fillText(text, i * font_size, drops[i] * font_size);
          if (drops[i] * font_size > ad.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
      }
  }

  setInterval(draw, 30);

  //Particle
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 241,
        density: { enable: true, value_area: 1104.8066982851817 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "Pcanvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  //Particle-line
  particlesJS("particles-js-line", {
    particles: {
      number: {
        value: 40,
        density: { enable: true, value_area: 631.3181133058181 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 96.20472365193136,
        color: "#ffffff",
        opacity: 0.32068241217310456,
        width: 1.4430708547789706
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  //fancybox
  $("[data-fancybox]").fancybox({
      loop: true
    });
  });