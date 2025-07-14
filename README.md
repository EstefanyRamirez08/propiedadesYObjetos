#  Laboratorio: Propiedades y Objetos en JavaScript

Este repositorio contiene la solución a los ejercicios del **Laboratorio: Propiedades y Objetos en JavaScript**, donde se ponen en práctica conceptos básicos como objetos, métodos, condicionales, arrays y bucles.

##  Ejercicios

###  Ejercicio 1: Libro (Objeto básico + if)
- Crea un sistema de préstamo de libros.
- Usa un constructor `Libro` con propiedades `título`, `autor` y `prestado = false`.
- Método `prestar()`:
  - Si el libro no está prestado, lo presta y muestra un mensaje.
  - Si ya está prestado, muestra un mensaje de error.
- Prueba prestar el mismo libro dos veces y observa los mensajes.

###  Ejercicio 2: Lista de Compras (Array + for)
- Constructor `ListaCompras` con una propiedad `productos` (array vacío).
- Método `agregar()` para añadir productos.
- Método `mostrar()` para listar los productos numerados.
- Prueba añadiendo al menos 3 productos y mostrando la lista.

###  Ejercicio 3: Reproductor de Música
- Constructor `Reproductor` con propiedad `estado` inicial: `"detenido"`.
- Métodos:
  - `play()`: cambia a `"reproduciendo"` si estaba `"detenido"` o `"pausado"`, o muestra un mensaje si ya estaba reproduciendo.
  - `pausar()`: cambia a `"pausado"` si estaba reproduciendo, o muestra un mensaje si no.
  - `detener()`: cambia a `"detenido"` y muestra un mensaje.

###  Ejercicio 4: Carrito de Compras con Descuentos
- Constructor o clase `Carrito` con:
  - Propiedad `productos` (array vacío).
  - Propiedad `total` (inicialmente `0`).
- Métodos:
  - `agregarProducto(nombre, precio)`: añade productos al carrito y suma al total.
  - `calcularDescuento()`:
    - Si el total > 100, aplica 10% de descuento.
    - Si el total > 50 y ≤ 100, aplica 5% de descuento.
    - Si ≤ 50, muestra el total sin descuento.

---

##  Cómo ejecutar
Puedes ejecutar los archivos con **Node.js**, por ejemplo:
```bash
node ejercicioUno.js
node ejercicioDos.js
node ejercicioTres.js
node ejercicioCuatro.js

