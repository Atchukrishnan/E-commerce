// Selecting Components 
// Offer bar
var offerbar = document.querySelector(".offerbar")
var close = document.getElementById("close")
close.addEventListener("click",function(){
    offerbar.style.display = "none"
})

const sideNavMenu = document.getElementById("side-navbar-activate");
const sidenavbar = document.querySelector(".side-navbar");
const sideNavClose = document.getElementById("side-navbar-close");

sideNavMenu.addEventListener("click", () => {
    sidenavbar.classList.add("active");
});

sideNavClose.addEventListener("click", () => {
    sidenavbar.classList.remove("active");
});


// Slider img
var slidebar = document.querySelector(".slidebar")
var slideimg = document.querySelector(".slide-img-container")
var leftslidebutton = document.getElementById("left-slide-button")
var rightslidebutton = document.getElementById("right-slide-button")
var slidemargin = 0

rightslidebutton.addEventListener("click",function(){
    slidemargin = slidemargin + 100
    if(slidemargin>200){
        slidemargin = 0
        slideimg.style.marginLeft = "0"
    }
    else{
        slideimg.style.marginLeft = "-" + slidemargin + "vw"
    }
})
leftslidebutton.addEventListener("click",function(){
    if(slidemargin==0){
        slidemargin = 200
        slideimg.style.marginLeft = "-" + slidemargin + "vw"
    }
    else{
        slidemargin = slidemargin - 100
        slideimg.style.marginLeft = "-" + slidemargin + "vw"
    }
})

var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="./Images/redheart.png"
        }
        else{
            e.target.src="./Images/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
})
})