document.addEventListener('DOMContentLoaded', function(){
    liteners()
})


    function liteners(){
        const burger = document.querySelector('#burger');

        burger.addEventListener('click', navegacionResponsive)

    }

    function navegacionResponsive(){
        const menu = document.querySelector('.navegacion');

        if(menu.classList.contains('mostrar')){
            menu.classList.remove('mostrar');
        } else {
            menu.classList.add('mostrar');
        }

    }


  window.sr = ScrollReveal();

  sr.reveal('.About-section', {
    duration: 2000,
    origin: 'right',
    distance: '-300px'
  });


  sr.reveal('.knowledge-section', {
    duration: 2300,
    origin: 'left',
    distance: '-400px'
  });

  sr.reveal('.navegacion', {
    duration: 2300,
    origin: 'bottom',
    distance: '-200px'
  });

  sr.reveal('.presentacion', {
    duration: 3000,
    origin: 'right',
    distance: '-200px'
  });


  sr.reveal('.Back-to-top', {
    duration: 1000,
    origin: 'right',
    distance: '-200px'
  });