var nav=document.querySelector("#nav1");
var rnav=document.querySelector("#nav2");
var c=document.querySelector(".big");
var b=0;

document.addEventListener("scroll", function () {

        if (window.pageYOffset >= c.offsetTop) {
            rnav.className="rnav-out";
            nav.className="nav-enter";
            b=1;
          }else{
              if(b>0){
                    rnav.className="rnav-enter";
                    nav.className="nav-out";
                }
          }
})       