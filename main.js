// Función para convertir pesos a dólares
function convertCurrency(pesos) {
    const tasaCambio = 1300; // Se asigna una tasa de cambio constante para tener en cuenta durante la conversión 
    return pesos / tasaCambio;
  }
  
  // Arreglo con los objetos 
  let history = [{
    tipo: 'divisa',
    entrada: '1300 ARS',
    salida: '1 USD',
    fecha: new Date().toLocaleString()
}];
  
  // Variable asignada para controlar el bucle
  let opcion;
  
  do {
    // Menú de opciones
    opcion = prompt("1) Divisa    (ARS -> USD)\n2) Salir");
  
    switch (opcion) {
      case "1":
        // Se pide el numero en pesos al usuario
        let montoPesos = parseFloat(prompt("Ingresá el monto en pesos:"));
  
        // Simple condicional que ayuda a verificar si el numero ingresado es correcto 
        if (isNaN(montoPesos) || montoPesos <= 0) {
          alert("Ingrese un monto válido.");
          break;
        }
  
        // Se define una variable invocando a la función y se le mete el valor de lo que ingresó el usuario
        let montoDolares = convertCurrency(montoPesos);
  
        // Se guardan en el arregglo history los cambios que se realizan en la función  
        history.push({
        entrada: montoPesos,
        salida: montoDolares.toFixed(2),
        fecha:new Date().toLocaleString()
        });
  
        alert(`$${montoPesos} pesos son $${montoDolares.toFixed(2)} dólares.`); //Dentro del caso 1 se pone la opcion para mostrar el resultado
        break;
  
      case "2":
        alert("Gracias, hasta luego"); //Caso 2, se cierra el bucle
        break;
  
      default:
        alert("Opción inválida. Debe elegir 1 o 2."); //Caso 3, en caso de meter un numero iválido
    }
  
  } while (opcion !== "2");
  
  
  console.log("Historial de conversiones:");// Se muestran las conversiones en la cosnsola al inspeccionar la pagina
  console.log(history);