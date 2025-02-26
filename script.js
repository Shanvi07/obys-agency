function loadinganimation(){
  
var tl=gsap.timeline();
tl.from(".line h1",{
  y:150,
  stragger:0.25,
  duration:0.6,
  delay:0.8

})


tl.from("#line1-part1",{
  opacity:0,
  onStart: function(){
    var h5= document.querySelector('#line1-part1 h5');
    var grow=0;
    setInterval(function(){
     if(grow<=100){
       h5.innerHTML=grow++;
     }
     else{
        grow=100;
        console.log(grow);
     }
    },33)
  }
})
  
tl.to('.line h2',{
  animationName:'anime',
  opacity:1
})

tl.to('#loader',{
    opacity:0,
    duration:0,
    delay: 0
})
tl.from('#page1',{
  delay:0.2,
  y:1600,
  duration:0.6,
  opacity:0,
  ease: Power4
})

tl.to('#loader',{
  display:'none'
})
tl.from('#nav',{
 opacity:0
})
tl.from('#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1',{
  y:120,
  stagger:0.2
})

}

function cursorAnima(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
      left:dets.x,
       top:dets.y,
    });
    
});
Shery.makeMagnet("#nav-part2 h4");
}

loadinganimation();
cursorAnima(); 
