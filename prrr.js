const LISTAPRODUCTOS = [{
    id: 1, nombre: "Resina pequeña", cantidad: "1 litro", precio: 200, foto:"resinachica.jpg"
},
{
    id: 2, nombre: "Resina normal", cantidad: "3 litros", precio: 600, foto:"medi.jpg"
},
{
    id: 3, nombre: "Resina grande", cantidad: "10 litros", precio: 1000, foto:"gr.jpg"
},
{
    id: 4, nombre: "Tinte negro", cantidad: "1 litro", precio: 200, foto:"ñ.jpg"
},
{
    id: 5, nombre: "Tinte a eleccion", cantidad: "1 litro", precio: 500, foto:"l.jpg"
},]

class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precioKilo;
        }
        return total;
    }

}

function limpiarCarrito() {
    let divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
    let divCarrito = document.getElementById("carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCard(producto);
    })
    divCarrito.innerHTML += `<h1>Precio Total: $ ${carrito.calcularTotal()}</h1>`
}

function renovarStorage() {
    localStorage.removeItem("carrito"); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});


let meterEnHtml = document.getElementById("cards")

LISTAPRODUCTOS.forEach((itemm)=>renderCard(itemm))

function renderCard(producto) {
    let cardRendered = `    
    <div class="card m-3" style="width: 18rem;">
        <img src="${producto.foto}"height="300px" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text"> Cantidad: ${producto.cantidad}</p>
            <p class="card-text">$ ${producto.precio}</p>
            <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    `;
    meterEnHtml.innerHTML+=cardRendered
}

let carrito = new Carrito(1);
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        limpiarCarrito();
        actualizarCarrito(carrito);
        renovarStorage();
    })
});