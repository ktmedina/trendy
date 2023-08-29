function servTextCategoryClicked(event) {
    if (window.innerWidth <= 555) {
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
  