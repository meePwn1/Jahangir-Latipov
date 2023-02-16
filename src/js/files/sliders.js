/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Scrollbar, Navigation, Parallax, Autoplay } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.get-page__body') && window.innerWidth <= 991.98) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const sliderGet = new Swiper('.get-page__body', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			// loop: true,

			scrollbar: {
				el: ".get-page__indicator",
				hide: false,
				dragSize: 'auto',
				draggable: true,
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				479.98: {
					slidesPerView: 1.1,
					spaceBetween: 30,
				},
				992: {
				}
			},
		});

		sliderGet.on('slideChange', function () {
			setIndicator(document.querySelector('.get-page__indicator'), sliderGet)
		});
	}
	if (document.querySelector('.guest-page__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const sliderGuest = new Swiper('.guest-page__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			centeredSlides: true,
			initialSlide: 1,
			grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
						// Ефекти
						effect: 'fade',
						autoplay: {
							delay: 3000,
							disableOnInteraction: false,
						},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.get-page__pagination',
				type: 'progressbar',
				clickable: true,
			},
			*/
			scrollbar: {
				el: ".guest-page__indicator",
				hide: false,
				dragSize: 'auto',
				draggable: true,
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				479.98: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				992: {
				}
			},
		});
		setIndicator(document.querySelector('.guest-page__indicator'), sliderGuest)
		sliderGuest.on('slideChange', function () {
			setIndicator(document.querySelector('.guest-page__indicator'), sliderGuest)
		});
	}
	if (document.querySelector('.past-page__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const sliderPast = new Swiper('.past-page__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			centeredSlides: true,
			initialSlide: 1,
			grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
						// Ефекти
						effect: 'fade',
						autoplay: {
							delay: 3000,
							disableOnInteraction: false,
						},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.get-page__pagination',
				type: 'progressbar',
				clickable: true,
			},
			*/
			scrollbar: {
				el: ".past-page__indicator",
				hide: false,
				dragSize: 'auto',
				draggable: true,
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				479.98: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				992: {
				}
			},
		});
		setIndicator(document.querySelector('.past-page__indicator'), sliderPast)
		sliderPast.on('slideChange', function () {
			setIndicator(document.querySelector('.past-page__indicator'), sliderPast)
		});
	}
	if (document.querySelector('.student-review__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.student-review__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Scrollbar, Navigation, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			centeredSlides: true,
			parallax: true,
			loopedSlides: 2,
			loop: true,
			preventClicks: true,

			navigation: {
				nextEl: '.student-review__navigation_next',
				prevEl: '.student-review__navigation_prev',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				479.98: {
					slidesPerView: 1.4,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 2.6,
					spaceBetween: 30,
				},
				1190: {


				}
			},
		});
	}
	if (document.querySelector('.client-review__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const sliderReview = new Swiper('.client-review__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Scrollbar, Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			grabCursor: true,


			// Ефекти
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},

			scrollbar: {
				el: ".client-review__indicator",
				hide: false,
				dragSize: 'auto',
				draggable: true,
			},
			navigation: {
				nextEl: '.client-review__navigation_next',
				prevEl: '.client-review__navigation_prev',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				479.98: {
				},
				992: {
				}
			},
		});
		setIndicator(document.querySelector('.client-review__indicator'), sliderReview)
		sliderReview.on('slideChange', function () {
			setIndicator(document.querySelector('.client-review__indicator'), sliderReview)
		});
	}
}
function setIndicator(indicator, slider) {
	const indicatorCircle = indicator.querySelector('.indicator__circle');
	const indicatorLine = indicator.querySelector('.indicator__line');
	let offsetWidthIndicator = indicator.offsetWidth;
	let offsetWidthCircle = indicatorCircle.offsetWidth;
	if (slider.realIndex == slider.slides.length - 1 || slider.realIndex == 0) {
		indicatorCircle.style.left = slider.realIndex ? `${offsetWidthIndicator - offsetWidthCircle}px` : `0px`
		indicatorLine.style.width = slider.realIndex ? `${offsetWidthIndicator}px` : `0px`;
	} else {
		indicatorLine.style.width = `${slider.progress * 1 * offsetWidthIndicator}px`;
		indicatorCircle.style.left = `${slider.progress * 1 * offsetWidthIndicator}px`;
	}

}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});