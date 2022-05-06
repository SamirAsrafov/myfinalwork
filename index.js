const mainMenu = document.querySelector('#mainmenu')
const closeMenu = document.querySelector('.closemenu')
const openMenu = document.querySelector('.openmenu')


openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}
function close(){
    mainMenu.style.top = '-100%';
}
