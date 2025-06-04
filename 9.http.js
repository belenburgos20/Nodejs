const http = require('node:http');
const { findAvailablePort } = require('./10.free-port.js');

const server = http.createServer((req, res) => {
  console.log('Petición recibida:');
  res.end('Hola, mundo desde Node.js!');
})

findAvailablePort(1234).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  })
})
