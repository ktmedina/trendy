// document.addEventListener('DOMContentLoaded', function () {
//   const servicios = document.querySelectorAll('.serv');
//   const isAbove1024 = () => window.innerWidth > 1024;

//   // Función para ocultar un servicio
//   function hideService(servicio) {
//     servicio.style.display = 'none';
//     const servText = servicio.querySelector('.serv-text');
//     servText.style.display = 'block'; // Mostrar el h2 nuevamente
//     const servInfo = servicio.querySelector('.serv-info');
//     servInfo.style.display = 'none'; // Ocultar la información adicional
//   }

//   // Función para mostrar un servicio
//   function showService(servicio) {
//     servicio.style.display = 'flex';
//     servicio.style.justifyContent = 'center';
//     servicio.style.alignItems = 'center';
//     const servText = servicio.querySelector('.serv-text');
//     servText.style.display = 'none'; // Ocultar el h2
//     const servInfo = servicio.querySelector('.serv-info');
//     servInfo.style.display = 'inline-block'; // Mostrar información adicional
//   }

//   servicios.forEach((servicio) => {
//     const servText = servicio.querySelector('.serv-text');
//     const servInfo = servicio.querySelector('.serv-info');

//     servText.addEventListener('click', function (event) {
//       if (isAbove1024()) {
//         servicios.forEach((serv) => {
//           if (serv !== servicio) {
//             hideService(serv);
//           }
//         });

//         showService(servicio);

//         event.stopPropagation(); // Evitar que el clic se propague al documento
//       }
//     });

//     // Agregar un evento clic al h3 categorías para mostrar todos los servicios y ocultar la información adicional
//     const categoria = servInfo.querySelector('h3');
//     categoria.addEventListener('click', function (event) {
//       if (isAbove1024()) {
//         servicios.forEach((serv) => {
//           showService(serv);
//         });

//         event.stopPropagation(); // Evitar que el clic se propague al documento
//       }
//     });
//   });

//   // Agregar un evento clic al documento para ocultar la información adicional al hacer clic fuera de los servicios
//   document.addEventListener('click', function (event) {
//     if (isAbove1024()) {
//       const target = event.target;
//       const isServClicked = Array.from(servicios).some((servicio) => servicio.contains(target));

//       if (!isServClicked) {
//         servicios.forEach((serv) => {
//           showService(serv);
//         });
//       }
//     }
//   });
// });
