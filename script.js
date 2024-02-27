function loadingAnimation(){
    var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.2 ,
    duration:0.6,
    delay:0.5
 })
 tl.from('#line1-part1,.line h2',{
    opacity:0,
    onStart: function(){
        var h5timmer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function(){
           if(grow<100){
            grow++
            h5timmer.innerHTML = grow
           }
           else{
            h5timmer.innerHTML = grow
           }
        },35)
    }
 })
tl.to('#loader',{
    opacity:0,
    duration:0.6,
    delay:4,
    
})
tl.to('#loader',{
    display:"none"
})
tl.from('#page1',{
    y:1600,
    duration:0.6,
    delay:0.2,
    opacity:0,

})

tl.from('#nav',{
   opacity:0
    
})
tl.from('.heading h1',{
    y:150,
    stagger:0.2,
    duration:0.6,
    
})
}

loadingAnimation()

