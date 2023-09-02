//Ejercicio 2
//Crea una clase Producto con propiedades como nombre, precio, cantidad y descuento.
class Producto {
  constructor(nombre, precio, cantidad, descuento) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.descuento = descuento;
  }
  precioFinal() {
    return this.cantidad * (this.precio * (1 - this.descuento));
  }
}
//A continuación, crea un array de objetos Producto
const productos = [
  new Producto("Camiseta", 20.0, 2, 0.1),
  new Producto("Pantalón", 50.0, 1, 0.2),
  new Producto("Zapatos", 80.0, 1, 0.15),
  new Producto("Bolso", 30.0, 3, 0.05),
  new Producto("Gorra", 10.0, 4, 0.0),
];
//y utiliza métodos para calcular el precio total de la compra y aplicar descuentos.
const total = productos.reduce((subtotal, producto) => {
  const precioFinal = producto.precioFinal();
  console.log(producto.nombre, precioFinal);
  return subtotal + precioFinal;
}, 0);
console.log(`Total: ${total}`);
