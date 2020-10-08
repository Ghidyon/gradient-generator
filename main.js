const firstColor = document.querySelector('#color1');
const secondColor = document.querySelector('#color2');
const cssProperty = document.querySelector('#css-property');
const body = document.querySelector('body');
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
cssProperty.textContent = body.style.background;

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`
    cssProperty.textContent = body.style.background;
}

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);