let opciones = prompt('1) Divisa       (ARS -> USD)                                                                         2) Salir');



function convertCurrency(){
    let pesos = prompt(parseInt('Ingrese su cantindad en pesos'));
    let conversion = (pesos/1300);
    return conversion;
    prompt('1) Divisa       (ARS -> USD)                                                                         2) Salir');
 }

 
switch (opciones){
    case 1: while (opciones===1){
        convertCurrency(pesos)
    }

    case 2: alert('Adios');
    break;

    default: alert('Ingrese un numero valido');
}


let datosConversion = {
  tipo: 'divisa',
  entrada: '1300 ARS',
  salida: '1 USD',
  fecha: new Date().toLocaleString()
};