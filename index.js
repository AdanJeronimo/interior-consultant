function mostrarMenu(){

    console.log("mostrarMenu ");
    const menu = document.getElementById('navbar-responsivo');
    
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
    
}

