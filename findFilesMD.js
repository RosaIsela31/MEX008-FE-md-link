const fs = require('fs'); // modulo de node, permite la interacción con los archivos de la compu 
const path = require('path'); // modulo de node, permite trabajar con rutas 

// Función  para encontrar archivos .md asincrónamente
const findFilesMD = (userPath) => {
      const newArr = [];
      return new Promise((resolve, reject) => {
        // .lstatSync: lee información sobre el archivo especificado en el parámetro de ruta
        // .isDirectory: Devuelve verdadero si la ruta es del archivo es Directorio
        const isDirectory = fs.lstatSync(userPath).isDirectory();

        if (isDirectory) {
          // .readdir: obtiene una ruta y una callback como parámetros. Se una pala leer un directorio y los archivos dentro de el.
          fs.readdir(userPath, (err, data) => {
            // data son todos los archivos dentro del directorio
            if (err) {
              reject(err);
            } else {
              const filesFound = data;
              for (let i = 0; i < filesFound.length; i++) {
                if (filesFound[i].match(/.md/g)) {
                  // .resolve resuelve la ruta a absoluta
                  const pathResult = path.resolve(filesFound[i])
                  newArr.push(pathResult);
                };
              };
              resolve(newArr);
            };
          });
        } else if (userPath.match(/.md/g)) {
          const fileResult = path.resolve(userPath);
          newArr.push(fileResult);
          resolve(newArr)
        };
        return newArr;
      }); 
      };

      module.exports = findFilesMD;