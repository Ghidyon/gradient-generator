const firstColor = document.querySelector('#color1');
const secondColor = document.querySelector('#color2');
const cssProperty = document.querySelector('#css-property');
const copyButton = document.querySelector('#copy-button');
const body = document.querySelector('body');
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
cssProperty.textContent = body.style.background;

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`
    cssProperty.textContent = body.style.background;
}

const copyCSS = () => {
    const copiedText = cssProperty.textContent;
    const element = document.createElement("textarea");
    body.appendChild(element);
    element.value = copiedText;
    element.select();
    document.execCommand("copy");
    body.removeChild(element);
}

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);
copyButton.addEventListener("click", copyCSS);