// TRANSLATOR MODULE
import Translator from "./i18n/translator.js";
// Translator Object Initialization
const translator = new Translator();
// Set html lang attr
translator.toggleHtmlLangAttr();
// Translator load lang
translator.load();

// WEATHER MODULE
import Storage from "./weather/storage.js";
import Weather from "./weather/weather.js";
import UI from "./weather/ui.js";
// Storage Object Initialization
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Weather Object Initialization
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// UI Object Initialization
const ui = new UI();

// FORM VALIDATION MODULE
import * as validation from "./form_validation.js";

// PHOTOSWIPE MODULE
import PhotoSwipeLightbox from "./photoswipe/photoswipe-lightbox.esm.js"

const closeBtnSVGString = `
	<svg aria-hidden="true" class="pswp__icn" width="30" height="30" viewBox="0 0 30 30" fill="none">
		<path d="M15.0103 0C11.0017 0 7.23316 1.56027 4.39874 4.39336C-1.45255 10.2418 -1.45255 19.758 4.39856 25.6065C7.23298 28.4397 11.0017 30 15.0103 30C19.0187 30 22.7874 28.4397 25.6218 25.6065C31.4731 19.758 31.4731 10.2418 25.6218 4.39336C22.7874 1.56027 19.0187 0 15.0103 0ZM21.7631 21.7495C21.4966 22.0158 21.1475 22.149 20.7983 22.149C20.4493 22.149 20.1 22.0158 19.8338 21.7495L15.0103 16.9285L10.1868 21.7496C9.92033 22.0159 9.57126 22.1491 9.2221 22.1491C8.87302 22.1491 8.52377 22.0159 8.25755 21.7496C7.72467 21.2172 7.72467 20.3537 8.25755 19.8212L13.0809 15L8.25746 10.1788C7.72458 9.64636 7.72458 8.78291 8.25746 8.25036C8.79017 7.71791 9.65403 7.71791 10.1868 8.25036L15.0103 13.0715L19.8335 8.25036C20.3662 7.71791 21.2301 7.71791 21.7629 8.25036C22.2958 8.78282 22.2958 9.64627 21.7629 10.1788L16.9396 15L21.7631 19.8211C22.2959 20.3536 22.2959 21.2171 21.7631 21.7495Z" fill="#F2788F"/>
	</svg>`;
	
const zoomBtnSVGString = `
	<svg aria-hidden="true" class="pswp__icn" width="30" height="30" viewBox="0 0 30 30" fill="none">
		<path d="M13.9416 9.61963C11.6742 9.61963 9.83594 11.4585 9.83594 13.7259C9.83594 15.9937 11.6742 17.8321 13.9416 17.8321C16.2094 17.8321 18.0475 15.9938 18.0475 13.7259C18.0476 11.4585 16.2096 9.61963 13.9416 9.61963ZM15.9257 14.6975H14.7197V15.9035C14.7197 16.3333 14.3714 16.6816 13.9416 16.6816C13.5118 16.6816 13.1635 16.3333 13.1635 15.9035V14.6975H11.9575C11.5276 14.6975 11.1793 14.3492 11.1793 13.9194C11.1793 13.4896 11.5276 13.1413 11.9575 13.1413H13.1635V11.9349C13.1635 11.5051 13.5118 11.1568 13.9416 11.1568C14.3714 11.1568 14.7197 11.5051 14.7197 11.9349V13.1413H15.9257C16.3555 13.1413 16.7038 13.4896 16.7038 13.9194C16.7038 14.3492 16.3557 14.6975 15.9257 14.6975Z" fill="#72CBC2"/>
		<path d="M15.0007 0C6.71662 0 0.000976562 6.71584 0.000976562 14.9996C0.000976562 23.2834 6.71662 30 15.0006 30C23.2845 30 30.0007 23.2837 30.0007 14.9996C30.0007 6.71555 23.2846 0 15.0007 0ZM22.5448 22.1255C22.3077 22.3632 21.9968 22.4817 21.6858 22.4817C21.3748 22.4817 21.0641 22.3632 20.8265 22.1255L17.412 18.7108C16.4283 19.3971 15.2326 19.8004 13.9423 19.8004C10.5874 19.8004 7.86803 17.0808 7.86803 13.726C7.86803 10.3712 10.5874 7.65175 13.9423 7.65175C17.2971 7.65175 20.0167 10.3712 20.0167 13.7257C20.0167 14.9112 19.6759 16.0166 19.0887 16.9513L22.5447 20.4075C23.0195 20.8818 23.0195 21.6513 22.5448 22.1255Z" fill="#72CBC2"/>
	</svg>`;
	
const homeOptions = {
	closeSVG: closeBtnSVGString,
	zoomSVG: zoomBtnSVGString,
	gallery: '#homeGallery',
	children: 'a',
	pswpModule: '/js/photoswipe/photoswipe.esm.js',
	arrowKeys: true,
	loop: false
};

const parkOptions = {
	closeSVG: closeBtnSVGString,
	zoomSVG: zoomBtnSVGString,
	gallery: '#singles',
	children: 'a',
	pswpModule: '/js/photoswipe/photoswipe.esm.js'
};

const gamesOptions = {
	closeSVG: closeBtnSVGString,
	zoomSVG: zoomBtnSVGString,
	gallery: '.tab-pane',
	children: 'a',
	pswpModule: '/js/photoswipe/photoswipe.esm.js',
	arrowKeys: true,
	loop: false
};

const servicesOptions = {
	closeSVG: closeBtnSVGString,
	zoomSVG: zoomBtnSVGString,
	gallery: '.services',
	children: 'a',
	pswpModule: '/js/photoswipe/photoswipe.esm.js',
	arrowKeys: true,
	loop: false
};


