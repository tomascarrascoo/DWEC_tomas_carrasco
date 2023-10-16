var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Pedimos que introduzca el numero de DNI el usuario
var numeroDNI = parseInt(prompt("Introduzca el numero del DNI:"));

// Comprobamos que sea valido
if (numeroDNI < 0 || numeroDNI > 99999999 || isNaN(numeroDNI)) {
    alert("El número de DNI no es valido.");
} else {
    // Calculamos la letra
    var resto = numeroDNI % 23;
    var lletraCalculada = lletres[resto];
    
    // Pedimos al usuario que introduzca la letra
    var lletraUsuari = prompt("Introduzca la letra del DNI:");
    
    // Comprovamos si la letra introducida es valida
    if (lletraCalculada === lletraUsuari.toUpperCase()) {
        alert("El numero y la letra del DNI son correctos.");
    } else {
        alert("La letra que ha indicado es incorrecta.");
    }
}