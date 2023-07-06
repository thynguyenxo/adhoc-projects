const main = document.querySelector('main');
const colorValue = document.querySelector('.color-value');
const rgba = document.querySelector('.rgba');
const hex = document.querySelector('.hex');
const btn = document.querySelector('.btn');
const navbar = document.querySelector('.navbar');

// generate hex code
const generateRandomHexColor = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

// generate rbg code
function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// default btn
btn.addEventListener('click', () => {
  const color = generateRandomRgbColor();
  main.style.backgroundColor = color;
  colorValue.textContent = color;
});

// click on hex button to insert generator button and color code for hex
hex.addEventListener('click', () => {
  colorValue.textContent = `#FFFFFF`;
  btn.addEventListener('click', () => {
    main.style.backgroundColor = generateRandomHexColor(6);
    colorValue.textContent = `#${generateRandomHexColor(6)}`;
  });
});
