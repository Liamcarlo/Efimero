const imagenes = [

"panqueques.png",
"comida.png",
"enchiladas.png",
"rico.png",


];

let indice = 0;

const slide = document.getElementById("slide");

setInterval(() => {

    indice++;

    if(indice >= imagenes.length){
        indice = 0;
    }

    slide.src = imagenes[indice];

},3000);