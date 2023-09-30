
  // Función para verificar si un elemento está visible en la pantalla
  function estaEnPantalla(elemento) {
    var rect = elemento.getBoundingClientRect();
    var altura = window.innerHeight || document.documentElement.clientHeight;
    return !(rect.bottom < 0 || rect.top - altura >= 0);
  }

  // Función para activar el efecto hover en dispositivos móviles
  function activarHoverEnMovil() {
    var anchoPantalla = window.innerWidth || document.documentElement.clientWidth;
    if (anchoPantalla < 1024) {
      var imagenes = document.querySelectorAll('.img');
      imagenes.forEach(function(imagen) {
        if (estaEnPantalla(imagen)) {
          setTimeout(function() {
            imagen.classList.add('hover-activo');
          }, 2000); // Cambia el valor 2000 a la cantidad de milisegundos de retraso que desees.
        } else {
          imagen.classList.remove('hover-activo');
        }
      });
    }
  }

  // Agrega un evento para activar el efecto hover en el desplazamiento de la página
  window.addEventListener('scroll', activarHoverEnMovil);

  // Llama a la función inicialmente para comprobar si la imagen ya está visible al cargar la página
  activarHoverEnMovil();



