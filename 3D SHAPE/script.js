const openMenu = document.querySelector(".Menu-Hamber1");
const Menu = document.querySelector("ul");

console.log(openMenu);
openMenu.addEventListener('click' , () =>{
    Menu.classList.toggle('toggel')
    openMenu.classList.toggle('hamber')
})
