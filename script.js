const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'meme-image-container';
const input = document.createElement('input');
input.id = 'text-input';
body.appendChild(container);
body.appendChild(input);
const paragraph = document.createElement('p');
paragraph.id = 'meme-text';
container.appendChild(paragraph);

const texto = () => {
  paragraph.innerText = input.value;
};

input.addEventListener('keyup', texto)