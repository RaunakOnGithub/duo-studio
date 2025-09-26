function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

init()


// cursor
let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");
main.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x+20+"px";
  cursor.style.top = dets.y+20+"px";
});

// let videomove = document.querySelector("video");
// main.addEventListener("mouseenter",function(){
  
// })

// let videoleave = doucment.querySelector("video");
// main.addEventListener("mouseleave",function(){

// });


var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to(".page1 video", {
  width: "90%"
}, "anim")



// second timeline 
var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 3
  }
})
tl2.to(".main", {
  backgroundColor: "#fff",
})


var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -280%",
      end: "top -300%",
      scrub: 3
  }
})

tl3.to(".main",{
  backgroundColor:"#0F0D0D"
})



var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "350px"
        cursor.style.height = "300px"
        cursor.style.borderRadius = "15px"
        cursor.style.backgroundImage = `url(${att})`
        
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
    });
});

let page5 = document.querySelector(".footer")
page5.addEventListener("mouseenter",function(){
  cursor.style.backgroundColor = "black";

})

page5.addEventListener("mouseleave",function(){
  cursor.style.backgroundColor = "#EDBFFF";
  
})


page5.addEventListener("mouseleave",function(){
  cursor.style.backgroundColor = "#EDBFFF";
  
})


// Parallax effect for page 3 elements
gsap.utils.toArray(".page3 img, .page3 video").forEach(element => {
  gsap.to(element, {
      yPercent: -30, // Moves the element up as you scroll down
      ease: "none",
      scrollTrigger: {
          trigger: element,
          scroller: ".main", // This is crucial for Locomotive Scroll
          start: "top bottom", // Animation starts when the top of the element hits the bottom of the viewport
          end: "bottom top", // Animation ends when the bottom of the element hits the top of the viewport
          scrub: true // This makes the animation follow the scroll position
      }
  });
});


// Get the page3 element
const page3 = document.querySelecto(".page3-part1");

// Event for entering page3
page3.addEventListener("mouseenter", function() {
    cursor.classList.add("cursor-discover");
    cursor.innerHTML = "discover";
});

// Event for leaving page3
page3.addEventListener("mouseleave", function() {
    cursor.classList.remove("cursor-discover");
    cursor.innerHTML = ""; // Remove the text
});