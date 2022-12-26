const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'meme-image-container';
const containerImage = document.createElement('div');
containerImage.id = 'meme-image';
const input = document.createElement('input');
input.id = 'text-input';
input.type = 'text';
const inputImage = document.createElement('input');
inputImage.id = 'meme-insert';
inputImage.type = 'file';
body.appendChild(inputImage);
body.appendChild(container);
body.appendChild(input);
const paragraph = document.createElement('p');
paragraph.id = 'meme-text';
container.appendChild(paragraph);
container.appendChild(containerImage);

const texto = () => {
  paragraph.innerText = input.value;
};

input.addEventListener('keyup', texto)

inputImage.addEventListener('change', (event) => {
  const inputTarget = event.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);
  if (file) {
    const reader = new FileReader();
    console.log(reader);
    reader.addEventListener('load', (event) => {
      const readerTarget = event.target;
      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.className = 'meme';
      containerImage.innerHTML = '';
      // container.appendChild(paragraph);
      containerImage.appendChild(img);
    });
    reader.readAsDataURL(file);
  }
});