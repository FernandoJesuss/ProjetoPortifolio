/* PARTICLES INIT */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#12f7ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#12f7ff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  },
  retina_detect: true
});
