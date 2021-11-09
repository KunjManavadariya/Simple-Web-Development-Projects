const container = document.querySelector("#container");


for(let i=1; i<151; i++){
    const Divs = document.createElement('div');
    Divs.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    Divs.appendChild(newImg);
    Divs.appendChild(label);
    container.appendChild(Divs);
}

