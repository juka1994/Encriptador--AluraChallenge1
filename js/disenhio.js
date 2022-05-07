var pantalla = document.getElementById("disenhio");
var pincel = pantalla.getContext("2d"); 

var x = 10, suma=10;
function circulo(x){
    
    pincel.strokeStyle = "#E77F7F";
    pincel.beginPath();
    pincel.moveTo(x, 0);
    pincel.lineTo(x,10);
    pincel.stroke();

}

function clear(){
    pincel.clearRect(0,0,300, 150);
}

function actualizar(){
    
    if(x > 280){
        suma = -10;
        clear();
    }else if(x < 0){
        suma = 10;
        clear();
    }
    
    circulo(x);
    x = x + suma;

}

setInterval(actualizar, 100);