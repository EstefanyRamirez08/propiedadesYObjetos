// Ejercicio 2: Lista de Compras (Array + for)
// Gestionar una lista dinámica de productos.
// Tareas:
// 1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2.Añade 3 productos con el método agregar().
// 3.Implementa el método mostrar() que use un for para listar los productos numerados (ej:
// "1. Manzanas").
// 4.Muestra la lista completa en consola.

let ListaCompras = function() {
    this.productos = [];

    this.agregar = function(producto) {
        this.productos.push(producto);
    };

    this.mostrar = function() {
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${i + 1}. ${this.productos[i]}`);
        }
    };
};

const lista = new ListaCompras();
lista.agregar("Manzanas");
lista.agregar("Naranjas");
lista.agregar("Limón");
lista.mostrar();