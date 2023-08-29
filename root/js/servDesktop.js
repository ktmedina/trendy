
// // Función para verificar el ancho de la pantalla
// function aplicarEventosServSoloEnPantallaAncha() {
//     const anchoPantalla = window.innerWidth;
    
//     if (anchoPantalla > 1024) {
//         // Obtén todos los elementos con la clase 'serv'
//         const servicios = document.querySelectorAll('.serv');
        
//         // Resto del código aquí...
//         // (Tu código actual para agregar eventos clic a los elementos '.serv')

//         servicios.forEach((servicio) => {
//             const servText = servicio.querySelector('.serv-text');
//             const servInfo = servicio.querySelector('.serv-info');
//             const servImg = servicio.querySelector('.serv-img');
//             const servCategoryImg = servicio.querySelector('.serv img')
        
//             servText.addEventListener('click', () => {
//                 // Oculta todos los elementos 'serv' excepto el seleccionado
//                 servicios.forEach((s) => {
//                     if (s !== servicio) {
//                         s.style.display = 'none';
//                     }
//                 });
        
//                 // Muestra el 'serv' seleccionado
//                 servicio.style.display = 'flex';
//                 servicio.style.height = '500px'
               
        
//                 // Muestra el 'serv-info' correspondiente
//                 servInfo.classList.remove('ocultar');
//                 servInfo.classList.add('mostrar');
//                 servImg.classList.remove('ocultar');
//                 servImg.classList.add('mostrar');
//                 servText.classList.remove('mostrar');
//                 servText.classList.add('ocultar');
        
//                 servInfo.classList.add('serv-info-show')
                
//                 servicio.classList.add('serv-show')
                
//                 servImg.classList.add('serv-img-show')
                
//                 servCategoryImg.classList.add('img-show')
        
//             });
        
//             // Agrega un evento clic al botón dentro de 'serv-info'
//             const btnServInfo = servInfo.querySelector('.btn');
//             btnServInfo.addEventListener('click', (e) => {
//                 e.stopPropagation(); // Evita que el clic se propague a 'serv-text'
        
//                 // Oculta el 'serv-info' actual
//                 servInfo.classList.remove('mostrar');
//                 servInfo.classList.add('ocultar');
//                 servImg.classList.remove('ocultar');
//                 servImg.classList.add('mostrar');
//                 servText.classList.add('mostrar');
//                 servText.classList.remove('ocultar');
                
        
//                 servInfo.classList.remove('serv-info-show')
                
//                 servicio.classList.remove('serv-show')
                
//                 servImg.classList.remove('serv-img-show')
                
//                 servCategoryImg.classList.remove('img-show')
        
        
//                 // Muestra todos los elementos 'serv'
//                 servicios.forEach((s) => {
//                     s.style.display = 'block';
//                     s.style.height = '100%'
//                 });
//             });
//         });
//     }
// }

// // Llama a la función al cargar la página y cuando cambie el tamaño de la ventana
// window.addEventListener('load', aplicarEventosServSoloEnPantallaAncha);
// window.addEventListener('resize', aplicarEventosServSoloEnPantallaAncha);








// Función para verificar el ancho de la pantalla y aplicar o quitar eventos clic
function aplicarEventosServ() {
    const anchoPantalla = window.innerWidth;
    const servicios = document.querySelectorAll('.serv');

    if (anchoPantalla > 1024) {
        servicios.forEach((servicio) => {
            const servText = servicio.querySelector('.serv-text');
            const servInfo = servicio.querySelector('.serv-info');
            const servImg = servicio.querySelector('.serv-img');
            const servCategoryImg = servicio.querySelector('.serv img')
            servText.addEventListener('click', () => {
                // Oculta todos los elementos 'serv' excepto el seleccionado
                servicios.forEach((s) => {
                    if (s !== servicio) {
                        s.style.display = 'none';
                    }
                });
        
                // Muestra el 'serv' seleccionado
                servicio.style.display = 'flex';
                servicio.style.height = '500px'
               
        
                // Muestra el 'serv-info' correspondiente
                servInfo.classList.remove('ocultar');
                servInfo.classList.add('mostrar');
                servImg.classList.remove('ocultar');
                servImg.classList.add('mostrar');
                servText.classList.remove('mostrar');
                servText.classList.add('ocultar');
        
                servInfo.classList.add('serv-info-show')
                
                servicio.classList.add('serv-show')
                
                servImg.classList.add('serv-img-show')
                
                servCategoryImg.classList.add('img-show')
        
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
                
        
                servInfo.classList.remove('serv-info-show')
                
                servicio.classList.remove('serv-show')
                
                servImg.classList.remove('serv-img-show')
                
                servCategoryImg.classList.remove('img-show')
        
        
                // Muestra todos los elementos 'serv'
                servicios.forEach((s) => {
                    s.style.display = 'block';
                    s.style.height = '100%'
                });
            });
        });
    } else {
        // Si la pantalla es más estrecha que 1024, quitar los eventos clic
        servicios.forEach((servicio) => {
            const servText = servicio.querySelector('.serv-text');
            servText.removeEventListener('click', null);

            // Quitar el evento clic del botón dentro de 'serv-info'
            const btnServInfo = servicio.querySelector('.btn');
            btnServInfo.removeEventListener('click', null);
        });
    }
}

// Llama a la función al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', aplicarEventosServ);
window.addEventListener('resize', aplicarEventosServ);
