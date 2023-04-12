/* This file is customized for blog.html */
function showAllTags(){
	var tag = document.getElementById('tag');
	
	if(tag.style.height == 'auto'){
		tag.style.height = '64px';
	} else {
		tag.style.height = 'auto';
		window.scrollTo(0, 700);
	}
}

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 50,
		},
	},
});