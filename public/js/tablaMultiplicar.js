let numero = prompt("Ingrese un número para la tabla de multiplicar:");

// Convertir la entrada a número
numero = parseInt(numero);

// Verificar si la entrada es un número válido
if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    
    // Usar un bucle for para iterar del 1 al 12
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}