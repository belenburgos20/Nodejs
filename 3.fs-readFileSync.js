const fs = require("node:fs");


console.log("Leyendo el primer archivo...");
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log("primer texto:", text);

console.log('Hcer cosas mientras se lee el archivo...');

console.log("Leyendo el segundo archivo....");
const secondtext = fs.readFileSync("./archivo2.txt", "utf-8");
console.log("segundo texto:", secondtext);