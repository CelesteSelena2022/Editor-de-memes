//********************************
// toma la url y la convierte en el fondo del meme
//********************************

// Problema: a medida que se achica el ancho o alto corta la imagen

const imgMeme = document.getElementById(`img-meme`);
const urlInput = document.getElementById(`url-input`);

urlInput.addEventListener(`input`, () => changeBackground());

const changeBackground = () => {
    imgMeme.style.backgroundImage = `url("${urlInput.value}")`;
    imgMeme.style.backgroundRepeat= `no-repeat`;
    imgMeme.style.backgroundSize = `cover`;
    imgMeme.style.backgroundPosition = `center`;
}


//********************************
//intercambiar un aside con el otro con los botones texto e imagen
//********************************


const btnText = document.getElementById(`btn-text`); //trae el boton para activar el aside texto
const btnImg = document.getElementById(`btn-img`); //trae el boton para activar el aside img

const panelText = document.getElementById(`panel-text`); //trae el panel texto
const panelImg = document.getElementById(`panel-img`); //trae el panel imagen

btnText.addEventListener('click', ()=> hidenTextAside());
btnImg.addEventListener('click', ()=> hidenImgAside());

const hidenTextAside = () => {
    panelImg.classList.add('hidden');
    panelText.classList.remove('hidden');
}

const hidenImgAside = () => {
    panelText.classList.add('hidden');
    panelImg.classList.remove('hidden');
}

//********************************
//tomar valor del input type range 
//********************************

const brightInput = document.getElementById(`bright-input`); // BRILLO
const opacityInput = document.getElementById(`opacity-input`); // OPACIDAD
const contrastInput = document.getElementById(`contrast-input`); // CONTRASTE
const blurInput = document.getElementById(`blur-input`); // BLUR
const grayscaleInput = document.getElementById(`grayscale-input`); // ESCALA DE GRISES
const sepiaInput = document.getElementById(`sepia-input`); // SEPIA
const hueInput = document.getElementById(`hue-input`); // HUE
const saturatedInput = document.getElementById(`saturation-input`); // SATURADO
const invertInput = document.getElementById(`invert-input`); // NEGATIVO


const filtros = (e) => {
    imgMeme.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}px) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturatedInput.value}%) invert(${invertInput.value})`;
}

brightInput.addEventListener(`input`, (e) => filtros(e));
opacityInput.addEventListener(`input`, (e) => filtros(e));
contrastInput.addEventListener(`input`, (e) => filtros(e));
blurInput.addEventListener(`input`, (e) => filtros(e));
grayscaleInput.addEventListener(`input`, (e) => filtros(e));
sepiaInput.addEventListener(`input`, (e) => filtros(e));
hueInput.addEventListener(`input`, (e) => filtros(e));
saturatedInput.addEventListener(`input`, (e) => filtros(e));
invertInput.addEventListener(`input`, (e) => filtros(e));
// para ver cambiar el valor del input

//********************************
//tomar valor del input type color
//********************************

const colorPicker = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");

//suponiendo que tenemos la sig. funcion:
const cambiarFondoMeme = () => {
    let colorElegido = colorPicker.value;
    //si queremos insertar texto usamos:
    colorName.innerHTML = `${colorElegido}`;
};

colorPicker.addEventListener("input", () => cambiarFondoMeme());

//********************************
//cambiar a modo oscuro los asides y modificar el button para cambiar los modos
//********************************
const mainContainer = document.getElementById("container-main");
const header = document.getElementById("header");
const inputDark = document.getElementsByClassName(`panel-control__input`);
const modeButton = document.getElementById("mode-btn");

modeButton.addEventListener("click", () => changeMode());

const changeMode = () => {
    //toggle realiza la funcion y su viceversa
    panelText.classList.toggle(`panel--dark`)
    mainContainer.classList.toggle(`container-main--dark`)
    header.classList.toggle(`header--dark`);
    inputDark[5].classList.toggle(`panel-control__input--dark`);

    //contains es como include
    if (mainContainer.classList.contains("container-main--dark")) {
        // con el innerhtml podemos agregar etiquetas
        modeButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo claro';
    } else {
        modeButton.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Modo oscuro';
    }
}

//********************************
//tomar valor del input type checkbox
//********************************

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

topText.addEventListener(`change`, hideTopText());
bottomText.addEventListener(`change`, hideBottomText());



