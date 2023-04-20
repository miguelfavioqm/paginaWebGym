const btnMenu = document.getElementById("btn-menu")
const menu = document.getElementById("barranavegacion-items")
let toggle = true
btnMenu.addEventListener("click", ()=>{
    if(toggle){
        menu.classList.add("add")
    }else{
        menu.classList.remove("add")
    }
    toggle=!toggle
})