const homeLightbox = new PhotoSwipeLightbox(homeOptions);
const parkLightbox = new PhotoSwipeLightbox(parkOptions);
const gamesLightbox = new PhotoSwipeLightbox(gamesOptions);
const servicesLightbox = new PhotoSwipeLightbox(servicesOptions);

homeLightbox.init();
parkLightbox.init();
gamesLightbox.init();
servicesLightbox.init();

// SWIPER MODULE
import Swiper from "./swiper/swiper-bundle-8-0-0.esm.browser.min.js";

const swiperDesktop = new Swiper('.swiper', {
	init: false,
	autoplay: {
		delay: 5000
	},
	a11y: {
		enabled: false
	},
	slidesPerView: 2,
	speed: 500,
	centeredSlides: true,
	effect: "coverflow",
	coverflowEffect: {
		rotate: 50,
		stretch: -100,
		depth: 100,
		modifier: 1,
		slideShadows: false,
	}
});

const swiperMobile = new Swiper('.swiper', {
	init: false,
	navigation: {
		nextEl: '.next-card',
		prevEl: '.prev-card'
	},
	autoplay: {
		delay: 8000
	},
	a11y: {
		enabled: false
	},
	speed: 500,
	effect: "flip",
	flipEffect: {
		limitRotation: true,
		slideShadows: true
	}
});

document.documentElement.clientWidth > 768 
	? swiperDesktop.init() 
	: swiperMobile.init();

// GLOBALS
const now = new Date();
const defaultLangIcon = document.querySelector(".default-lang");
const dropDownMenu = document.querySelector(".dropdown-menu");
const dropDownItems = document.querySelectorAll(".dropdown-item");
const pills = document.querySelectorAll('[data-toggle="pill"]');

// DOM Load Events
document.addEventListener('DOMContentLoaded', () => {
	// Set default lang icon on page load based on navigator results
	const htmlLang = document.documentElement.lang;
	defaultLangIcon.setAttribute('src', `./images/content/svg_icons/lang/${htmlLang}.svg`);
	// Get weather on DOM Load
	weather.getWeather().then(results => ui.paint(results));
});

// Change default lang icon
dropDownMenu.addEventListener('click', e => {
	const imgSrc = 
		e.target.className.includes('el-outer') || e.target.className.includes('en-outer')
		? e.target.querySelector('.lang').getAttribute('src')
		: e.target.className.includes('el') || e.target.className.includes('en')
		? e.target.parentElement.querySelector('.lang').getAttribute('src')
		: defaultLangIcon.getAttribute('src');
	
	defaultLangIcon.setAttribute('src', imgSrc);
	
	// Translate page and toggle html lang attr
	imgSrc.includes('el') ? translator.load('el') : translator.load('en');
	translator.toggleHtmlLangAttr();
	
	// Init new weather instance and repaint weather ui
	const repaint = new Weather(weatherLocation.city, weatherLocation.country);
	repaint.getWeather().then(results => ui.paint(results));
});

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
		window.addEventListener('resize', carouselConfigure);
	});
	
	const carouselConfigure = () => {
		const yuppiiCarousel = document.querySelector('#yuppiiShowcaseCarousel');
		const firstCarouselItem = document.querySelector('.carousel-image-0');
		
		if(window.innerWidth > 768) {
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
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		})
	} else {
		backToTopBtn.style.bottom = '-100px';
	}
});

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

// Mits popover options
const mitsOptions = {
	animation: true,
	placement: 'auto',
	delay: 0,
	offset: -68,
	trigger: 'focus',
	customClass: 'mits',
	sanitize: true,
	html: true,
	template: `
		<div class='popover' role='tooltip'>
			<div class='popover-header'></div>
			<div class='popover-body'></div>
			<div class='arrow'></div>
		</div>
	`,
	title: `
		<img class='pop-img' src='images/mits.webp' alt='Χρήστος Μητσιάρης' />
		<h4 class='pop-title'>
			Χρήστος Μητσιάρης
		</h4>
	`,
	content: `
		<p class='pop-email'>
			<a href='mailto:chrismits88@gmail.com' target='_blank'>
				<span><i class='fas fa-at'></i></span>chrismits88@gmail.com
			</a>
		</p>
		<p class='pop-phone'>
			<a href='tel:+306973993703'>
				<span><i class='fas fa-mobile-alt'></i></span>+306973993703
			</a>
		</p>
	`
};

// Mokalis popover options
const mokalisOptions = {
	animation: true,
	placement: 'top',
	trigger: 'focus',
	offset: -40,
	customClass: 'mokalis',
	sanitize: true,
	html: true,
	template: `
		<div class='popover' role='tooltip'>
			<div class='popover-header'></div>
			<div class='popover-body'></div>
			<div class='arrow'></div>
		</div>
	`,
	title: `
		<img class='pop-img' src='images/mokalis.webp' alt='Γιώργος Μόκαλης' />
		<h4 class='pop-title'>
			Γιώργος Μόκαλης
		</h4>
	`,
	content: `
		<p class='pop-phone'>
			<a href='tel:+306973433980'>
				<span><i class='fas fa-mobile-alt'></i></span>+306973993703
			</a>
		</p>
	`
};

// POPOVER INIT
$('#mits-popover').popover(mitsOptions);
$('#mokalis-popover').popover(mokalisOptions);

// Close game selection menu on game click
pills.forEach(pill => {
	pill.addEventListener('click', () => {
		setTimeout(() => $("#gameSelection").modal("hide"), 100);
	})
})

// GET CURRENT YEAR
document.querySelector('#year').textContent = now.getFullYear();