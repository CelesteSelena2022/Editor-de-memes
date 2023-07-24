//********************************
//**************** ASIDE IMAGEN ****************
//********************************

//********************************
//intercambiar un aside con el otro con los botones texto e imagen
//********************************

const btnImg = document.getElementById(`btn-img`); //trae el boton para activar el aside img
const btnText = document.getElementById(`btn-text`); //trae el boton para activar el aside texto

const panelImg = document.getElementById(`panel-img`); //trae el panel imagen
const panelText = document.getElementById(`panel-text`); //trae el panel texto

btnImg.addEventListener('click', ()=> hidenImgAside());
btnText.addEventListener('click', ()=> hidenTextAside());

const hidenImgAside = () => {
    panelText.classList.add('hidden');
    panelImg.classList.remove('hidden');
}

const hidenTextAside = () => {
    panelImg.classList.add('hidden');
    panelText.classList.remove('hidden');
}

//********************************
//cambiar a modo oscuro y modificar el button para cambiar los modos
//********************************
const modeButton = document.getElementById("mode-btn");
const body = document.getElementById(`body`);

modeButton.addEventListener(`click`, () => changeMode());

const changeMode = () => {
    body.classList.toggle(`modo-oscuro`);
    if (body.classList.contains("modo-oscuro")) {
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


const filtros = () => {
    imgMeme.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}px) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturatedInput.value}%) invert(${invertInput.value})`;
}

brightInput.addEventListener(`input`, () => filtros());
opacityInput.addEventListener(`input`, () => filtros());
contrastInput.addEventListener(`input`, () => filtros());
blurInput.addEventListener(`input`, () => filtros());
grayscaleInput.addEventListener(`input`, () => filtros());
sepiaInput.addEventListener(`input`, () => filtros());
hueInput.addEventListener(`input`, () => filtros());
saturatedInput.addEventListener(`input`, () => filtros());
invertInput.addEventListener(`input`, () => filtros());

//********************************
// input para reestablecer filtros 
//********************************

const btnResetFilter = document.getElementById(`btn-reset`);

btnResetFilter.addEventListener(`click`, () => reestrablecerFiltros())

const reestrablecerFiltros = () => {
    imgMeme.style.filter = `none`;
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
    domtoimage.toBlob(containerMeme).then(function (blob) {
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
//tomar el valor del input number para el tamaño del texto y actualizar el tamaño con su padding a medida que la ventana del navegador cambie 
//********************************

const inputFontSize = document.getElementById(`input-font-size`);

inputFontSize.addEventListener(`input`, () => actualizarFontSize());

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
    const padding = Math.round((window.innerWidth / 10) * 0.2)
    inputFontSize.value = tamanioTexto
    InputEspaciado.value = padding
    actualizarFontSize();
    crearEpaciado();
}

window.addEventListener('resize', () => ajustarTexto());

//********************************
//cambia la alineacion del topText y bottomText
//********************************

const btnAlignStart = document.getElementById(`btn-align-start`);
const btnAlignCenter = document.getElementById(`btn-align-center`);
const btnAlignEnd = document.getElementById(`btn-align-end`);

btnAlignStart.addEventListener(`click`, () => alinearTexto(`start`));
btnAlignCenter.addEventListener(`click`, () => alinearTexto(`center`));
btnAlignEnd.addEventListener(`click`, () => alinearTexto(`end`));

alinearTexto = (align) => {
topText.style.justifyContent = align;
bottomText.style.justifyContent = align;
}

//********************************
//cambia color del topText y bottomText
//********************************

const colorPickerTexto = document.getElementById(`color-picker-text`);
const colorNameTexto = document.getElementById(`color-name-text`);

colorPickerTexto.addEventListener("input", () => cambiarColorTexto());

const cambiarColorTexto = () => {
    let colorDelTexto = colorPickerTexto.value;
    colorNameTexto.innerHTML = `${colorDelTexto}`;
    topText.style.color = `${colorDelTexto}`;
    bottomText.style.color = `${colorDelTexto}`;
}

//********************************
//cambia el fondo del topText y bottomText
//********************************

const colorPickerFondo = document.getElementById(`color-picker-fondo`);
const colorNameFondo = document.getElementById(`color-name-fondo`);

colorPickerFondo.addEventListener("input", () => cambiarColorFondo());

const cambiarColorFondo = () => {
    let colorDelFondo = colorPickerFondo.value;
    colorNameFondo.innerHTML = `${colorDelFondo}`;
    topText.style.backgroundColor = `${colorDelFondo}`;
    bottomText.style.backgroundColor = `${colorDelFondo}`;
}

//********************************
//agrega el fondo transparente al texto
//********************************

const FondoTransparente = document.getElementById(`checkbox-transparent`);

FondoTransparente.addEventListener(`change`, () => FondoTransparenteText());

const FondoTransparenteText = () => {
    if (FondoTransparente.checked){
        topText.style.position = `absolute`;
        bottomText.style.position = `absolute`;
        topText.style.backgroundColor = `transparent`;
        bottomText.style.backgroundColor = `transparent`;
    } else {
        topText.style.position = `static`;
        bottomText.style.position = `static`;
        cambiarColorFondo();
    }
}

//********************************
//agrega contorno al texto
//********************************

const btnContornoNinguno = document.getElementById(`btn-contorno-ninguno`);
const btnContornoClaro = document.getElementById(`btn-contorno-claro`);
const btnContornoOscuro = document.getElementById(`btn-contorno-oscuro`);

btnContornoNinguno.addEventListener(`click`, () => contornoText('0px'));
btnContornoClaro.addEventListener(`click`, () => contornoText(`0.5px #ffffff`));
btnContornoOscuro.addEventListener(`click`, () => contornoText(`0.5px #000000`));

const contornoText = (contorno) => {
    topText.style.webkitTextStroke = contorno;
    bottomText.style.webkitTextStroke = contorno;
}

//********************************
// espaciado para el texto
//********************************

const InputEspaciado = document.getElementById(`input-espaciado`);

InputEspaciado.addEventListener(`input`, () => crearEpaciado())

crearEpaciado = () => {
    topText.style.padding = `${InputEspaciado.value}px`
    bottomText.style.padding = `${InputEspaciado.value}px`
}

//********************************
// interlineado para el texto
//********************************

const selectInterlineado = document.getElementById(`select-interlineado`);

selectInterlineado.addEventListener(`change`, () => CambiarInterlineado());

const CambiarInterlineado = () => {
    topText.style.lineHeight = `${selectInterlineado.value}`;
    bottomText.style.lineHeight = `${selectInterlineado.value}`;
}

//********************************
// redimensiona el contenedor del meme
//********************************

const containerMeme = document.getElementById(`container-meme`);

    const ajustarImagen = () => {
        containerMeme.style.height = `${
        containerMeme.getBoundingClientRect().width
        }px`
    }

    window.addEventListener('resize', () => ajustarImagen())

//********************************
// Esconder los asides
//********************************

    const resizewindow = () => {
        if (body.getBoundingClientRect().width > 1300) {
        panelImg.classList.remove(`hidden`);
    } else {
        panelImg.classList.add(`hidden`);
    }
}
    window.addEventListener(`resize`, resizewindow);