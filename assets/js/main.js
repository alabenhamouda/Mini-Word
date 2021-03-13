const color = document.querySelector('#color');
const p = document.querySelector('#paragraph');
const size = document.querySelector('#size');
const select = document.querySelector('#font');
const fonts = [
    'Arial',
    'Times New Roman',
    'Times',
    'Courier New',
    'Courier',
    'Verdana',
    'Georgia',
    'Palatino',
    'Garamond',
    'Bookman',
    'Tahoma',
    'Trebuchet MS',
    'Arial Black',
    'Impact',
    'Comic Sans MS'
];

for (let font of fonts) {
    const op = document.createElement('option');
    op.setAttribute('value', font);
    op.textContent = font;
    select.appendChild(op);
}

color.addEventListener('change', e => {
    p.style.color = color.value;
})

size.addEventListener('change', e => {
    p.style.fontSize = `${size.value}pt`
})

select.addEventListener('change', e => {
    p.style.fontFamily = select.value;
})

window.addEventListener('load', e => {
    p.style.fontFamily = select.value;
})