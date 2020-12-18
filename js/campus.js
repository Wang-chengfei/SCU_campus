var size;
changeMargin();
//监听浏览器宽度的改变
window.onresize = function () {
	changeMargin();
};
function changeMargin() {

	//获取网页可见区域宽度
	var docWidth = document.body.clientWidth;
	// size = parseInt(docWidth / 100) * 1.095
	size = docWidth / 95
}

var c = document.querySelector(".big");
var Bcom = document.querySelectorAll(".com1");
var Scom = document.querySelectorAll(".com2");
var nav_lis = document.querySelectorAll(".side-nav-slide")

var flag = [0, 0, 0, 0, 0]
document.addEventListener("scroll", function () {
	for (let i = 0; i < Bcom.length; i++) {
		//滑块滑出
		if (window.pageYOffset >= c.offsetTop - 590 / 16 * size + i * 595 / 16 * size) {
			if (i % 2 == 1) {
				Bcom[i].className = "slide1-left";
				Scom[i].className = "slide2-left";
				setTimeout(function () {
					if (Bcom[i].className == "slide1-left")
						flag[i] = 1
				}, 1000)

			} else {
				Bcom[i].className = "slide1-right";
				Scom[i].className = "slide2-right";
				setTimeout(function () {
					if (Bcom[i].className == "slide1-right")
						flag[i] = 1
				}, 1000)
			}
		}

		//侧边栏随页面滚动变色
		if (window.pageYOffset >= 566 / 16 * size * i - 180 / 16 * size) {
			for (let j = 0; j < nav_lis.length; j++) {
				nav_lis[j].className = 'side-nav-slide'
			}
			nav_lis[i].className = 'side-nav-slide side-nav-select'
		}

		//滑块隐藏
		if (window.pageYOffset < c.offsetTop - 590 / 16 * size + i * 595 / 16 * size && window.pageYOffset >= c.offsetTop - 1050 / 16 * size + i * 595 / 16 * size) {
			if (flag[i]) {
				flag[i] = 0
				if (i % 2 == 1) {
					if (window.pageYOffset < c.offsetTop - 590 / 16 * size + i * 595 / 16 * size) {
						Bcom[i].className = "slide1-rightenter";
						Scom[i].className = "slide2-rightenter";
					}

				} else {
					if (window.pageYOffset < c.offsetTop - 590 / 16 * size + i * 595 / 16 * size) {
						Bcom[i].className = "slide1-leftenter";
						Scom[i].className = "slide2-leftenter";
					}

				}
			}
			else {
				setTimeout(function () {
					if (flag[i]) {
						flag[i] = 0
						if (i % 2 == 1) {
							if (window.pageYOffset < c.offsetTop - 590 / 16 * size + i * 595 / 16 * size) {
								Bcom[i].className = "slide1-rightenter";
								Scom[i].className = "slide2-rightenter";
							}

						} else {
							if (window.pageYOffset < c.offsetTop - 590 / 16 * size + i * 595 / 16 * size) {
								Bcom[i].className = "slide1-leftenter";
								Scom[i].className = "slide2-leftenter";
							}

						}
					}
				}, 1000)
			}
		}
	}
})


//侧边导航栏点击事件
for (let i = 0; i < nav_lis.length; i++) {
	nav_lis[i].addEventListener("click", function () {
		window.scrollTo({
			top: 566 / 16 * size * i + 100 / 16 * size,
			behavior: "smooth"
		});
		for (let j = 0; j < nav_lis.length; j++) {
			nav_lis[j].className = 'side-nav-slide'
		}
		this.className = 'side-nav-slide side-nav-select'
	})
}

