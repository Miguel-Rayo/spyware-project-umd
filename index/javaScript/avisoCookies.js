const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-fijo-aviso-cookies');

// Comprobamos si el usuario ya habia o no aceptado las cookies de tal manera que cuando se recargue la pagina se vuelvan o no a mostrar o pedir en tal caso.
// Si localStorage.getItem('cookies-aceptadas') no tiene nada guardado (el valor true), quiero que me ejecute el codigo con la clase de activo que me permite mostrarle el aviso de las cookies, hasta que las acepte.
if(!localStorage.getItem('cookies-aceptadas')) {
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
}

// Pero nosotros como solo queremos poner la clase de activo cuando el usuario no ha aceptado las cookies, vamos a guardar en local storage que este usuario ya acepto las cookies si es el caso
botonAceptarCookies.addEventListener('click', () => {
  avisoCookies.classList.remove('activo');
  fondoAvisoCookies.classList.remove('activo');

  localStorage.setItem('cookies-aceptadas', true);
});