const { ejecutarSumari } = require('./main.js')


let texto = `
Konrad Zuse propuso la idea de los primeros idiomas de alto nivel.

Desarrolló el Plankalkül entre 1943 y 1945, pero por alguna razón, no fue implementado.

Fue en 1949 cuando se creó el primer lenguaje de programación de alto nivel para computadoras electrónicas.

John Mauchly propuso el Short Code, originalmente conocido como código breve y fue implementado por William F Schmidt.

El código corto fue el primer lenguaje de programación funcional. Se representaba en una expresión matemática comprensible para los humanos.

Pero tenía una gran desventaja.

Un programa tiene que ser traducido al código de la máquina cada vez que se ejecuta. Este era un proceso mucho más lento.

En 1952, Autocode fue desarrollado por Alick Glennie.

Fue el primer lenguaje compilado que se convierte directamente en código máquina usando un compilador.

Es la segunda versión, Mark 1 autocode, fue desarrollado dos años después por R.A. Brooker para Mark 1.

El autocódigo fue mejor que sus predecesores, pero aún así no logró ganar popularidad.

FORTRAN fue el primer lenguaje de programación popular que fue desarrollado en 1954 por un equipo de IBM.

Es el lenguaje de programación de alto nivel más antiguo que aún se utiliza. Todavía había tiempo para que salieran los lenguajes de alto nivel como Java, C y C++.

Pero su punto de partida fue desarrollado en 1958 por un comité científico de investigación y usos científicos.

Desarrollaron un lenguaje conocido como Algol.

Java y muchos otros lenguajes de alto nivel están basados de alguna manera en Algol.


`
let summarise = ejecutarSumari(texto)

console.log(summarise)