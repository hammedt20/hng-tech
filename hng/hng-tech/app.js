gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline()
tl.from('.header .line2', 1, {
    x: "-100%" ,
    opacity: 0
})
.from('.header .line1', 1.2,{
    y: '-100%'
})
.from('.header .line3', 1, {
    x: '100%',
    opacity: 0
}, '+= .4')
.from('.buildinghead', .6,{
    y: "-100%" ,
    opacity: 0
})
.from('.buildingtext', 1.2,{
    x: '-130%'
})
.from('.buildingimg1', 1,{
    x: '250%'
})
.from('.buildingimg2', 1,{
    x: '250%'
})
.from('.buildingimg3', 1,{
    x: '250%'
})
.from('.buildingimg4', 1,{
    x: '150%'
})
.from('.secondimg', .6,{
    x: '-150%'
})
.from('.secondh3', .6,{
    x: '150%'
})
.from('.secondp', .6,{
    x: '150%'
})