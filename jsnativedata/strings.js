// string creation
const primeraOpcion='Comillas simples'
const segundaOpcion="Comillas simples"
const terceraOpcion=`Comillas simples`

// concatenation using +
const direccion='Calle falsa 123'
const ciudad='Springfield'
const direccionCompleta='Mi direccion completa es '+direccion+ciudad
console.log(direccionCompleta)
const direccionCompletaConEspacio='Mi direccion completa es '+direccion+' '+ciudad
console.log(direccionCompletaConEspacio)

// concatenation using template literals
const nombre='Estefany'
const pais='🇻🇪'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// concatenation using join
const primeraParte='Me encanta'
const segundaParte='la gente de'
const terceraParte='🇮🇹'
const pensamiento=[primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' ðŸŒ¯ '))

// concatenation using concat method
const hobbie1='correr'
const hobbie2='leer'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
console.log(hobbies)

// scape caracters
const escapeAlternativo="I'm Software Engineer"
const escapeBarraInvertida='I\'m Software Engineer'
const escapeComillaInvertida=`I'm Software Engineer`

// line shift
const poema='Las rosas son rojas,\n'+
'Las violetas son azules,\n'+
'Caracter inesperado,\n'+
'En la linea 86.'
console.log(poema)

//double line shift
const poema2='Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'
console.log(poema2)

//template literals string
const poema3=`Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`
console.log(poema3)