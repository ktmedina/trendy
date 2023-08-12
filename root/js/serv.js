// COMPORTAMIENTO SERV-CONTAINTER EN ANCHO PANTALLA MAYOR A 1024 PX

document.addEventListener('DOMContentLoaded', function () {
    const servicios = document.querySelectorAll('.serv');
    
    // Función para verificar el ancho de pantalla
    function isScreenWidthAbove1024() {
      return window.innerWidth > 1024;
    }
  
    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.serv-text');
      const servInfo = servicio.querySelector('.serv-info');
  
      servText.addEventListener('click', function (event) {
        // Verificar el ancho de pantalla antes de realizar las acciones
        if (isScreenWidthAbove1024()) {
          // Ocultar todos los servicios, excepto el que se ha clickeado
          servicios.forEach((serv) => {
            if (serv !== servicio) {
              serv.style.display = 'none';
            }
          });
  
          // Mostrar el contenido adicional del servicio clickeado
          servInfo.style.display = 'inline-block';
  
          // Centrar el serv-text dentro del contenedor del servicio visible
          servicio.style.display = 'flex';
          servicio.style.justifyContent = 'center';
          servicio.style.alignItems = 'center';
  
          // Ocultar el h2 dentro del serv-text
          servText.style.display = 'none';
  
          event.stopPropagation(); // Evitar que el clic se propague al documento
        }
      });
  
      // Agregar un evento clic al h3 categorias para mostrar todos los servicios y ocultar la información adicional
      const categoria = servInfo.querySelector('h3');
      categoria.addEventListener('click', function (event) {
        // Verificar el ancho de pantalla antes de realizar las acciones
        if (isScreenWidthAbove1024()) {
          servicios.forEach((serv) => {
            serv.style.display = 'flex';
            const servText = serv.querySelector('.serv-text');
            servText.style.display = 'block'; // Mostrar el h2 nuevamente
          });
  
          // Ocultar la información adicional del servicio clickeado
          servInfo.style.display = 'none';
  
          event.stopPropagation(); // Evitar que el clic se propague al documento
        }
      });
    });
  
    // Agregar un evento clic al documento para ocultar la información adicional al hacer clic fuera de los servicios
    document.addEventListener('click', function (event) {
      // Verificar el ancho de pantalla antes de realizar las acciones
      if (isScreenWidthAbove1024()) {
        const target = event.target;
        const isServClicked = Array.from(servicios).some((servicio) => servicio.contains(target));
  
        if (!isServClicked) {
          servicios.forEach((serv) => {
            serv.style.display = 'flex';
            const servText = serv.querySelector('.serv-text');
            servText.style.display = 'block'; // Mostrar el h2 nuevamente
            const servInfo = serv.querySelector('.serv-info');
            servInfo.style.display = 'none'; // Ocultar la información adicional
          });
        }
      }
    });
  });

  // COMPORTAMIENTO SERV-CONTAINTER EN ANCHO PANTALLA MENOR A 320 PX

  
  document.addEventListener('DOMContentLoaded', function () {
    const servicios = document.querySelectorAll('.serv');
  
    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.serv-text');
      const servInfo = servicio.querySelector('.serv-info');
  
      servText.addEventListener('click', function (event) {
        if (window.innerWidth <= 320) {
          // Modo móvil
          // Ocultar todos los servicios, excepto el que se ha clickeado
          servicios.forEach((serv) => {
            if (serv !== servicio) {
              serv.style.display = 'none';
            }
          });
  
          // Mostrar el contenido adicional del servicio clickeado
          servInfo.style.display = 'block';
          servInfo.style.position = 'relative'; // Añadir posición relativa al serv-info
          servicio.style.flexDirection = 'column'; // Cambiar la dirección de flexión
          servText.style.display = 'none'; // Ocultar el serv-text
  
          event.stopPropagation(); // Evitar que el clic se propague al documento
        }
      });
  
      // Agregar un evento clic al h3 categorias para mostrar todos los servicios y ocultar la información adicional
      const categoria = servInfo.querySelector('h3');
      categoria.addEventListener('click', function (event) {
        servicios.forEach((serv) => {
          serv.style.display = 'flex';
          const servText = serv.querySelector('.serv-text');
          servText.style.display = 'block'; // Mostrar el h2 nuevamente
        });
  
        // Ocultar la información adicional del servicio clickeado
        servInfo.style.display = 'none';
  
        event.stopPropagation(); // Evitar que el clic se propague al documento
      });
    });
  
    // Agregar un evento clic al documento para ocultar la información adicional al hacer clic fuera de los servicios
    document.addEventListener('click', function (event) {
      const target = event.target;
      const isServClicked = Array.from(servicios).some((servicio) => servicio.contains(target));
  
      if (!isServClicked) {
        servicios.forEach((serv) => {
          serv.style.display = 'flex';
          const servText = serv.querySelector('.serv-text');
          servText.style.display = 'block'; // Mostrar el h2 nuevamente
          const servInfo = serv.querySelector('.serv-info');
          servInfo.style.display = 'none'; // Ocultar la información adicional
        });
      }
    });
  });
  