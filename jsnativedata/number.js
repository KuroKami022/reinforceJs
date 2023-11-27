// whole or fractioned
const entero=42
const decimal=3.14
console.log(typeof entero,typeof decimal)

//science notation
const cientifico=5e3

//infinite
const infinito=Infinity

//not numbers
const noEsUnNumero=NaN

// arithmetic operations

// sum + minus - multiply * divide /
const suma=3+4
const resta=4-4
const mutiplicacion=4*7
const division=16/2

//module and exponentialization
const modulo=15%8 //to know if a number is multiplyable
const exponenciacion=2**3

//presicion
const resultado=0.1+0.2
console.log(resultado) // presicion issues
console.log(resultado.toFixed(1)) // to handle presicion issues
console.log(resultado===0.3) // to display equality

//advanced math functions
const raizCuadrada=Math.sqrt(16) //square root
const valorAbsoluto=Math.abs(-7) //absolute value
const aleatorio=Math.random() //sort random
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)