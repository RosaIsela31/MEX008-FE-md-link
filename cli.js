#!/usr/bin/env node
const findFilesMD = require('./findFilesMD');
const readFilesMD = require('./readFilesMD');
const findUrls = require('./findUrls');
const statusCode = require('./statusCode');
const validate = require('./validateUrls');
const path1 = process.argv[2];// apuntando al archivo que ingrese el usuario
// process.argv es una matriz que contiene los argumentos de la línea de comandos

if (process.argv[3] == '--validate') {
  findFilesMD(path1).then((result) => {
    result.forEach(element => {
      readFilesMD(element)
        .then(findUrls)
        .then(statusCode)
        .then(validate)
        .catch(err => (err))
    });
  });
}
else {
  findFilesMD(path1).then((result) => {
    result.forEach(element => {
      readFilesMD(element)
        .then(findUrls)
        .then((data) => {
          statusCode(data)
          console.log((data))
        })
        .catch(err => (err))
    })
  })
}
