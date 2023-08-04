
  document.addEventListener('DOMContentLoaded', function () {
    const servicios = document.querySelectorAll('.servContainter');

    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.servText');
      const servInfo = servicio.querySelector('.servInfo');

      servText.addEventListener('click', function (event) {
        // Ocultar todos los servicios, excepto el que se ha clickeado
        servicios.forEach((serv) => {
          if (serv !== servicio) {
            serv.style.display = 'none';
          }
        });

        // Mostrar el contenido adicional del servicio clickeado
        servInfo.style.display = 'inline-block';

        event.stopPropagation(); // Evitar que el clic se propague al documento
      });
    });

    // Agregar un evento clic en el documento para ocultar la información adicional al hacer clic fuera de los servicios
    document.addEventListener('click', function () {
      // Mostrar todos los servicios y ocultar la información adicional
      servicios.forEach((serv) => {
        serv.style.display = 'flex';
        const info = serv.querySelector('.servInfo');
        info.style.display = 'none';
      });
    });
  });


  