var a = [0, 0, 0, 0, 0, 0, 0];
var c = document.querySelector(".big");
var Bcom = document.querySelectorAll(".com1");
var Scom = document.querySelectorAll(".com2");
var nav_lis = document.querySelectorAll(".side-nav-slide")

document.addEventListener("scroll", function () {
	for (let i = 0; i < Bcom.length; i++) {
		if (window.pageYOffset >= c.offsetTop - 600 + i * 670) {
			a[i] = 1;
			if (i % 2 == 1) {
				Bcom[i].className = "slide1-left";
				Scom[i].className = "slide2-left";

			} else {
				Bcom[i].className = "slide1-right";
				Scom[i].className = "slide2-right";

			}
		}

		//侧边栏随页面滚动变色
		if (window.pageYOffset >= 631 * i - 180) {
			for (let j = 0; j < nav_lis.length; j++) {
				nav_lis[j].className = 'side-nav-slide'
			}
			nav_lis[i].className = 'side-nav-slide side-nav-select'
		}


		if (window.pageYOffset < c.offsetTop - 600 + i * 670 && window.pageYOffset >= c.offsetTop - 1050 + i * 670 && a[i] > 0) {
			a[i] = 0;
			if (i % 2 == 1) {
				setTimeout(function () {
					if (window.pageYOffset < c.offsetTop - 600 + i * 670) {
						Bcom[i].className = "slide1-rightenter";
						Scom[i].className = "slide2-rightenter";
					}
				}, 1000)
			} else {
				setTimeout(function () {
					if (window.pageYOffset < c.offsetTop - 600 + i * 670) {
						Bcom[i].className = "slide1-leftenter";
						Scom[i].className = "slide2-leftenter";
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
			top: 631 * i + 113,
			behavior: "smooth"
		});
		for (let j = 0; j < nav_lis.length; j++) {
			nav_lis[j].className = 'side-nav-slide'
		}
		this.className = 'side-nav-slide side-nav-select'
	})
}

