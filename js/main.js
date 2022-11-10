function encender() {
    var bombilla = document.getElementById('foco');
    bombilla.src='img/pic_bulbon.gif';
}

function apagarse() {
    var bombilla = document.getElementById('foco');
    bombilla.src='img/pic_bulboff.gif';
}

function ocultar(){
    var bombilla = document.getElementById('foco')
    bombilla.style.display= 'none';
}

function mostrar(){
    var bombilla = document.getElementById('foco')
    bombilla.style.display='';
}

function cambiar() {
    var body= document.getElementById('body');
    var color = prompt("Ingrese un color");
    body.style.backgroundColor = color;
}


function cambiarsize() {
    var selector = document.getElementById('foco');
    selector.style.cssText="transition: 2s;background-color:pink; width: 400px;";
}

function circulo() {
    var  figura = document.getElementById('figura')
    figura.classList.toggle("circulo");
}

function rombo() {
    var  figura = document.getElementById('figura')
    figura.classList.toggle("rombo");
}

function Top(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Top");
}

function Left(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Left");
}

function bottom(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("bottom");
}

function right(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("right")
}

function diagonaliz(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("diagonaliz")
}
function diagonalinf(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("diagonalinf")
}

function triangulo() {
    var figura= document.getElementById('figura');
    figura.classList.toggle("triangulo")}

function mostrargif() {
    document.getElementById('gif').style.display='block';
    figura.classList.toggle("figura")
}

function trapecio() {
    var figura = document.getElementById('figura')
    figura.classList.toggle("trapecio")
}

function colorchart(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("colorchart")
}




