const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btonEncriptar() {
    const output = encriptar(inputTexto.value);
    mensaje.value = output;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(stringOriginal) {
    stringOriginal = stringOriginal.toLowerCase();
    let outputTexto = "";
    for (let i = 0; i < stringOriginal.length; i++) {

        let aux = stringOriginal.substring(i, i + 1);

        let temp = aux;

        if (aux == "a") {
            temp = "ai";
        }
        if (aux == "e") {
            temp = "enter";
        }
        if (aux == "i") {
            temp = "imes";
        }
        if (aux == "o") {
            temp = "ober";
        }
        if (aux == "u") {
            temp = "ufat";
        }
        outputTexto = outputTexto.concat(temp);

    }
    return outputTexto;
}

function btonDesencriptar() {
    const output = desencriptar(inputTexto.value);
    mensaje.value = output;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function desencriptar(stringOriginal) {
    stringOriginal = stringOriginal.toLowerCase();
    let outputTexto = "";
    for (let i = 0; i < stringOriginal.length; i++) {

        let aux = stringOriginal.substring(i, i + 1);

        let temp = aux;

        if (stringOriginal.substring(i, i + 2) == "ai") {
            temp = "a";
            i = i + 1;
        }
        if (stringOriginal.substring(i, i + 5) == "enter") {
            temp = "e";
            i = i + 4;
        }
        if (stringOriginal.substring(i, i + 4) == "imes") {
            temp = "i";
            i = i + 3;
        }
        if (stringOriginal.substring(i, i + 4) == "ober") {
            temp = "o";
            i = i + 3;
        }
        if (stringOriginal.substring(i, i + 4) == "ufat") {
            temp = "u";
            i = i + 3;
        }
        outputTexto = outputTexto.concat(temp);

    }
    return outputTexto;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
}