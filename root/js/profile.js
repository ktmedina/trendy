// FUNCION PARA SECCION PROFILE

// Obtener los elementos h2 dentro de profile-container
const profileHeaders = document.querySelectorAll('.profile-container h2');

// Obtener los elementos h3 dentro del div text-profile
const textProfileHeaders = document.querySelectorAll('.text-profile h3');

// Obtener el div text-profile
const textProfile = document.querySelector('.text-profile');

// Función para cambiar el contenido en text-profile
function changeTextProfileContent(event) {
  // Obtener el h2 o h3 en el que se hizo clic
  const clickedHeader = event.target;
  // Obtener el nombre de la clase del div correspondiente en text-profile
  const divClass = clickedHeader.innerText.toLowerCase().trim() + '-bio';
  // Obtener el div correspondiente en text-profile
  const targetDiv = textProfile.querySelector('.' + divClass);

  // Ocultar todos los divs en text-profile
  const allDivs = textProfile.querySelectorAll('div');
  allDivs.forEach(div => {
    div.style.display = 'none';
  });

  // Mostrar el div correspondiente
  targetDiv.style.display = 'block';
}

// Agregar el evento de clic a cada h2 dentro de profile-container
profileHeaders.forEach(header => {
  header.addEventListener('click', changeTextProfileContent);
});

// Agregar el evento de clic a cada h3 dentro de text-profile
textProfileHeaders.forEach(header => {
  header.addEventListener('click', function(event) {
    // Detener la propagación del evento de clic para evitar que afecte al evento mousedown en el body
    event.stopPropagation();

    // Ocultar todos los divs en text-profile
    const allDivs = textProfile.querySelectorAll('div');
    allDivs.forEach(div => {
      div.style.display = 'none';
    });

    // Mostrar trendy-bio
    const trendyBio = textProfile.querySelector('.trendy-bio');
    trendyBio.style.display = 'block';
  });
});

// FUNCION PARA SECCION SERVICIOS (FUNCIONA PERFECTO EN ESCRITORIO)

// document.addEventListener('DOMContentLoaded', function () {
//   const servicios = document.querySelectorAll('.serv');

//   servicios.forEach((servicio) => {
//     const servText = servicio.querySelector('.serv-text');
//     const servInfo = servicio.querySelector('.serv-info');

//     servText.addEventListener('click', function (event) {
//       Ocultar todos los servicios, excepto el que se ha clickeado
//       servicios.forEach((serv) => {
//         if (serv !== servicio) {
//           serv.style.display = 'none';
//         }
//       });

//       Mostrar el contenido adicional del servicio clickeado
//       servInfo.style.display = 'inline-block';

//       Centrar el serv-text dentro del contenedor del servicio visible
//       servicio.style.display = 'flex';
//       servicio.style.justifyContent = 'center';
//       servicio.style.alignItems = 'center';

//       Ocultar el h2 dentro del serv-text
//       servText.style.display = 'none';

//       event.stopPropagation(); // Evitar que el clic se propague al documento
//     });

//     Agregar un evento clic al h3 categorias para mostrar todos los servicios y ocultar la información adicional
//     const categoria = servInfo.querySelector('h3');
//     categoria.addEventListener('click', function (event) {
//       servicios.forEach((serv) => {
//         serv.style.display = 'flex';
//         const servText = serv.querySelector('.serv-text');
//         servText.style.display = 'block'; // Mostrar el h2 nuevamente
//       });

//       Ocultar la información adicional del servicio clickeado
//       servInfo.style.display = 'none';

//       event.stopPropagation(); // Evitar que el clic se propague al documento
//     });
//   });

//   Agregar un evento clic al documento para ocultar la información adicional al hacer clic fuera de los servicios
//   document.addEventListener('click', function (event) {
//     const target = event.target;
//     const isServClicked = Array.from(servicios).some((servicio) => servicio.contains(target));

//     if (!isServClicked) {
//       servicios.forEach((serv) => {
//         serv.style.display = 'flex';
//         const servText = serv.querySelector('.serv-text');
//         servText.style.display = 'block'; // Mostrar el h2 nuevamente
//         const servInfo = serv.querySelector('.serv-info');
//         servInfo.style.display = 'none'; // Ocultar la información adicional
//       });
//     }
//   });
// });



// FUNCIONA PERFECTO EN MOBILE

// document.addEventListener('DOMContentLoaded', function () {
//   const servicios = document.querySelectorAll('.serv');

//   servicios.forEach((servicio) => {
//     const servText = servicio.querySelector('.serv-text');
//     const servInfo = servicio.querySelector('.serv-info');

