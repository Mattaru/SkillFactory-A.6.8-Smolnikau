const PB = document.querySelector(".j-bar");

const BTN = document.querySelector("j-btn");
const BTN1 = document.querySelector("j-btn1");
const BTN2 = document.querySelector("j-btn2");

const www = () => {
;
	PB.setAttribute("style", `width: ${Number(PB.style.width.slice(0, -1)) + 1}%`);
};

const  www1 = () => {

	PB.setAttribute("style", `width: ${Number(PB.style.width.slice(0, -1)) + 3}%`);
};

const  www2 = () => {

	PB.setAttribute("style", `width: ${Number(PB.style.width.slice(0, -1)) + 7}%`);
};