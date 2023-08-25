// FUNCION PARA SECCION PROFILE

const profileHeaders = document.querySelectorAll('.profile-container h2');
const textProfileHeaders = document.querySelectorAll('.text-profile h3');
const textProfile = document.querySelector('.text-profile');

function changeTextProfileContent(event) {
  
  const clickedHeader = event.target;
  const divClass = clickedHeader.innerText.toLowerCase().trim() + '-bio';
  const targetDiv = textProfile.querySelector('.' + divClass);

 
  const allDivs = textProfile.querySelectorAll('div');
  allDivs.forEach(div => {
    div.style.display = 'none';
  });

  
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
