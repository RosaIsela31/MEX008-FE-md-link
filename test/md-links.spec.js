const mdLinks1 = require('../index.js/index.js.js');
const mdLinks = require('../mdLinks.js/index.js.js');

// A. Un test que me compruebe que es una función √
// B. Un test que me compruebe que se esta retornando una promesa
// C. Un test que me indique un error en caso de no recibir argumentos
// D. Un test que me compruebe que se está recibiendo una ruta absoluta
// E. Un test que indentifique que se esta recibiendo un archivo .md

describe('mdLinks', () => {

  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});

