// Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto
// usando métodos y condicionales (if/else).
// Tareas:
// 1. Crea un objeto Carrito usando una función constructora o clase que tenga:
// •Una propiedad productos (array vacío).
// •Una propiedad total (inicialmente 0).
// 2.Implementa estos métodos:
// •agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
// •calcularDescuento():
// •Si el total es mayor a $100, aplica un 10% de descuento y muestra.
// •Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
// •Si no, mostrar total, sin descuento. 

let Carrito = function() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function(nombre, precio) {
        this.productos.push({ nombre: nombre, precio: precio });
        this.total += precio;
    };

    this.calcularDescuento = function() {
        let descuento = 0;
        if (this.total > 100) {
            descuento = this.total * 0.10;
            console.log(`Total antes de descuento: $${this.total.toFixed(2)}`);
            console.log(`Descuento del 10% aplicado: $${descuento.toFixed(2)}`);
        } else if (this.total > 50 && this.total <= 100) {
            descuento = this.total * 0.05;
            console.log(`Total antes de descuento: $${this.total.toFixed(2)}`);
            console.log(`Descuento del 5% aplicado: $${descuento.toFixed(2)}`);
        } else {
            console.log("No se aplica descuento.");
        }
        console.log(`Total después de descuento: $${(this.total - descuento).toFixed(2)}`);
    };
}

console.log("Carrito de Compras con Descuentos");
console.log("Total mayor a $100");
const carrito = new Carrito();
carrito.agregarProducto("Zapatos", 80);
carrito.agregarProducto("Camisa", 29);
carrito.calcularDescuento();

console.log("\nTotal entre $50 y $100");
const carrito2 = new Carrito();
carrito2.agregarProducto("Pantalones", 60);
carrito2.calcularDescuento();

console.log("\nTotal menor o igual a $50");
const carrito3 = new Carrito();
carrito3.agregarProducto("Reloj", 30);
carrito3.calcularDescuento();