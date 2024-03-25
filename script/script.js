
function menuDrop(){

    let menuMob = document.querySelector('.mobile-menu')
    if (menuMob.classList.contains('open')){
        menuMob.classList.remove('open')
        document.querySelector('.icon').src = "img/barra-de-menu.png"
    } else {
        menuMob.classList.add('open')
        document.querySelector('.icon').src = "img/excluir.png"
    }


}