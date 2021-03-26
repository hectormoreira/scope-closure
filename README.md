# Scope - Closure en JavaScript
Repo del [Curso de Closures y Scope en JavaScript](https://platzi.com/clases/scope/) - Platzi


## Conceptos
**Scope**: Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

**Global Scope** : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

- Con var podemos re-asignar una variable pero es una mala práctica.
- Con let y const no podemos re-asignar, aparecerá un error.
- Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
- Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
- La doble asignación de una variable también es una mala práctica.

**El Local Scope**: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

**El ambito lexico**: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.

**Function scope**: Scope local disponibles solo dentro de las funciones.

**Block scope**: Variables disponibles dentro de un bloque {} o por ejemplo un bloque if.

**Closure**: es la combinación de una función y el ámbito léxico en la cual ha sido declarada dicha función. En simples palabras, incluso recuerda el ámbito en el cual ha sido creado.

**Ambito lexico**: las funciones que se ejecutan utilizando las cadenas del alcance donde está vigente.



## Recursos
- Extensión [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)