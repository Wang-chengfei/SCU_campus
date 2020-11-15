var nav = document.querySelector("#nav1");
var rnav = document.querySelector("#nav2");
var c = document.querySelector(".big");
var b = 0;

document.addEventListener("scroll", function () {

    if (window.pageYOffset > 0) {
        rnav.className = "rnav-out";
        nav.className = "nav-enter";
        b = 1;
    } else {
        if (b > 0) {
            rnav.className = "rnav-enter";
            nav.className = "nav-out";
        }
    }
})

var bigBox = document.querySelector(".bigBox")
function scoll(e) {
    var temp = bigBox.className
    var top = window.pageYOffset
    if (top > 0) {
        bigBox.className = "bigBox up"
    }
    if (top == 0) {
        bigBox.className = "bigBox dowm"
    }
    if (temp != bigBox.className) {
        document.body.style.overflowY = 'hidden'
        setTimeout("note()", 800)
    }
}

function note() {
    document.body.style.overflowY = 'visible'
}

document.addEventListener('scroll', scoll)