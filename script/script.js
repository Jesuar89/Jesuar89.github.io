var cont = 1;
var datos = [];
var numguest = 0;
var numhab = 0;
/* var boton = document.getElementsByName("input")[0].addEventListener("click", carga); */

//Fecha actual por defecto en el input
window.onload = function () {
    var fecha = new Date(); //Fecha actual
    var dateformat = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + '-' + fecha.getDate()
    var mes = fecha.getMonth() + 1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    document.getElementById('fechaActual').value = ano + "-" + mes + "-" + dia;
    //Desavilitar fechas anteriores
    this.document.getElementById('fechaActual').setAttribute("min", dateformat);
}

//Drop de eleccion de noches
crearPadre("14 Noches", document.getElementById("popular"), "option");
crearPadre("10 Noches", document.getElementById("popular"), "option");
crearPadre("7 Noches", document.getElementById("popular"), "option");
crearPadre("4 Noches", document.getElementById("popular"), "option");             
document.getElementsByTagName("option")[0].setAttribute("selected", "selected");

for (let i = 30; i >= 1; i--) {
    crearPadre(i + " Noches", document.getElementById("daily"), "option");
}  

//FUNCIONES-----------------------------------------------------------------------------------

//Funcion para Crear un elemento en el HTML("contenido","el padre","el tipo de etiqueta")
function crearPadre(contenido, padre, etiqueta) {
    var nuevaetiqueta = document.createElement(etiqueta);
    padre.after(nuevaetiqueta);
    nuevaetiqueta.appendChild(document.createTextNode(contenido));
}
//Borrado de todos los hijos de un elemento
function borrar(padre) {
    while (padre.firstChild)
        padre.removeChild(padre.firstChild);
} 









