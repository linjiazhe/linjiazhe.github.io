gsap.registerPlugin(ScrollTrigger);

gsap.to("sqaure", {
    x: 1000,
    duration: 8,
    ScrollTrigger: {
        trigger: ".square",
        start: "top 60%",
        end: "top 40%"
        toggleActions:"restart pause resume complete",
      
    }

})





