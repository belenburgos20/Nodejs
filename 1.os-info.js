const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('---------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPus', os.cpus()) //vamos a poder escalar procesos en Node
console.log('Memoria libre', os.freemem() / 1024 / 1024) //en MB
console.log('Memoria total', os.totalmem() / 1024 / 1024) //en MB
console.log('uptime', os.uptime() / 60 / 60) //en horas
