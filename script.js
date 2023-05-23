const textArea = document.querySelector(".texto1");
const mensaje = document.querySelector(".cuadroDeResultado");
const textodos = document.getElementById("texto2");
const textotres = document.getElementById("texto3");

//Comienza funcion de Limpiar cuadro de ingreso de texto

function limpiar(){
    textArea.value = "";
    
}


// Comienza funcion Encriptar

function btnEncriptar(){

    
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    if (mensaje.value != ""){
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        textodos.style.display = "none";
        textotres.style.display = "none";
    }   
    else{
        mensaje.style.backgroundImage = "";
        textodos.style.display = "";
        textotres.style.display = "";        
    }
}


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

// Comienza funcion Desencriptar

function btnDesencriptar(){

    const textoDesncriptado = desencriptar(textArea.value);
    mensaje.value = textoDesncriptado;
    if (mensaje.value != ""){
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        textodos.style.display = "none";
        textotres.style.display = "none";
    } 
    else{
        mensaje.style.backgroundImage = "";
        textodos.style.display = "";
        textotres.style.display = "";        
    }
}


function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

// Comienza la funcion de Copiar

function btnCopiar(){
   
   const textoCopiado  = document.querySelector(".cuadroDeResultado");
   textoCopiado.focus();

    navigator.clipboard.writeText(textoCopiado.value);

}