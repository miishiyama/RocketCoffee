let menu = document.querySelector(".menu-hamburguer");
let content = document.querySelector(".menu-content");
let close = document.querySelector(".close-menu");
let links = document.querySelector("ul");
let main = document.querySelector("main");
let button = document.querySelector("button");
let body = document.querySelector("body");

menu.onclick = function () {
    menu.classList.add("active");
    close.classList.add("active");
    links.classList.add("active");
    main.classList.add("active");
    button.classList.add("active");
    body.classList.add("active");
}

close.onclick = function () {
    menu.classList.remove("active");
    close.classList.remove("active");
    links.classList.remove("active");
    main.classList.remove("active");
    button.classList.remove("active");
    body.classList.remove("active");
}