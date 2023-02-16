/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import "inputmask/dist/inputmask.min.js";

const inputTel = document.querySelectorAll('input[type="tel"');
if (inputTel.length) {
	flsModules.inputmask = Inputmask('+\\9\\9\\8 99 999-99-99', {
		placeholder: "-",
	}).mask(inputTel);
}