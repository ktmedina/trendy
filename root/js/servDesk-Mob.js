let modoDesktop = window.innerWidth > 1024;

function aplicarEventosServ() {
  const anchoPantalla = window.innerWidth;
  const servicios = document.querySelectorAll('.serv');

  if (anchoPantalla > 1024) {
    modoDesktop = true;

    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.serv-text');
      const servInfo = servicio.querySelector('.serv-info');
      const servImg = servicio.querySelector('.serv-img');
      const servCategoryImg = servicio.querySelector('.serv img');

      servText.addEventListener('click', () => {
        servicios.forEach((s) => {
          if (s !== servicio) {
            s.style.display = 'none';
          }
        });

        servicio.style.display = 'flex';

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

      const btnServInfo = servicio.querySelector('.btn');
      btnServInfo.addEventListener('click', (e) => {

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

        servicios.forEach((s) => {
          s.style.display = 'block';
          s.style.height = '100%';
        });
      });
    });
  } else {
    modoDesktop = false;

    servicios.forEach((servicio) => {
      const servText = servicio.querySelector('.serv-text');
      servText.addEventListener('click', () => {
        servicios.forEach((s) => {
          if (s !== servicio) {
            s.style.display = 'none';
          }
        });

        servicio.style.display = 'block';

        const servInfo = servicio.querySelector('.serv-info');
        servInfo.classList.remove('ocultar');
        servInfo.classList.add('mostrar');
      });

      const btnServInfo = servicio.querySelector('.btn');
      btnServInfo.addEventListener('click', () => {
        const servInfo = servicio.querySelector('.serv-info');
        servInfo.classList.remove('mostrar');
        servInfo.classList.add('ocultar');

        servicios.forEach((s) => {
          s.style.display = 'block';
          s.style.height = '100%';
        });
      });
    });
  }
}

window.addEventListener('load', aplicarEventosServ);
window.addEventListener('resize', aplicarEventosServ);