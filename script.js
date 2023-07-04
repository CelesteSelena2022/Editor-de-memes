const imagenMeme = document.getElementById(`img-meme`);
console.log(imagenMeme)
const urlInput = document.getElementById(`url-input`);
console.log(urlInput)

urlInput.addEventListener(`input`, () => changeBackground());

const changeBackground = () => {
    imagenMeme.style.backgroundImage = `url("${urlInput.value}")`;
    imagenMeme.style.backgroundRepeat= `no-repeat`;
    imagenMeme.style.backgroundSize = `cover`;
}

