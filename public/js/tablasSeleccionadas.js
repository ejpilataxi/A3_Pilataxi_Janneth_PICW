// Pedimos al usuario que elija "pares" o "impares"
let tipo = prompt("¿Qué tablas de multiplicar quieres ver? Escribe 'pares' o 'impares':").toLowerCase();

if (tipo === "pares" || tipo === "impares") {
    // Determinamos el inicio: 4 para pares, 2 para impares
    let inicio = (tipo === "pares") ? 3 : 2;

    // Recorremos los números del 1 al 10 pero solo los pares o impares
    for (let i = inicio; i <= 10; i += 2) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("-----------------------");
    }
} else {
    console.log("Opción no válida. Por favor escribe 'pares' o 'impares'.");
}