//     servText.addEventListener('click', function (event) {
//       // Ocultar todos los servicios, excepto el que se ha clickeado
//       servicios.forEach((serv) => {
//         if (serv !== servicio) {
//           serv.style.display = 'none';
//         }
//       });

//       // Mostrar u ocultar el contenido adicional del servicio clickeado
//       if (servInfo.style.display === 'none' || servInfo.style.display === '') {
//         servInfo.style.display = 'block';
//         servInfo.style.position = 'relative'; // Añadir posición relativa al serv-info
//         servicio.style.flexDirection = 'column'; // Cambiar la dirección de flexión
//         servText.style.display = 'none'; // Ocultar el serv-text
//       } else {
//         servInfo.style.display = 'none';
//         servicio.style.flexDirection = 'row'; // Volver a la dirección de flexión predeterminada
//         servText.style.display = 'block'; // Mostrar el serv-text
//       }

//       event.stopPropagation(); // Evitar que el clic se propague al documento
//     });

//     // Agregar un evento clic al h3 categorias para mostrar todos los servicios y ocultar la información adicional
//     const categoria = servInfo.querySelector('h3');
//     categoria.addEventListener('click', function (event) {
//       servicios.forEach((serv) => {
//         serv.style.display = 'flex';
//         const servText = serv.querySelector('.serv-text');
//         servText.style.display = 'block'; // Mostrar el h2 nuevamente
//         const servInfo = serv.querySelector('.serv-info');
//         servInfo.style.display = 'none'; // Ocultar la información adicional
//       });

//       event.stopPropagation(); // Evitar que el clic se propague al documento
//     });
//   });

//   // Agregar un evento clic al documento para ocultar la información adicional al hacer clic fuera de los servicios
//   document.addEventListener('click', function (event) {
//     const target = event.target;
//     const isServClicked = Array.from(servicios).some((servicio) => servicio.contains(target));

//     if (!isServClicked) {
//       servicios.forEach((serv) => {
//         serv.style.display = 'flex';
//         const servText = serv.querySelector('.serv-text');
//         servText.style.display = 'block'; // Mostrar el h2 nuevamente
//         const servInfo = serv.querySelector('.serv-info');
//         servInfo.style.display = 'none'; // Ocultar la información adicional
//       });
//     }
//   });
// });


// pruebas de codigo funciona perfecto en mobile - desactivado escritoiro

// document.addEventListener('DOMContentLoaded', function () {
//   const servicios = document.querySelectorAll('.serv');

//   servicios.forEach((servicio) => {
//     const servText = servicio.querySelector('.serv-text');
//     const servInfo = servicio.querySelector('.serv-info');

//     servText.addEventListener('click', function (event) {
//       if (window.innerWidth <= 320) {
//         // Modo móvil
//         // Ocultar todos los servicios, excepto el que se ha clickeado
//         servicios.forEach((serv) => {
//           if (serv !== servicio) {
//             serv.style.display = 'none';
//           }
//         });

//         // Mostrar el contenido adicional del servicio clickeado
//         servInfo.style.display = 'block';
//         servInfo.style.position = 'relative'; // Añadir posición relativa al serv-info
//         servicio.style.flexDirection = 'column'; // Cambiar la dirección de flexión
//         servText.style.display = 'none'; // Ocultar el serv-text

//         event.stopPropagation(); // Evitar que el clic se propague al documento
//       }
//     });

//     // Agregar un evento clic al h3 categorias para mostrar todos los servicios y ocultar la información adicional
//     const categoria = servInfo.querySelector('h3');
//     categoria.addEventListener('click', function (event) {
//       servicios.forEach((serv) => {
//         serv.style.display = 'flex';
//         const servText = serv.querySelector('.serv-text');
//         servText.style.display = 'block'; // Mostrar el h2 nuevamente
//       });

//       // Ocultar la información adicional del servicio clickeado
//       servInfo.style.display = 'none';

//       event.stopPropagation(); // Evitar que el clic se propague al documento
//     });
//   });

//   // Agregar un evento clic al documento para ocultar la información adicional al hacer clic fuera de los servicios
//   document.addEventListener('click', function (event) {
//     const target = event.target;
//     const isServClicked = Array.from(servicios).some((servicio) => servicio.contains(target));

//     if (!isServClicked) {
//       servicios.forEach((serv) => {
//         serv.style.display = 'flex';
//         const servText = serv.querySelector('.serv-text');
//         servText.style.display = 'block'; // Mostrar el h2 nuevamente
//         const servInfo = serv.querySelector('.serv-info');
//         servInfo.style.display = 'none'; // Ocultar la información adicional
//       });
//     }
//   });
// });



