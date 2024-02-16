function mostrarMensaje() {
    let opcion1;
    let opcion2; 
    let a, b, c, d, e;
    opcion1 = parseInt(document.getElementById("opcion1").value, 10);
    opcion2 = parseInt(document.getElementById("opcion2").value, 0);
    a = opcion1 + opcion2;
    b = opcion1 - opcion2;
    c = opcion1 * opcion2;
    d = opcion1 / opcion2;
    e = opcion1 % opcion2;
    document.getElementById("mensaje").innerHTML = "El primer número es: " + opcion1 + "<br>El segundo número es: " + opcion2 + "<br>La suma es: " + a + "<br>La resta es: " + b + "<br>El producto es: " + c + "<br>La división es :" + d + "<br>El resto es: " + e;
  
}