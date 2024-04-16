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
let imgelem = document.querySelectorAll('.imgdiv')
imgelem.forEach((link ,index)=> {
    link.innerHTML = `<img class="w-full h-full object-cover" src="${allImageLinks[index].img}"alt="">`;
})


function HomePage(){
    gsap.set(".slides-m", {scale:3})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".Home",
        start: "top top",
        end: "bottom bottom",       
        scrub: 4
    },
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

HomePage();

gsap.to(".slide",{
    scrollTrigger:{
     trigger:".slides",
     start:"top top",
     end:"bottom bottom",
     makers:true,

    },
    xPercent: -300,
    ease:Power2
})


