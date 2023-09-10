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

profileHeaders.forEach(header => {
  header.addEventListener('click', changeTextProfileContent);
});

textProfileHeaders.forEach(header => {
  header.addEventListener('click', function(event) {
    event.stopPropagation();

    
    const allDivs = textProfile.querySelectorAll('div');
    allDivs.forEach(div => {
      div.style.display = 'none';
    });

   
    const trendyBio = textProfile.querySelector('.trendy-bio');
    trendyBio.style.display = 'block';
  });
});
