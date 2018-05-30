var navbar = document.getElementById('menu');
var navbar2 = document.getElementById('menu2');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var btnClose = document.getElementById('btnClose');
var btnOpen = document.getElementById('btnOpen');
var BlackMenu = document.getElementById('blackMenu');

btnOpen.addEventListener("click",function(){
    BlackMenu.style.display = "flex";
});
btnClose.addEventListener("click",function(){
    BlackMenu.style.display = "none";
});
document.addEventListener("scroll",dispayFixedNav);
next.addEventListener("mouseover",function(){
    sideWindow("showRight");
});
next.addEventListener("mouseout",function(){
    sideWindow("hideRight");
});
previous.addEventListener("mouseover",function(){
    sideWindow("showLeft");
});
previous.addEventListener("mouseout",function(){
    sideWindow("hideLeft");
});
function dispayFixedNav()
{
    if(screen.width <= 640)
    {
        if(window.scrollY >= 300)
        {
            navbar2.className = "resp-navbar resp-navbar--sticky";
            
        }
        else
        {
            navbar2.className = "resp-navbar";
        }

    }
    else
    {
        if(window.scrollY >= 300)
        {
            navbar.className = "navbar navbar--sticky";
            next.style.display = 'flex';
            previous.style.display = 'flex';
            
        }
        else
        {
            navbar.className = "navbar";
            previous.style.display = 'none';
            next.style.display = 'none';
        }
    }
}
function sideWindow(effect)
{
    switch(effect)
    {
        case "showRight":
            next.children[0].style.color = "white";
            next.children[1].style.display = "flex";
        break;
        case "hideRight":
            next.children[0].style.color = "black";
            next.children[1].style.display = "none";     
        break;
        case "showLeft":
            previous.children[0].style.color = "white";
            previous.children[1].style.display = "flex";
        break;
        case "hideLeft":
            previous.children[0].style.color = "black";
            previous.children[1].style.display = "none";     
        break;
        default:
        break;
    }
}