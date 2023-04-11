function syncNewsBackgroundImg(){
	var bgNewsImg = document.getElementById('testimonials');

	var iconNewsImgs = document.getElementsByClassName('testimonial-img');
	
	var parentIconNewImg; 
	
		
	for(var i = 0; i < iconNewsImgs.length; i++){
		parentIconNewImg = iconNewsImgs[i];
		while (!(parentIconNewImg.className.includes('swiper-slide'))){
			parentIconNewImg = parentIconNewImg.parentElement;
		}
		if(parentIconNewImg.className.includes('swiper-slide-active') != false){
			bgNewsImg.style.background = "url(" + iconNewsImgs[i].src + ") fixed center center";
			bgNewsImg.style.backgroundSize = "cover";
		}
	}
}

function syncHeroBgToCarousImg(){
	var bgCarousImg = document.getElementById('hero');

	var carousItems = document.getElementsByClassName('carousel-item');
	
	var childCarousItem;
	
	
		
	for(var i = 0; i < carousItems.length; i++){
		childCarousItem = carousItems[i];
		if(childCarousItem.className.includes('active') == true){
			while (!(childCarousItem.className.includes('carousel-img'))){
				childCarousItem = childCarousItem.childNodes[1];
			}
			bgCarousImg.style.background = "url(" + childCarousItem.src + ") fixed center center";
			bgCarousImg.style.backgroundSize = "cover";
		}
		
		
	}
}

setInterval(syncNewsBackgroundImg, 500);
//setInterval(syncHeroBgToCarousImg, 500);

//=====================================================
/*
var i = 2;
var activeSlide = document.getElementsByClassName('swiper-slide-active');
console.log(iconNewsImgs[i].parentElement.parentElement.parentElement.className + "{" + i + "}");
setInterval(function(){
	bgNewsImg.style.background = "url(assets/img/testimonials/news-" + i + ".jpg) fixed center center";
	if(i<=3){
		i++;
	} else{
		i = 1;
	}
}, 5000);
syncNewsBackgroundImg();
*/

