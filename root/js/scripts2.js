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

        
        
   