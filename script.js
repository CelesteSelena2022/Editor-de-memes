//********************************
//**************** ASIDE IMAGEN ****************
//********************************

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
//boton para quitar el panel de text o img
//********************************

const BtnCloseImg = document.getElementById(`btn-close-img`);
const BtnCloseText = document.getElementById(`btn-close-text`);

BtnCloseImg.addEventListener(`click`, () => ClosePanelImg());
BtnCloseText.addEventListener(`click`, () => ClosePanelText());

const ClosePanelImg = () => {
    panelImg.classList.toggle(`hidden`);
}

const ClosePanelText = () => {
    panelText.classList.toggle(`hidden`);
}

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
//tomar valor del input type color y cambiar fondo del contendor meme
//********************************

const colorPicker = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");

//suponiendo que tenemos la sig. funcion:
const cambiarFondoMeme = () => {
    let colorElegido = colorPicker.value;
    //si queremos insertar texto usamos:
    colorName.innerHTML = `${colorElegido}`;
    imgMeme.style.backgroundColor = `${colorElegido}`;
};

colorPicker.addEventListener("input", () => cambiarFondoMeme());

//********************************
//tomar valor del input select del blend mode
//********************************

const filterSelector = document.getElementById(`filter-selector`);

filterSelector.addEventListener("change", () => changeFilter());

const changeFilter = () => {
    imgMeme.style.backgroundBlendMode = `${filterSelector.value}`;
};

//********************************
//tomar valor del input type range de filtros
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
// input para reestablecer filtros 
//********************************

const btnResetFilter = document.getElementById(`btn-reset`);

btnResetFilter.addEventListener(`click`, () => reestrablecerFiltros())

const reestrablecerFiltros = () => {
    imgMeme.style.filter = `brightness(${brightInput.value = 1}) opacity(${opacityInput.value = 1}) blur(${blurInput.value = 0}px) contrast(${contrastInput.value = 100}%) grayscale(${grayscaleInput.value = 0}%) hue-rotate(${hueInput.value = 0}deg) sepia(${sepiaInput.value = 0}%) saturate(${saturatedInput.value = 100}%) invert(${invertInput.value = 0})`;
}

//********************************
//**************** ASIDE TEXTO ****************
//********************************

//********************************
//boton de descarga del meme
//********************************

const downloadButton = document.getElementById("download-btn");

downloadButton.addEventListener(`click`, () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(imgMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};

//********************************
// agregar el texto top y bottom al meme
//********************************

const topTextTextarea = document.getElementById(`top-text-textarea`);
const bottomTextTextarea = document.getElementById(`bottom-text-textarea`);

topTextTextarea.addEventListener(`input`, () => agregarText());
bottomTextTextarea.addEventListener(`input`, () => agregarText());

const agregarText = () => {
    topText.innerHTML = `${topTextTextarea.value}`;
    bottomText.innerHTML = `${bottomTextTextarea.value}`;
}

//********************************
//tomar valor del input type checkbox
//********************************

const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");
const bottomText = document.getElementById("bottom-text");
const topText = document.getElementById("top-text");

topTextInput.addEventListener(`change`, () => hideTopText());
bottomTextInput.addEventListener(`change`, () => hideBottomText());

const hideTopText = () => {
    if (topTextInput.checked) {
        topText.classList.add(`hidden`);    
    } else {
        topText.classList.remove(`hidden`);   
    }
}

const hideBottomText = () => {
    //checked devuelve true o false si el input checkbox esta marcado
    if (bottomTextInput.checked) {
        bottomText.classList.add(`hidden`);    
    } else {
        bottomText.classList.remove(`hidden`);   
    }
}

//********************************
//tomar el valor del input select de fuentes
//********************************

const fontSelector = document.getElementById(`font-selector`);

fontSelector.addEventListener("change", () => changeFontFamily());

const changeFontFamily = () => {
    topText.style.fontFamily = `${fontSelector.value}`;
    bottomText.style.fontFamily = `${fontSelector.value}`;
};

//********************************
//tomar el valor del input number para el tamaño del texto y actualizar el tamaño a medida que la ventana del navegador cambie
//********************************

const inputFontSize = document.getElementById(`input-font-size`);

inputFontSize.addEventListener(`click`, () => actualizarFontSize());

const actualizarFontSize = () => {
    let medida = inputFontSize.value
    topText.style.fontSize = `${medida}px`
    bottomText.style.fontSize = `${medida}px`
}

const ajustarTexto = () => {
    if (window.innerWidth > 1100) {
        return
    }
    const tamanioTexto = Math.round((window.innerWidth / 10) * 0.5)
    inputFontSize.value = tamanioTexto
    actualizarFontSize();
}

window.addEventListener('resize', ajustarTexto);
