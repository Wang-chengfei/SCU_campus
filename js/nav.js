var nav = document.querySelector("#nav1");
var rnav = document.querySelector("#nav2");
var c = document.querySelector(".big");
var b = 0;
var d = 0;
var side_nav = document.querySelector(".side-nav")

document.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        rnav.className = "rnav-out";
        nav.className = "nav-enter";
        b = 1;
        if (d == 0) {
            d = 1
            side_nav.className = "side-nav side-nav-enter"
            setTimeout(function () {
                side_nav.className = "side-nav side-nav-right"
            }, 800)
        }
    } else {
        if (b > 0) {
            rnav.className = "rnav-enter";
            nav.className = "nav-out";
            d = 0
            side_nav.className = "side-nav side-nav-right side-nav-leave"
            setTimeout(function () {
                side_nav.className = "side-nav"
            }, 800)
        }
    }
})


/*向上滑动效果*/
var bigBox = document.querySelector(".bigBox")
function scoll() {
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
        setTimeout(function () {
            document.body.style.overflowY = 'visible'
        }, 800)
    }
}


document.addEventListener('scroll', scoll)


/*点赞*/
var like_change = document.querySelectorAll(".like_img")
var like_number = document.querySelectorAll(".like_number")
var isLike = []
var herf = window.location.href.split("/")
herf = herf[herf.length - 1].split(".")[0]
for (let i = 0; i < like_number.length; i++) {
    if (localStorage.getItem(herf + i)) {
        isLike[i] = localStorage.getItem(herf + i)
    }
    else {
        isLike[i] = 0
    }
    if (isLike[i]) {
        like_number[i].innerHTML = 1
        like_change[i].src = 'http://wcfun.top/images/aixin1.png'
    }
}

for (let i = 0; i < like_change.length; i++) {
    like_change[i].addEventListener('click', function () {
        if (this.src == 'http://wcfun.top/images/aixin0.png') {
            this.src = 'http://wcfun.top/images/aixin1.png'
            localStorage.setItem(herf + i, 1)
            this.nextElementSibling.children[0].innerHTML = Number(this.nextElementSibling.children[0].innerHTML) + 1
        }
        else {
            this.src = 'http://wcfun.top/images/aixin0.png'
            localStorage.setItem(herf + i, 0)
            this.nextElementSibling.children[0].innerHTML = Number(this.nextElementSibling.children[0].innerHTML) - 1
        }
    })
}

//页面刷新后返回顶部
window.onbeforeunload = function () {
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
}

//返回顶部
var footer_nav = document.querySelector(".return-top")
footer_nav.addEventListener("click", function () {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });	
})


