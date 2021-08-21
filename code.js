let array = [];
var n = 0;

//establecer N del número de cadenas
function set(){
    n = document.getElementById("Ncadena").value;
}

//Agregar cadena
function add(){
    var expreg = /^[\.|\#]+$/;
    cad = document.getElementById("cadena").value;
    if(expreg.test(cad)){
        let arrayInterno = [];
        if(cad.length == n){
            for (var i = 0; i< cad.length; i++) {
                var caracter = cad.charAt(i);
                arrayInterno.push(caracter);
            }
            array.push(arrayInterno);
        }
        desplegar();
    }else{
        alert("Solo se admiten . y #");
    }
}

//Calcular movimientos
function calc(){
    var mov = document.getElementById("movimientos").value;
    var sum = -1;
    for (var i = 0; i< array.length; i++) {
        for (var j = 0; j < n; j++) {
            if(array[i][j] == "."){
                sum = sum + 1;
            }
        }
    }
    var resp = "";
    if(parseInt(sum) == parseInt(mov)){
        resp = "YES";
    }else{
        resp = "NO";
    }
    document.getElementById("Respuesta").innerHTML = resp;
}

//Desplegar arreglo de cadenas
function desplegar(){
    var cadena = "";
    for (var i = 0; i< array.length; i++) {
        for (var j = 0; j < n; j++) {
            cadena = cadena +  array[i][j];
        }
        cadena = cadena + "<br>";
    }
    document.getElementById("Array").innerHTML = cadena;
}