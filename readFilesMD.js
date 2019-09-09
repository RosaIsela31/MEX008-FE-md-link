const fs = require('fs');
// Función para leer los archivos .md
// Requiere el resultado de la función findFilesMD
const readFilesMD = (path) => {
  const newPromise = new Promise((resolve, reject) => {
    // readFile recibe 3 parametros, 1.la ruta, 2.La codificación en caso de ser un string, 3. una callback
    //data es el contenido del archivo
    fs.readFile(`${path}`, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
  return newPromise;
}

module.exports = readFilesMD;
