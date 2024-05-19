function printNames() {
    const alphabets = document.querySelector('#alphabets').value;
    const main = document.querySelector('main');

    main.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const name = shuffle(alphabets);
        const nameEl = document.createElement('div');
        const color = randomColor();

        console.log(color);

        nameEl.style.color = randomColor();
        nameEl.classList.add('name-wrapper');
        nameEl.textContent = name;
        main.appendChild(nameEl);
    }
}

function shuffle(letters) {
    var a = letters.split(''),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
}

function randomColor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}
