const button = document.querySelector("button");
button.addEventListener('click', () => {
   const newColor = RandomColor();
    const h1 = document.querySelector('h1');
    h1.innerText= newColor;
    document.body.style.backgroundColor = newColor;
})

const RandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}