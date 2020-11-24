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
var likesNumber = []
var like_change = document.querySelectorAll(".like_img")
var like_number = document.querySelectorAll(".like_number")
var herf = window.location.href.split("/")
herf = herf[herf.length - 1].split(".")[0]
var partId
if (herf == 'jiangan') partId = "1"
else if (herf == 'wangjiang') partId = "2"
else if (herf == 'huaxi') partId = "3"
else if (herf == 'history') partId = "4"
else partId = "5"


//获取点赞情况
axios.post('http://muzi.fun:8765/campus/like/getLikeList', {
    partId: partId
}).then(res => {
    likesNumber = res.data
    for (let i = 0; i < like_number.length; i++) {
        if (localStorage.getItem(herf + i) && localStorage.getItem(herf + i) != 0) {
            like_change[i].src = 'http://wcfun.top/images/aixin1.png'
        }
        like_number[i].innerHTML = likesNumber[i].likeNumber
    }
}).catch((error) => {
    console.log('获取数据失败', error);
});


//更改是否点赞
for (let i = 0; i < like_change.length; i++) {
    like_change[i].addEventListener('click', function () {
        //未点赞
        if (this.src == 'http://wcfun.top/images/aixin0.png') {
            this.src = 'http://wcfun.top/images/aixin1.png'
            localStorage.setItem(herf + i, 1)
            this.nextElementSibling.children[0].innerHTML = Number(this.nextElementSibling.children[0].innerHTML) + 1
            likesNumber[i].likeNumber++
            axios.post('http://muzi.fun:8765/campus/like/update', {
                id: likesNumber[i].id,
                likeNumber: likesNumber[i].likeNumber
            }).catch((error) => {
                console.log('获取数据失败', error);
            });
        }
        //已点赞
        else {
            this.src = 'http://wcfun.top/images/aixin0.png'
            localStorage.setItem(herf + i, 0)
            this.nextElementSibling.children[0].innerHTML = Number(this.nextElementSibling.children[0].innerHTML) - 1
            likesNumber[i].likeNumber--
            axios.post('http://muzi.fun:8765/campus/like/update', {
                id: likesNumber[i].id,
                likeNumber: likesNumber[i].likeNumber
            }).catch((error) => {
                console.log('获取数据失败', error);
            });
        }
    })
}

//评论
//去往评论区
var comment = document.querySelectorAll('.comment')
var spot = document.querySelectorAll('.spot')
var discuss = document.querySelectorAll('.discuss')
var return_back = document.querySelectorAll('.return-back')
for (let i = 0; i < comment.length; i++) {
    comment[i].addEventListener("click", function () {
        spot[i].className = 'spot comeout'
        discuss[i].className = 'discuss comeup'
    })
}

//离开评论区
for (let i = 0; i < return_back.length; i++) {
    return_back[i].addEventListener("click", function () {
        spot[i].className = 'spot comeup'
        discuss[i].className = 'discuss comeout'
    })
}


//获取评论数据并加载评论
var comments_list = []
var discuss_container = document.querySelectorAll(".discuss-container")
for (let i = 0; i < comment.length; i++) {
    axios.post('http://muzi.fun:8765/campus/comment/getComments', {
        partId: partId,
        subPartIndex: i + 1
    }).then(res => {
        comments_list[i] = res.data
        for (let j = 0; j < comments_list[i].length; j++) {
            let one_discuss = document.createElement("div")
            let time = document.createElement("div")
            let wenzi = document.createElement("div")
            one_discuss.className = 'one-discuss'
            time.className = 'time'
            time.innerHTML = dataFormat(Number(comments_list[i][j].commentDate))
            wenzi.className = 'wenzi'
            wenzi.innerHTML = comments_list[i][j].commentString
            one_discuss.appendChild(time)
            one_discuss.appendChild(wenzi)
            discuss_container[i].appendChild(one_discuss)
        }
    })
}

//发表评论
var bnt = document.querySelectorAll(".bnt")
var textarea = document.querySelectorAll(".publish textarea")
for (let i = 0; i < bnt.length; i++) {
    bnt[i].addEventListener("click", function () {
        let text = textarea[i].value
        if (text != '') {
            textarea[i].value = ''
            let curTime = new Date().getTime()
            let one_discuss = document.createElement("div")
            let time = document.createElement("div")
            let wenzi = document.createElement("div")
            one_discuss.className = 'one-discuss'
            time.className = 'time'
            time.innerHTML = dataFormat(curTime)
            wenzi.className = 'wenzi'
            wenzi.innerHTML = text
            one_discuss.appendChild(time)
            one_discuss.appendChild(wenzi)
            discuss_container[i].appendChild(one_discuss)
            axios.post('http://muzi.fun:8765/campus/comment/insert', {
                partId: partId,
                subPartIndex: i + 1,
                commentDate: curTime,
                commentString: text
            })
        }
    })
}

