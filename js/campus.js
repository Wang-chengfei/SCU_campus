var a=0;
var c=document.querySelector(".big");
var Bcom=document.querySelectorAll(".com1");
var Scom=document.querySelectorAll(".com2");
var belowimg=document.querySelector(".belowimg");

document.addEventListener("scroll", function () {
for(var i=0;i<Bcom.length;i++){
    if (window.pageYOffset >= c.offsetTop-600+i*650) {
      a=1;
      if(i%2==1){
        Bcom[i].className="slide1-left";
        Scom[i].className="slide2-left";
      }else{
        Bcom[i].className="slide1-right";
        Scom[i].className="slide2-right";
      }
    } 
    
    
    if (window.pageYOffset < c.offsetTop-600+i*650 && window.pageYOffset>=c.offsetTop-1050+i*650 && a>0) {
      if(i%2==1){
        Bcom[i].className="slide1-rightenter";
      Scom[i].className="slide2-rightenter";
      }else{
        Bcom[i].className="slide1-leftenter";
        Scom[i].className="slide2-leftenter";
      }
    }       
  }
})

belowimg.addEventListener("click",function(){
    location.href="./index.html"
})
