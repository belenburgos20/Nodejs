const path = require("node:path")

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join

const filepath = path.join("carpeta", "subcarpeta", "archivo.txt");
console.log(filepath);
// ruta absoluta

const base = path.basename("/tem/mi/carpeta/subcarpeta/archivo.txt");
console.log(base); // archivo.txt
// ruta absoluta
const filename = path.basename("/tem/mi/carpeta/subcarpeta/archivo.txt", ".txt");
console.log(filename); // archivo

const extension = path.extname("/tem/mi/carpeta/subcarpeta/archivo.txt");
console.log(extension); // .txt