//由时间戳转换时间
function dataFormat(num) {
    let dd = new Date(num);
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1;
    let d = dd.getDate();
    let h = dd.getHours();
    let i = dd.getMinutes();
    let s = dd.getSeconds();
    m = m < 10 ? '0' + m : m;
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    i = i < 10 ? '0' + i : i;
    s = s < 10 ? '0' + s : s;
    return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s
}


//页面刷新后返回顶部
window.onbeforeunload = function () {
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
}

//返回顶部
var footer_img = document.querySelector(".return-top-img img")
var footer_nav = document.querySelector(".return-top")
footer_nav.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
footer_nav.addEventListener('mouseover', function () {
    footer_img.src = './img/jian1_white.png'
})
footer_nav.addEventListener('mouseout', function () {
    footer_img.src = './img/jian1_red.png'
})

//点击向下
var go_down = document.querySelector(".jian")
go_down.addEventListener("click", function () {
    window.scrollTo({
        top: 113,
        behavior: "smooth"
    });
})

go_down.addEventListener("mouseover", function () {
    go_down.children[0].src = './img/jian_white.png'
})

go_down.addEventListener("mouseout", function () {
    go_down.children[0].src = './img/jian_red.png'
})


//音乐播放
var music_list = ['./music/school_music.mp3', './music/SCU_student.mp3', './music/chengdu.m4a']
var img_list = ['./music/music_logo.jpg', './music/music_logo1.png', './music/music_logo2.jpg']
var music_photo = document.querySelectorAll(".music-photo")
var music_now = 0
var music = document.querySelector(".music audio")
var music_control = document.querySelectorAll(".music-control")
var music_prev = document.querySelectorAll(".music-prev")
var music_next = document.querySelectorAll(".music-next")
var music_flag = 1
//播放与暂停
for (let i = 0; i < 2; i++) {
    music_control[i].addEventListener("click", function () {
        if (music_flag) {
            music_flag = 0
            music_control[0].children[0].src = './music/zanting.png'
            music_control[1].children[0].src = './music/zanting.png'
            music_photo[0].className = 'music-photo rotating'
            music_photo[1].className = 'music-photo rotating'
            music_photo[0].style.animationPlayState = 'running'
            music_photo[1].style.animationPlayState = 'running'
            music.play()
        }
        else {
            music_flag = 1
            music_control[0].children[0].src = './music/bofang.png'
            music_control[1].children[0].src = './music/bofang.png'
            music_photo[0].style.animationPlayState = 'paused'
            music_photo[1].style.animationPlayState = 'paused'
            music.pause()
        }
    })
}
//上一首歌
for (let i = 0; i < 2; i++) {
    music_prev[i].addEventListener("click", function () {
        let flag = 1
        if (music.paused) flag = 0
        music_now--
        if (music_now == -1) music_now = music_list.length - 1
        music.src = music_list[music_now]
        music_photo[0].children[0].src = img_list[music_now]
        music_photo[1].children[0].src = img_list[music_now]
        music_photo[0].className = 'music-photo'
        music_photo[1].className = 'music-photo'
        if (flag) {
            music.play()
            setTimeout(function () {
                music_photo[0].className = 'music-photo rotating'
                music_photo[1].className = 'music-photo rotating'
            }, 1500)
        }
    })
}
//下一首歌
for (let i = 0; i < 2; i++) {
    music_next[i].addEventListener("click", function () {
        let flag = 1
        if (music.paused) flag = 0
        music_now++
        if (music_now == music_list.length) music_now = 0
        music.src = music_list[music_now]
        music_photo[0].children[0].src = img_list[music_now]
        music_photo[1].children[0].src = img_list[music_now]
        music_photo[0].className = 'music-photo'
        music_photo[1].className = 'music-photo'
        if (flag) {
            music.play()
            setTimeout(function () {
                music_photo[0].className = 'music-photo rotating'
                music_photo[1].className = 'music-photo rotating'
            }, 1500)
        }
    })
}
//自动播放下一首歌曲

music.addEventListener("ended", function () {
    music_now++
    if (music_now == music_list.length) music_now = 0
    music.src = music_list[music_now]
    music.play()
    music_photo[0].children[0].src = img_list[music_now]
    music_photo[1].children[0].src = img_list[music_now]
    music_photo[0].className = 'music-photo'
    music_photo[1].className = 'music-photo'
    setTimeout(function () {
        music_photo[0].className = 'music-photo rotating'
        music_photo[1].className = 'music-photo rotating'
    }, 1500)
})
