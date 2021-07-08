
console.log(document.title);

// CAMBIAR COLOR DE FONDO


imagen = document.querySelectorAll(".infocard");
for (let i = 0; i < imagen.length; i++) {
    imagen[i].style.backgroundColor = "coral";
}

//URL DE LA PÁGINA

var URLactual = window.location.href;

console.log(URLactual);


//DOMAIN DE LA PAGINA

var URLdomain = window.location.host;

console.log(URLdomain);


//CAMBIAR EL NOMBRE 

document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon"

//Imprime todos los nodos de imagen.!!!!!!!!!!!!!!!!!!!!!!!!!!
/*const content = images.innerHTML;
console.log(content);*/
let imagen2 = document.querySelectorAll(".img-fixed");
for (let i = 0; i < imagen2.length; i++) {
    console.log(imagen2[i].src);
}
console.log (imagen2)
//Sustituye el atributo "src" de todas las imágenes por este !!!!!!!!!!!!
// let imagen2 = document.querySelectorAll(".img-fixed");
for (let i = 0; i < imagen2.length; i++) {
    imagen2[i].src ="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}