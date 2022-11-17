const navToogle = document.querySelector(".nav__toggle");
const primaryNav = document.querySelector(".primary__navigation");

navToogle.addEventListener("click", () =>{

    if(primaryNav.getAttribute("data-visible") === "false"){
        navToogle.setAttribute('aria-expanded',true);
        primaryNav.setAttribute("data-visible",true);
    }else{
        navToogle.setAttribute('aria-expanded',false);
        primaryNav.setAttribute("data-visible",false);
    }
    document.querySelector("body").classList.toggle("active");
});