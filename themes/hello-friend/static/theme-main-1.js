var mycontainer=document.querySelector(".container");var menu=document.querySelector(".menu");var mobileMenuTrigger=document.querySelector(".menu-trigger");var desktopMenu=document.querySelector(".menu__inner--desktop");var desktopMenuTrigger=document.querySelector(".menu__sub-inner-more-trigger");var menuMore=document.querySelector(".menu__sub-inner-more");var mobileQuery=getComputedStyle(document.body).getPropertyValue("--phoneWidth");var isMobile=function isMobile(){return window.matchMedia(mobileQuery).matches};var isMobileMenu=function isMobileMenu(){mobileMenuTrigger&&mobileMenuTrigger.classList.toggle("hidden",!isMobile());menu&&menu.classList.toggle("hidden",isMobile());menuMore&&menuMore.classList.toggle("hidden",!isMobile())};menu&&menu.addEventListener("click",function(e){return e.stopPropagation()});menuMore&&menuMore.addEventListener("click",function(e){return e.stopPropagation()});isMobileMenu();document.body.addEventListener("click",function(){if(!isMobile()&&menuMore&&!menuMore.classList.contains("hidden")){menuMore.classList.add("hidden")}else if(isMobile()&&!menu.classList.contains("hidden")){menu.classList.add("hidden")}});window.addEventListener("resize",isMobileMenu);mobileMenuTrigger&&mobileMenuTrigger.addEventListener("click",function(e){e.stopPropagation();menu&&menu.classList.toggle("hidden")});desktopMenuTrigger&&desktopMenuTrigger.addEventListener("click",function(e){e.stopPropagation();menuMore&&menuMore.classList.toggle("hidden");if(menuMore&&menuMore.getBoundingClientRect().right>mycontainer.getBoundingClientRect().right){menuMore.style.left="auto";menuMore.style.right=0}});
var themeToggle = document.querySelector(".theme-toggle");themeToggle.addEventListener("click", function () {  document.body.classList.toggle("dark");  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");});

//随机日志
function randomPost() {
    fetch('/sitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        let locationHref,locSplit;
        do {
            locationHref = ls[Math.floor(Math.random() * ls.length)].innerHTML
            locSplit = locationHref.split('/')[3] || ''
        } while (locSplit == '' || locSplit == 'tags'); 
        location.href = locationHref
    })
}