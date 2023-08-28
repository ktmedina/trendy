// Obtén todos los elementos con la clase 'serv'
const servicios = document.querySelectorAll('.serv');

// Agrega un evento clic a cada elemento 'serv'
servicios.forEach((servicio) => {
    const servText = servicio.querySelector('.serv-text');
    const servInfo = servicio.querySelector('.serv-info');
    const servImg = servicio.querySelector('.serv-img');

    servText.addEventListener('click', () => {
        // Oculta todos los elementos 'serv' excepto el seleccionado
        servicios.forEach((s) => {
            if (s !== servicio) {
                s.style.display = 'none';
            }
        });

        // Muestra el 'serv' seleccionado
        servicio.style.display = 'block';

        // Muestra el 'serv-info' correspondiente
        servInfo.classList.remove('ocultar');
        servInfo.classList.add('mostrar');
        servImg.classList.remove('ocultar');
        servImg.classList.add('mostrar');
    });

    // Agrega un evento clic al botón dentro de 'serv-info'
    const btnServInfo = servInfo.querySelector('.btn');
    btnServInfo.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic se propague a 'serv-text'

        // Oculta el 'serv-info' actual
        servInfo.classList.remove('mostrar');
        servInfo.classList.add('ocultar');
        servImg.classList.remove('ocultar');
        servImg.classList.add('mostrar');

        // Muestra todos los elementos 'serv'
        servicios.forEach((s) => {
            s.style.display = 'block';
        });
    });
});
