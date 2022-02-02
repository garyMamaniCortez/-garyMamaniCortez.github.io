$(document).ready(function(){
  var ancho = $(window).width();

  if(ancho > 600) {
    particlesJS('particles-js', {
      particles: {
        color: '#fff',
        color_random: false,
        shape: 'circle',
        opacity: {
          opacity: 1,
          anim: {
            enable: true,
            speed: 1.5,
            opacity_min: 0,
            sync: false
          }
        },
        size: 4,
        size_random: true,
        nb: 150,
        line_linked: {
          enable_auto: true,
          distance: 100,
          color: '#fff',
          opacity: 1,
          width: 1,
          condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
          }
        },
        anim: {
          enable: true,
          speed: 1
        }
      },
      interactivity: {
        enable: true,
        mouse: {
          distance: 300
        },
        detect_on: 'canvas',
        mode: 'grab',
        line_linked: {
          opacity: .5
        },
        events: {
          onclick: {
            enable: true,
            mode: 'push',
            nb: 4
          },
          onresize: {
            enable: true,
            mode: 'out',
            density_auto: false,
            density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
          }
        }
      },
      retina_detect: true
    });
  }
});
