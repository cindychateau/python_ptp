console.log("¡Bienvenidos!");

function saluda() {
    prompt("¡Hola!");
    //alert("Hola!");
    console.log("¿Cómo están?");
}

function cambioLetra(elemento) {
    console.log(elemento);

    var texto = elemento.innerText;
    console.log(texto);    

    //font-size = fontSize
    if(texto == "Normal") {
        elemento.style.fontSize = "11px";
    } else {
        elemento.style.fontSize = "30px";
    }
    
}

//li = <li ondblclick="cambioFrase(this)">Explicit is better than implicit;</li>
function cambioFrase(li) {
    li.innerText = "Hiciste doble click aquí";
}

//elemento = <li onclick="eliminar(this)"><a href="#">FAQ</a></li>
function eliminar(abc123) {
    abc123.remove();
}

function cambioParrafo() {
    //elemento
    //.clase
    //#id
    var elemento_parrafo = document.querySelector("#parrafo");

    if(elemento_parrafo.innerText == "¡Estoy interactuando con javascript desde otro elemento!") {
        elemento_parrafo.innerText = "First appearing in 1991, Python is a general-purpose, high-level, interpreted programming language whise design focus emphasizes code readability. Whether for processing/analyzing data to powering many well-known applications.Python is not only a great language for new programmers but also powerful engough fo seasoned developers building whatever they can think of.";
    } else {
        elemento_parrafo.innerText = "¡Estoy interactuando con javascript desde otro elemento!";
    }


}

function buscar() {
    //Guardar en variable el input para obtener el valor
    //elemento_input = <input type="text" placeholder="Search">
    var elemento_input = document.querySelector('input');
    console.log(elemento_input.value);
    alert("El usuario está buscando:"+elemento_input.value);
}

function cambiaColor(elementoH3) {
    elementoH3.style.color = "aqua";
}