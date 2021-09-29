const btns=document.querySelectorAll('.nav-btn');
const slides=document.querySelectorAll('.video-slide');
let sliderNav=function(manual){
    btns.forEach((btn)=>{
       btn.classList.remove('active');
    })
    slides.forEach((slide)=>{
        slide.classList.remove('active');
     })
    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
}
btns.forEach((btn,i) =>{
    btn.addEventListener('click',()=>{
        sliderNav(i);
    });
});

function scrollHeader(){
    const nav=document.querySelector('.navbar');
    console.log(scrollY);
    if(this.scrollY >=39){
        nav.classList.add('navbar-shrink');
    }
    else{
        nav.classList.remove('navbar-shrink');
    }
}
window.addEventListener('scroll',scrollHeader)

function scrollNav(){
    const nav=document.querySelector('.navbar');
    console.log(scrollY);
    if(this.scrollY >=39){
        nav.classList.add('fixed-top');
    }
    else{
        nav.classList.remove('fixed-top');
    }
}
window.addEventListener('scroll',scrollNav)

$(".nav-link").on("click",function(){
    $(".navbar-collapse").collapse("hide");
})