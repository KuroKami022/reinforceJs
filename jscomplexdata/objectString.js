//object strings - main objective is to manipulate strings using object methods
const stringObjeto=new String('Soy un string objeto')
console.log(typeof stringObjeto)

//character access
const saludo = 'Hola. ¿Como estas?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Como'))
console.log(saludo.indexOf('como')) // unexistent
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5)) // cut trough just a slice of the string
console.log(saludo.length) // string size on idex

console.log(saludo.toLocaleUpperCase())//text on uppercases
console.log(saludo.toLocaleLowerCase())// text on lowercases

const saludoDividido=saludo.split(' ')// split into multiple strings based on your selection
console.log(saludoDividido)
console.log(saludoDividido[1])// takes on the index of the string created by split

const saludoConEspacios=' Hola Mundo '
const saludoSinEspacios=saludoConEspacios.trim()// trim removes unused spaces
console.log(saludoSinEspacios)

const saludoOriginal='Hola Mundo'
const nuevoSaludo=saludoOriginal.replace('Mundo','🌍') // replaces a part of the string
console.log(nuevoSaludo)