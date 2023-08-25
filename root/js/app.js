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


// FUNCION GENERAL PARA MODIFICAR CATEGORIA  SERVICIOS
// function servTextCategoryClicked(event) {
//     const clickedServTextCategory = event.currentTarget;
//     const clickedServ = clickedServTextCategory.parentElement.parentElement;
  
//     const allServElements = document.querySelectorAll('.serv');
//     allServElements.forEach(serv => {
//       serv.style.display = 'none';
//     });

    
  
//     clickedServ.style.display = 'inline-block';
  
//     const allServInfoElements = document.querySelectorAll('.serv-info');
//     allServInfoElements.forEach(info => {
//       info.style.display = 'none';
//     });
  
//     const clickedServInfo = clickedServ.querySelector('.serv-info');
//     clickedServInfo.style.display = 'inline-block';
//   }
  
//   function servInfoClicked() {
//     const allServElements = document.querySelectorAll('.serv');
//     allServElements.forEach(serv => {
//       serv.style.display = 'inline-block';
//     });
  
//     const allServInfoElements = document.querySelectorAll('.serv-info');
//     allServInfoElements.forEach(info => {
//       info.style.display = 'none';
//     });
//   }
  
//   const servTextCategoryElements = document.querySelectorAll('.serv h2.serv-text');
//   servTextCategoryElements.forEach(h2 => {
//     h2.addEventListener('click', servTextCategoryClicked);
//   });
  
//   const servInfoElements = document.querySelectorAll('.serv-info h3.btn');
//   servInfoElements.forEach(h3 => {
//     h3.addEventListener('click', servInfoClicked);
//   });
  



480
 
function servTextCategoryClicked(event) {
  if (window.innerWidth <= 480) {
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





// Selecciona los elementos una sola vez
// const allServElements = document.querySelectorAll('.serv');
// const allServInfoElements = document.querySelectorAll('.serv-info');
// const allServImgElements = document.querySelectorAll('.serv-img');

// function handleServTextCategoryClick(event) {
//   const clickedServTextCategory = event.currentTarget;
//   const clickedServ = clickedServTextCategory.parentElement.parentElement;
//   const clickedServInfo = clickedServ.querySelector('.serv-info');

//   allServElements.forEach(serv => {
//     if (serv === clickedServ) {
//       serv.style.display = 'flex';
//       serv.style.alignItems = 'center';
//       serv.style.width = allServElements.length === 1 ? '50%' : '100%';
//     } else {
//       serv.style.display = 'none';
//       serv.style.width = '0';
//     }
//   });

//   allServInfoElements.forEach(info => {
//     info.style.display = 'none';
//   });

//   allServImgElements.forEach(img => {
//     img.style.width = '50%';
//   });

//   clickedServInfo.style.display = 'block';
// }

// function handleServInfoClick() {
//   allServElements.forEach(serv => {
//     serv.style.display = 'block';
//     serv.style.width = '50%';
//   });

//   allServInfoElements.forEach(info => {
//     info.style.display = 'none';
//   });

//   allServImgElements.forEach(img => {
//     img.style.width = '100%';
//     img.style.margin = '5px';
//   });
// }

// function executeCodeIfScreenWidthIsGreaterThan480() {
//   if (window.matchMedia("(min-width: 481px)").matches) {
//     // Ejecuta el código solo si el ancho de pantalla es mayor que 480px
//     const servTextCategoryElements = document.querySelectorAll('.serv h2.serv-text');
//     servTextCategoryElements.forEach(h2 => {
//       h2.addEventListener('click', handleServTextCategoryClick);
//     });

//     const servInfoElements = document.querySelectorAll('.serv-info h3.btn');
//     servInfoElements.forEach(h3 => {
//       h3.addEventListener('click', handleServInfoClick);
//     });
//   }
// }

// // Ejecuta la función al cargar la página y cuando cambie el tamaño de la ventana
// window.addEventListener('load', executeCodeIfScreenWidthIsGreaterThan480);
// window.addEventListener('resize', executeCodeIfScreenWidthIsGreaterThan480);
