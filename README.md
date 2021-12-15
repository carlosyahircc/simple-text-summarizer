# Simple Summarize Text

Summarize text quickly to make tasks easier.

View https://gitlab.com/Tapioka0/api-sumari

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install Simple Summarize Text.

It works in Spanish and English, soon it will support more languages, please be patient.



```bash
npm install simple-text-summarizer
```

## Usage

```js
const { runSummarize } = require('simple-text-summarizer')

            //Your text
let text = `
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

let summarize = runSummarize(text)
console.log(summarize)


/*  Output

konrad zuse propuso la idea de los primeros idiomas de alto 
nivel  cuando se creó el primer lenguaje de programación de alto nivel para computadoras electrónicas el 
código corto fue 
el primer lenguaje de programación funcional un programa tiene que ser traducido al código de la máquina 
cada vez que se ejecuta  autocode fue desarrollado por alick glennie fue el
 primer lenguaje compilado 
que se convierte directamente en código máquina usando un compilador el autocódigo fue mejor que sus 
predecesores fortran fue el primer lenguaje de programación 
popular que fue desarrollado en  es el lenguaje de programación de alto nivel más antiguo que aún se utiliza  todavía había 
tiempo para que salieran los lenguajes de alto nivel como java pero su punto de partida fue desarrollado en  java y muchos 
otros lenguajes de alto nivel están basados de alguna manera en algol

*/
```


## Coming soon
URLs will soon be supported.



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
