// class Producto {
//     constructor(nombre, precioCompra, precioVenta, cantidad) {
//       this.nombre = nombre.toUpperCase();
//       this.precioCompra = precioCompra;
//       this.precioVenta = precioVenta;
//       this.cantidad = cantidad;
//     }
//     calcularCosto = () => this.cantidad * this.precioCompra;
//   }
  
//   function agregarProductos() {
//     let numeroProductos = parseInt(
//       prompt("Cuantos productos necesita registrar")
//     );
//     let productos = [];
//     for (let index = 0; index < numeroProductos; index++) {
//       let nombre = prompt("Ingrese el nombre");
//       let precioCompra = prompt("Ingrese el precio de compra");
//       let precioVenta = prompt("Ingrese el precio de venta");
//       let cantidad = prompt("Ingrese la cantidad");
//       let productoARegistrar = new Producto(
//         nombre,
//         precioCompra,
//         precioVenta,
//         cantidad
//       );
//       productos.push(productoARegistrar);
//     }
//     return productos;
//   }
  
//   function mostrarProductos(productos) {
//     for (const producto of productos) {
//       console.log(producto);
//       console.log(producto.nombre);
//     }
//   }
  
//   function calcularCosto(productos) {
//     let sumatoriaCosto = 0;
//     for (const producto of productos) {
//       sumatoriaCosto += producto.calcularCosto();
//     }
//     return sumatoriaCosto
//   }
  
//   function main() {
//     let productos = agregarProductos();
//     mostrarProductos(productos);
//     alert("El costo total de los productos es: " + calcularCosto(productos))
//   }
  
//   main();

 class Producto{
     constructor(precio, color, cantidad){
     this.elPrecio = precio;
     this.elcolor= color;
     this.volumen = cantidad;
}
 }

const RESINITA = new Producto(100, "Negra", "1Litro" );  
console.log(RESINITA.elPrecio);
 console.log(RESINITA.elcolor);
 console.log(RESINITA.volumen);
 const RESINOTA = new Producto(400, "A eleccion", "4Litros" );
 console.log(RESINOTA.elPrecio);
 console.log(RESINOTA.elcolor);
 console.log(RESINOTA.volumen);

RESINITA.push(`${RESINITA.elPrecio}: ${RESINITA.elcolor}: ${RESINITA.volumen}` )

