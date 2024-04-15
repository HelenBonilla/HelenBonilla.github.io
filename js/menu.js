const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');
        filterCards(filterValue);
      });
    });
  
    function filterCards(filter) {
      cards.forEach(card => {
        const cardType = card.getAttribute('class').split(' ')[1];
        if (filter === 'all' || filter === cardType) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
  
      // Activar/desactivar clase active en botones de filtro
      filterButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-filter') === filter || filter === 'all') {
          button.classList.add('active');
        }
      });
    }
  });
  
