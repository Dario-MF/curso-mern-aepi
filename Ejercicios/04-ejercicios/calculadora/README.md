# [MEAN] Ejercicios Semana 4

![Calculadora2](https://user-images.githubusercontent.com/44214019/114753075-59d85f00-9d57-11eb-8cb9-e84faad2ef6b.png)

- El ejercicio consiste en la creación de una aplicación de React que represente una calculadora simple.
- La definición de la interfaz gráfica puede basarse en el siguiente esquema (los colores son orientativos ;)).

Funcionalidad interna de la calculadora:
- Todos los botones numéricos y de operaciones deben concatenar su contenido en la etiqueta superior de la calculadora.

- Es decir, si pulso las teclas 3, 7 , + , 6 y 1, el resultado a mostrar en la etiqueta tendría que ser 37+61.

- Cuando pulsamos el botón = se debe solucionar la operación que aparezca dentro de la etiquetasuperior.

    -Para poder llevar a cabo esta operación podemos usar la función eval de Javascript, la cual 
    recibe un string y evalúa la sentencia como si fuese código JS. En este caso, al ser una
    operación matemática nos devolverá el resultado.
    (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/eval).

- Se puede realizar la aplicación a través del mismo componente gestionando los datos a través del estado de
dicho componente.
- Si queremos dar un paso más, se puede componentizar cada una de las partes de la calculadora (los
botones, el visor...)
