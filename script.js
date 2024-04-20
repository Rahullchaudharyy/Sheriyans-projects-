const allImageLinks = [
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
  
];
let theAvatar = document.querySelectorAll('.avtar')
let imgelem = document.querySelectorAll('.imgdiv')
imgelem.forEach((link ,index)=> {
    link.innerHTML = `<img class="w-full h-full object-cover" src="${allImageLinks[index].img}"alt="">`;
})

theAvatar.forEach(function(ing,index){
    ing.innerHTML = `<img class ="h-full w-full" src="${allImageLinks[index].img}" alt="">`
})

function HomePage(){
    gsap.set(".slider", {scale: 5})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".Home",
        start: "top top",
        end: "bottom bottom",       
        scrub: 1
    }
})

tl
.to(".Video",{
   "--clip": "0%",
   ease: Power2
},"ani")
.to(".slides-m",{
    scale:1,
   ease: Power2
},"ani")
.to(".lft",{
    xPercent: -10 ,
    stagger: .03,
   ease: Power4
},"b")
.to(".rgt",{
    xPercent: 10 ,
    stagger: .03,
   ease: Power4
},"b")
}

function RealAnimation (){
    gsap.to(".slide", {
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:1
            
        },
        xPercent: -300,
        ease:Power2
    })
}
function TeamAnimation(){
    document.querySelectorAll('.listitem')
.forEach(function(el){
    el.addEventListener('mousemove',function(dets){
        // gsap.utils.mapRange(0,window.innerWidth , -200,200, dets.clientX)
        gsap.to(this.querySelector('.avtar'),{opacity:1,x: gsap.utils.mapRange(0,window.innerWidth , -200,200, dets.clientX),ease:Power4,duration:.5})
    })
    el.addEventListener('mouseleave',function(dets){
        gsap.to(this.querySelector('.avtar'),{opacity:0,ease:Power4,duration:.5})
    })
})
}
function capsuleAnime(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 80%",
            end:"bottom bottom",
            markers:true,
            scrub:1
        },
        y:0,
        ease:Power4
    })
}
function paraAanimation(){
    var clutter = "" ;
    document.querySelector('.TheInfoText')
    .textContent.split("")
    .forEach(function(e){
        if(e === " "){

            clutter+=`<span>&nbsp;</span>`
        }
    clutter +=`<span>${e}</span>`
    })

document.querySelector('.TheInfoText').innerHTML = clutter;
gsap.set(".TheInfoText span", {opacity: .1})
gsap.to(".TheInfoText span",{
    scrollTrigger:{
        trigger:".para",
        start:"top 60%",
        end:"bottom 90%",
        scrub:2,
        
    },
    opacity:1,
    stagger:.03,
    ease:Power4,
})
}
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

function color(){

    document.querySelectorAll('.section')
    .forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            bottom: "bottom 50%",
            markers:false,
            onEnter:function(){
     document.body.setAttribute("theme",e.dataset.color)
            },
            onEnterBack: function(){
                document.body.setAttribute("theme",e.dataset.color)
    
            }
        })
    })
}

TeamAnimation();
HomePage();
RealAnimation();
paraAanimation();
color();

