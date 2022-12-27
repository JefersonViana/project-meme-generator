const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'meme-image-container';
const containerImage = document.createElement('img');
containerImage.id = 'meme-image';
const input = document.createElement('input');
input.id = 'text-input';
input.type = 'text';
input.maxLength = 60;
const inputImage = document.createElement('input');
inputImage.id = 'meme-insert';
inputImage.type = 'file';
const buttonFire = document.createElement('button');
buttonFire.innerText = 'FIRE';
buttonFire.id = 'fire';
buttonFire.style.backgroundColor = 'rgb(255, 0, 0)';
const buttonWater = document.createElement('button');
buttonWater.innerText = 'WATER';
buttonWater.id = 'water';
buttonWater.style.backgroundColor = 'rgb(0, 0, 255)';
const buttonEarth = document.createElement('button');
buttonEarth.innerText = 'EARTH';
buttonEarth.id = 'earth';
buttonEarth.style.backgroundColor = 'rgb(0, 128, 0)';
const meme1 = document.createElement('div');
meme1.className = 'box one';
const meme2 = document.createElement('div');
meme2.className = 'box';
const meme3 = document.createElement('div');
meme3.className = 'box';
const meme4 = document.createElement('div');
meme4.className = 'box';
body.appendChild(inputImage);
body.appendChild(container);
body.appendChild(input);
body.appendChild(buttonFire);
body.appendChild(buttonWater);
body.appendChild(buttonEarth);
body.appendChild(meme1);
body.appendChild(meme2);
body.appendChild(meme3);
body.appendChild(meme4);
const paragraph = document.createElement('p');
paragraph.id = 'meme-text';
container.appendChild(paragraph);
container.appendChild(containerImage);

const texto = () => {
  paragraph.innerText = input.value;
};

input.addEventListener('keyup', texto);

inputImage.addEventListener('change', (event) => {
  const inputTarget = event.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);
  if (file) {
    const reader = new FileReader();
    console.log(reader);
    reader.addEventListener('load', (evento) => {
      const readerTarget = evento.target;
      containerImage.src = readerTarget.result;
      containerImage.innerHTML = '';
    });
    reader.readAsDataURL(file);
  }
});

const fire = () => {
  container.style.border = '3px dashed rgb(255, 0, 0)';
};

const water = () => {
  container.style.border = '5px double rgb(0, 0, 255)';
};

const earth = () => {
  container.style.border = '6px groove rgb(0, 128, 0)';
};

buttonFire.addEventListener('click', fire);
buttonWater.addEventListener('click', water);
buttonEarth.addEventListener('click', earth);

const image1 = document.createElement('img');
image1.id = 'meme-1';
image1.className = 'imagens';
image1.src = 'imgs/meme1.png';
const image2 = document.createElement('img');
image2.id = 'meme-2';
image2.className = 'imagens';
image2.src = 'imgs/meme2.png';
const image3 = document.createElement('img');
image3.id = 'meme-3';
image3.className = 'imagens';
image3.src = 'imgs/meme3.png';
const image4 = document.createElement('img');
image4.id = 'meme-4';
image4.className = 'imagens';
image4.src = 'imgs/meme4.png';

meme1.appendChild(image1);
meme2.appendChild(image2);
meme3.appendChild(image3);
meme4.appendChild(image4);

const funcao = (event) => {
  const alvo = event.target;
  containerImage.innerHTML = '';
  if (alvo === image1) {
    containerImage.src = 'imgs/meme1.png';
  } else if (alvo === image2) {
    containerImage.src = 'imgs/meme2.png';
  } else if (alvo === image3) {
    containerImage.src = 'imgs/meme3.png';
  } else {
    containerImage.src = 'imgs/meme4.png';
  }
};

meme1.addEventListener('click', funcao);
meme2.addEventListener('click', funcao);
meme3.addEventListener('click', funcao);
meme4.addEventListener('click', funcao);
