// Variable global para rastrear el modo
let modoDesktop = window.innerWidth > 800;
let modoMobile = window.innerWidth <555

// Función para aplicar eventos a los elementos .serv
function aplicarEventosServ() {
  const anchoPantalla = window.innerWidth;
  const servicios = document.querySelectorAll('.serv');

  if (anchoPantalla > 1024) {
    modoDesktop = true;

    // Código para el modo desktop
    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.serv-text');
      const servInfo = servicio.querySelector('.serv-info');
      const servImg = servicio.querySelector('.serv-img');
      const servCategoryImg = servicio.querySelector('.serv img');

      servText.addEventListener('click', () => {
        // Oculta todos los elementos 'serv' excepto el seleccionado
        servicios.forEach((s) => {
          if (s !== servicio) {
            s.style.display = 'none';
          }
        });

        // Muestra el 'serv' seleccionado
        servicio.style.display = 'flex';

        // Muestra el 'serv-info' correspondiente
        servInfo.classList.remove('ocultar');
        servInfo.classList.add('mostrar');
        servImg.classList.remove('ocultar');
        servImg.classList.add('mostrar');
        servText.classList.remove('mostrar');
        servText.classList.add('ocultar');

        servInfo.classList.add('serv-info-show');

        servicio.classList.add('serv-show');

        servImg.classList.add('serv-img-show');

        servCategoryImg.classList.add('img-show');
      });

      // Agrega el evento clic al botón dentro de 'serv-info'
      const btnServInfo = servicio.querySelector('.btn');
      btnServInfo.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic se propague a 'serv-text'

        // Oculta el 'serv-info' actual
        servInfo.classList.remove('mostrar');
        servInfo.classList.add('ocultar');
        servImg.classList.remove('ocultar');
        servImg.classList.add('mostrar');
        servText.classList.add('mostrar');
        servText.classList.remove('ocultar');

        servInfo.classList.remove('serv-info-show');

        servicio.classList.remove('serv-show');

        servImg.classList.remove('serv-img-show');

        servCategoryImg.classList.remove('img-show');

        // Muestra todos los elementos 'serv'
        servicios.forEach((s) => {
          s.style.display = 'block';
          s.style.height = '100%';
        });
      });
    });
  } else if(anchoPantalla <= 555){
    modoDesktop = false;

    // Código para el modo móvil
    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.serv-text');
      servText.addEventListener('click', () => {
        // Oculta todos los elementos 'serv' excepto el seleccionado
        servicios.forEach((s) => {
          if (s !== servicio) {
            s.style.display = 'none';
          }
        });

        // Muestra el 'serv' seleccionado
        servicio.style.display = 'block';

        // Mostrar el 'serv-info' correspondiente en modo móvil
        const servInfo = servicio.querySelector('.serv-info');
        servInfo.classList.remove('ocultar');
        servInfo.classList.add('mostrar');
      });

      // Agrega el evento clic al botón dentro de 'serv-info' en modo móvil
      const btnServInfo = servicio.querySelector('.btn');
      btnServInfo.addEventListener('click', () => {
        // Oculta el 'serv-info' actual en modo móvil
        const servInfo = servicio.querySelector('.serv-info');
        servInfo.classList.remove('mostrar');
        servInfo.classList.add('ocultar');

        // Muestra todos los elementos 'serv' en modo móvil
        servicios.forEach((s) => {
          s.style.display = 'block';
          s.style.height = '100%';
        });
      });
    });
  } else if (anchoPantalla > 556 && anchoPantalla < 1023){
    modoDesktop = false;

    // Código para el modo móvil
    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.serv-text');
      servText.addEventListener('click', () => {
        // Oculta todos los elementos 'serv' excepto el seleccionado
        servicios.forEach((s) => {
          if (s !== servicio) {
            s.style.display = 'none';
          }
        });

        // Muestra el 'serv' seleccionado
        servicio.style.display = 'block';

        // Mostrar el 'serv-info' correspondiente en modo móvil
        const servInfo = servicio.querySelector('.serv-info');
        servInfo.classList.remove('ocultar');
        servInfo.classList.add('mostrar');
      });

      // Agrega el evento clic al botón dentro de 'serv-info' en modo móvil
      const btnServInfo = servicio.querySelector('.btn');
      btnServInfo.addEventListener('click', () => {
        // Oculta el 'serv-info' actual en modo móvil
        const servInfo = servicio.querySelector('.serv-info');
        servInfo.classList.remove('mostrar');
        servInfo.classList.add('ocultar');

        // Muestra todos los elementos 'serv' en modo móvil
        servicios.forEach((s) => {
          s.style.display = 'block';
          s.style.height = '100%';
        });
      });
    });

  }
}

// Llama a la función al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', aplicarEventosServ);
window.addEventListener('resize', aplicarEventosServ);