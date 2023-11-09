
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const navList = document.querySelectorAll(".nav_item");

if (localStorage.getItem("bg-color") !== null) {
    header.style.background = localStorage.getItem("bg-color");
    footer.style.background = localStorage.getItem("bg-color");
 
    navList.forEach(el => {
        el.style.color = localStorage.getItem("text-color");
    })
}


function white() {
    console.log("white");

    header.style.background = "white";
    header.style.transition = "1s";

    footer.style.background = "white"

    localStorage.setItem("bg-color", "white");

    navList.forEach(el => {
        el.style.color = "black";
        el.style.transition = "1s";
    })

    localStorage.setItem("text-color", "black");
}
function black() {
    console.log("black");

    header.style.background = "grey";

    footer.style.background = "grey"
    footer.style.transition = "1s";

    localStorage.setItem("bg-color", "grey");

    navList.forEach(el => {
        el.style.color = "white";
        el.style.transition = "1s";
    })

    localStorage.setItem("text-color", "white");
}