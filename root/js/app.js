const profileH2Elements = document.querySelectorAll('.img-profile h2');

profileH2Elements.forEach(profileH2 => {
  profileH2.addEventListener('click', () => {
    const visibleElements = document.querySelectorAll('.mostrar');
    visibleElements.forEach(element => {
      element.classList.remove('mostrar');
      element.classList.add('ocultar');
    });

    const barberName = profileH2.textContent.trim();
    const barberBioDiv = document.querySelector(`.${barberName.toLowerCase()}-bio`);
    barberBioDiv.classList.remove('ocultar');
    barberBioDiv.classList.add('mostrar');
  });
});

const textProfileH3Elements = document.querySelectorAll('.text-profile h3');

textProfileH3Elements.forEach(textProfileH3 => {
  textProfileH3.addEventListener('click', () => {
    const visibleElements = document.querySelectorAll('.mostrar');
    visibleElements.forEach(element => {
      element.classList.remove('mostrar');
      element.classList.add('ocultar');
    });

    const trendyBio = document.querySelector('.trendy-bio');
    trendyBio.classList.remove('ocultar');
    trendyBio.classList.add('mostrar');
  });
});













function servTextCategoryClicked(event) {
    const clickedServTextCategory = event.currentTarget;
    const clickedServ = clickedServTextCategory.parentElement.parentElement;
  
    const allServElements = document.querySelectorAll('.serv');
    allServElements.forEach(serv => {
      serv.style.display = 'none';
    });
  
    clickedServ.style.display = 'block';
  
    const allServInfoElements = document.querySelectorAll('.serv-info');
    allServInfoElements.forEach(info => {
      info.style.display = 'none';
    });
  
    const clickedServInfo = clickedServ.querySelector('.serv-info');
    clickedServInfo.style.display = 'block';
  }
  
  function servInfoClicked() {
    const allServElements = document.querySelectorAll('.serv');
    allServElements.forEach(serv => {
      serv.style.display = 'block';
    });
  
    const allServInfoElements = document.querySelectorAll('.serv-info');
    allServInfoElements.forEach(info => {
      info.style.display = 'none';
    });
  }
  
  const servTextCategoryElements = document.querySelectorAll('.serv h2.serv-text');
  servTextCategoryElements.forEach(h2 => {
    h2.addEventListener('click', servTextCategoryClicked);
  });
  
  const servInfoElements = document.querySelectorAll('.serv-info h3.btn');
  servInfoElements.forEach(h3 => {
    h3.addEventListener('click', servInfoClicked);
  });
  