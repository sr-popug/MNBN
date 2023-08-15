
const tlParallax = gsap.timeline({
    scrollTrigger: {
    trigger: '.header-block',
    start: 'top',
    end: '+1000',
    scrub: true
},})
gsap.registerPlugin(ScrollTrigger)
console.log(1)
tlParallax.add(gsap.to('.under-grid', {
    
    opacity: 0.1,
    y: 400
}))
gsap.to('.layer-back', {
    scrollTrigger: {
        trigger: 'nav',
        start: 'top top',
        end: '+1000',
        scrub: true
    },
    y: -400
})
gsap.to('.layer-middle', {
    scrollTrigger: {
        trigger: 'nav',
        start: 'top top',
        end: '+1000',
        scrub: true
    },
    y: -300
})
gsap.to('.layer-front', {
    scrollTrigger: {
        trigger: 'nav',
        start: 'top top',
        end: '+1000',
        scrub: true
    },
    y: -50
})
let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.number1',
        start: 'top center',
        stagger: 0.1,
        duration: 0.5
    },
})
tl1.from(['.number1', '.over-text1', '.h2-1'], {
    x: -1000,
    stagger: 0.3,
    duration: 0.5
})
tl1.add(gsap.from('.descript1', {
    y: -50,
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    
}))
tl1.add(gsap.from('.read1', {
    y: -50,
    opacity: 0,
    duration: 0.5,
    
}))
tl1.add(gsap.from('.img-info1', {
    x: 200,
    opacity: 0,
    duration: 0.5,
    
}))


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.number2',
        start: 'top center',
        stagger: 0.1,
        duration: 0.5
    },
})
tl2.from(['.number2', '.over-text2', '.h2-2'], {
    x: 1000,
    stagger: 0.3,
    duration: 0.5
})
tl2.add(gsap.from('.descript2', {
    y: 50,
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    
}))
tl2.add(gsap.from('.read2', {
    y: 50,
    opacity: 0,
    duration: 0.5,
    
}))
tl2.add(gsap.from('.img-info2', {
    x: -200,
    opacity: 0,
    duration: 0.5,
    
}))


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.number3',
        start: 'top center',
        stagger: 0.1,
        duration: 0.5
    },
})
tl3.from(['.number3', '.over-text3', '.h2-3'], {
    x: -1000,
    stagger: 0.3,
    duration: 0.5
})
tl3.add(gsap.from('.descript3', {
    y: -50,
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    
}))
tl3.add(gsap.from('.read3', {
    y: -50,
    opacity: 0,
    duration: 0.5,
    
}))
tl3.add(gsap.from('.img-info3', {
    x: 200,
    opacity: 0,
    duration: 0.5,
    
}))



