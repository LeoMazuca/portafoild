gsap.set('.main', {position: "absolute", background:'#fff', width:'100%', top:0,})
gsap.set('.scrollArea', {width:'100%', height:'150vh'})
gsap.timeline({scrollTrigger:{trigger:'.scrollArea', start:'top top', end: '50% 50%', scrub:1 }})
    .fromTo('.sky', {y:-150}, {y:-30}, 0)
    .fromTo('.mediumMountain', {y:0},{y:-500}, 0)
    .fromTo('.cloud', {y:0},{y:-300}, 0)
    .fromTo('.smallMountain', {y:0},{y:-200}, 0)
    .fromTo('.bigMountain', {y:0},{y:-100}, 0)
    .fromTo('.cloud1', {y:50},{y:-800}, 0)
    .fromTo('.cloud3', {y:0},{y:-250}, 0)
    /* .fromTo('.link', {color: "#E8F6EF"}, {color:"#185ADB"}, 0) */
    /* .fromTo('.footer', {background: "transparent"}, {background: "#0A1931"}, 0) */
    .fromTo('.menuToggle', {opacity:0}, {opacity:1}, 0)
    .fromTo('.name', {y:0}, {y:200}, 0)
    .fromTo('.imagen', {opacity:0}, {opacity:1}, 0)
    .fromTo('.logo', {opacity:0}, {opacity:1}, 0)
    /* const fondo = document.getElementById("main");
    fondo */

$('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo: 260, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
/* gsap.fromTo('.web', {y:50}, {y:-100}, 0) */