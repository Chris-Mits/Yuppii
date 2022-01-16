const now = new Date();
const selectedLangFlag = document.querySelector(".selected-lang");
const dropDownItems = document.querySelectorAll(".dropdown-item");
const dropDownMenu = document.querySelector(".dropdown-menu");

// #### CAROUSEL OPTIONS ####
$('#yuppiiShowcaseCarousel').carousel({
	interval: 5000,
	keyboard: true,
	pause: false,
	ride: 'carousel',
	wrap: true,
	touch: true
});

// #### CHANGE FIRST ITEM DATA-INTERVAL BASED ON SCREEN WIDTH ####
if(document.querySelector('#yuppiiShowcaseCarousel')) {
	document.addEventListener('DOMContentLoaded', () => {
		carouselConfigure();
		this.addEventListener('resize', carouselConfigure);
	});
	
	const carouselConfigure = () => {
		const yuppiiCarousel = document.querySelector('#yuppiiShowcaseCarousel');
		const firstCarouselItem = document.querySelector('.carousel-image-0');
		
		if(this.innerWidth > 768) {
			firstCarouselItem.setAttribute('data-interval', 25000);
			yuppiiCarousel.classList.add('carousel-fade');
		} else {
			firstCarouselItem.setAttribute('data-interval', 5000);
			yuppiiCarousel.classList.remove('carousel-fade');
		}
	};
}

// #### BACK TO TOP FUNCTIONALITY ####
document.addEventListener('scroll', () => {
	const backToTopBtn = document.querySelector('.backToTop');
	
	if(window.scrollY > 250) {
		backToTopBtn.style.bottom = '20px';
		backToTopBtn.addEventListener('click', () => {
			this.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		})
	} else {
		backToTopBtn.style.bottom = '-100px';
	}
});

// On page load, check if screen width is less than 768px
// If true, add class dropdown-menu-right to dropdown-meu
window.onload = function() {
	if (window.screen.width < 768) {
		dropDownMenu.classList.add("dropdown-menu-right");
	}
};

window.addEventListener("resize", function() {
	if (window.matchMedia("(max-width: 768px)").matches) {
		dropDownMenu.classList.add("dropdown-menu-right");
  } else {
		dropDownMenu.classList.remove("dropdown-menu-right");
  }
})

dropDownItems.forEach(item => {
	item.addEventListener("click", () => {
		let clickedImgSrc = item.querySelector('.lang').getAttribute("src");
		selectedLangFlag.setAttribute('src', clickedImgSrc);
	})
})

// When modals hide, fade in backToTop button
$("#gamesModal, #partiesModal, #coffeeModal, #tripsModal").on("hide.bs.modal", function() {
	$(".backToTop").fadeIn();
});

// When modals show, fade out backToTop button
$("#gamesModal, #partiesModal, #coffeeModal, #tripsModal").on("show.bs.modal", function() {
	$(".backToTop").fadeOut();
});

// When modal hides, fade in backToTop button & game selection button
$("#gameSelection").on("hide.bs.modal", function() {
	$(".game-selection-btn").fadeIn();
	$(".backToTop").fadeIn();
});

// When modal shows, fade out backToTop button & game selection button
$("#gameSelection").on("show.bs.modal", function() {
	$(".game-selection-btn").fadeOut();
	$(".backToTop").fadeOut();
});


function closeModal() {
	setTimeout(() => {
		$("#gameSelection").modal("hide");
	}, 50);
}

// POPOVERS INITIALIZATION
$('[data-toggle="popover"]').popover();

// GET CURRENT YEAR
document.querySelector('#year').textContent = now.getFullYear();