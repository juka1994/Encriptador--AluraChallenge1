//Etiqueta donde se mostrara el texto encriptado o desencriptado
var encriptadoMensaje = document.getElementById("mensaje");

//Boton copiar
var copiar = document.getElementById("copiar");

function copiarTexto(){

    let mensajeCopiar = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(mensajeCopiar);
    
}

copiar.onclick = copiarTexto;

function enviarTextoEncriptar(){

    //Texto que se quiere encriptar
    var textoEntrada = document.getElementById("entrada").value;
    //Asignado el texto encriptado o desencriptado
    var nuevoTexto = encriptarTexto(textoEntrada);

    encriptadoMensaje.value = nuevoTexto;
    //Mostrar boton copiar
    copiar.style.display = "inline";

}

function enviarTextoDesencriptar(){

    //Texto que se quiere encriptar
    var textoEntrada = document.getElementById("entrada").value;
    //Asignado el texto encriptado o desencriptado
    var nuevoTexto = desencriptarTexto(textoEntrada);

    encriptadoMensaje.value = nuevoTexto;
    
}

function acentoCaracterEspecial(texto){

    var nuevoTextoMinuscula = texto.toLowerCase();
    var nuevoTextoNoAcento = nuevoTextoMinuscula.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    var sinCaracteres = nuevoTextoNoAcento.replace(/[^a-zA-Z 0-9.]+/g,' ');

    return sinCaracteres;

}

//Desencripta el texto
function desencriptarTexto(texto){

    var sinCaracteres = acentoCaracterEspecial(texto);
    var nuevoTexto = sinCaracteres.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g,'o').replace(/ufat/g, 'u');

    return nuevoTexto;
}

//Encripta el texto
function encriptarTexto(texto){

    var sinCaracteres = acentoCaracterEspecial(texto);
    var nuevoTexto = sinCaracteres.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    
    return nuevoTexto;
    
}

var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar = document.getElementById("desencriptar");

botonEncriptar.onclick = enviarTextoEncriptar;
botonDesencriptar.onclick = enviarTextoDesencriptar;



