





var carousel = document.querySelector('.carousel');
var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;
var isAnimating = false;

function showCurrentItem() {
	carouselItems.forEach(function(item) {
		item.classList.remove('active');
	});
	carouselItems[currentIndex].classList.add('active');
}

function carouselNext() {
	if (currentIndex < carouselItems.length - 1 && !isAnimating) {
		isAnimating = true;
		carouselItems[currentIndex].classList.add('slide-out-left');
		currentIndex++;
		carouselItems[currentIndex].classList.add('slide-in-right');
		showCurrentItem();
	}
}

function carouselPrevious() {
	if (currentIndex > 0 && !isAnimating) {
		isAnimating = true;
		carouselItems[currentIndex].classList.add('slide-out-right');
		currentIndex--;
		carouselItems[currentIndex].classList.add('slide-in-left');
		showCurrentItem();
	}
}

carousel.addEventListener('animationend', function() {
	carouselItems.forEach(function(item) {
		item.classList.remove('slide-in-right');
		item.classList.remove('slide-out-right');
		item.classList.remove('slide-in-left');
		item.classList.remove('slide-out-left');
	});
	isAnimating = false;
});


  
