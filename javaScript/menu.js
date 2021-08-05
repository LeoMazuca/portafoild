const home = document.getElementById("menu-home");
const about = document.getElementById("menu-about");
const projects = document.getElementById("menu-projects");
const contact = document.getElementById("menu-contact");
const check = document.getElementById("checkbox");

home.addEventListener("click", () =>{
    if (check.checked == true) {
        console.log("Esta encendido")
        check.checked = false;
    }else{
        console.log("Esta apagado")
    }
});
about.addEventListener("click", () =>{
    if (check.checked == true) {
        console.log("Esta encendido")
        check.checked = false;
    }else{
        console.log("Esta apagado")
    }
});
projects.addEventListener("click", () =>{
    if (check.checked == true) {
        console.log("Esta encendido")
        check.checked = false;
    }else{
        console.log("Esta apagado")
    }
});
contact.addEventListener("click", () =>{
    if (check.checked == true) {
        console.log("Esta encendido")
        check.checked = false;
    }else{
        console.log("Esta apagado")
    }
});
