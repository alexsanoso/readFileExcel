//Modulos necesarios para que se realiza la lectura de archivos excel
var fs = require("fs");
var Excel = require("xlsx");


// Lee todos los archivos que hay en la ruta ./
fs.readdir('./', (error, files) => {

    if (error) {
        throw error;
    }
    console.log("---------archivos en la carpeta------");

    console.log(files);

    //Crea el libro de trabajo para la lectura
    let file = Excel.readFile('./files/biografia.xlsx');

    //Define el archivo a leer, 0 por la posicion del archivo en el array
    let customerData = file.Sheets[file.SheetNames[0]];

    //Mapea el archivo xlsx a formato json
    let data = Excel.utils.sheet_to_json(customerData);

    console.log("=====Impresión en formato JSON=================================");
    console.log(data);
});