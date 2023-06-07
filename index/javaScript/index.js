/* Transiciones o animaciónes con la libreria Scroll Reveal */
window.sr = ScrollReveal();

  // Barra de navegacion
  sr.reveal('.navbar', {
    // Definimos sus atributos
    duration: 2000, // 2 segundos*
    origin: 'bottom',
    distance: '-100px'
  });

  // Seccion hero
  sr.reveal('.scroll-hero', {
    // Definimos sus atributos
    duration: 2500, // Segundos
    origin: 'right',
    distance: '-100px'
  });

  // Seccion sobre nosotros
  sr.reveal('.scroll-sobre-nosotros', {
    // Definimos sus atributos
    duration: 2500, // Segundos
    origin: 'right',
    distance: '-350px'
  });

  // Mensaje (alerta) de bienvenida
  sr.reveal('.alerta-bienvenida', {
    // Definimos sus atributos
    duration: 2500, // Segundos
    origin: 'bottom',
    distance: '-50px'
  });

  // Aviso cookies
  sr.reveal('.aviso-cookies', {
    // Definimos sus atributos
    duration: 2500, // Segundos
    origin: 'left',
    distance: '-80px'
  });

  // Menu interno desplegable (btn)
  sr.reveal('.boton-desplegable', {
    // Definimos sus atributos
    duration: 2500, // Segundos
    origin: 'bottom',
    distance: '-100px' 
  });