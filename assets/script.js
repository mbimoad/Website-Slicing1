gsap.from('.top-banner', {
    delay: 1, 
    y: '-100%', 
    opacity: 0, 
})

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('nav-link')) {
        const navlink = document.querySelectorAll('.nav-link');
        navlink.forEach(item => {
            item.classList.remove('active'); 
        })

        e.target.classList.add('active');
    }
})



gsap.from('.hero', {
    scale: 0, 
    opacity: 0, 
    delay: 2,
})

gsap.from('.box', {
    opacity: 0, 
    delay: 2, 
})

gsap.from('header', {
    y:'-100%', 
    ease: "bounce.out",
    duration: 1,
})
$('.rockclimb .card').each((index, item) => {
    item.dataset.aos = "fade-up"; 
    item.dataset.aosDuration = index * 500;
})

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  