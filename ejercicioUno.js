// Ejercicio 1: Libro (Objeto básico + if)
// Crear un sistema de préstamo de libros.
// Tareas:
// 1.Usa el constructor Libro para crear un objeto con título y autor.
// 2.Agrega una propiedad prestado = false.
// 3.Implementa el método prestar() que:
// •Cambie prestado a true si el libro está disponible.
// •Muestre un mensaje de error si ya está prestado (usando if).
// 4.Prueba prestar el libro dos veces y observa los mensajes.

let Libro = function(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function() {
        if (!this.prestado) {
            this.prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`Error: El libro "${this.titulo}" ya está prestado.`);
        }
    };
};

let libro1 = new Libro("Alicia en el País de las Maravillas", "Lewis Carroll");
libro1.prestar();
libro1.prestar(); 
