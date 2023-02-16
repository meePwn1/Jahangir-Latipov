// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// свечение активного меню
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.querySelectorAll('.menu__item .menu__link').forEach(link => {
				const linkHref = link.getAttribute('href').replace('#', '');
				if (entry.target.id == linkHref) {
					link.closest('.menu__item').classList.add('_active');
					link.classList.add('_active')
				} else {
					link.closest('.menu__item').classList.remove('_active');
					link.classList.remove('_active')
				}
			})
			menuClose();
		}
	})
}, {
	threshold: 0.3,
});

const sections = document.querySelectorAll('section[id]').forEach(section => {
	observer.observe(section);
});


// 