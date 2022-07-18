/* CLASES */

class Producto {
    constructor(id, nombre, cantidad, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;
    }
}
class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return total;
    }

}

/* FUNCIONES */

function renderCard(producto) {
    let cardRendered = `    
    <div class="card m-3" style="width: 18rem;">
        <img src="${producto.imagen}"height="300px" class="card-img-top cardImg" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}. ${producto.nombre}  <br>
            <div class ="mt-1">  Cantidad: ${producto.cantidad} </div>
            <hr>
            </h5>
            <p class="card-text fs-4">$ ${producto.precio}</p>
            <a href="#" class="btn btn-success botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    `;
    return cardRendered;
}

function renderCardParaCarro(producto) {
    let cardRendered = `
    <div class ="" style="background: gray;">    
    <div class="card m-3" style="width: 16rem; padding: 1rem;">
        <img src="${producto.imagen} "height="100px" class="card-img-top cardImg" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <a href="#" class="btn btn-success eliminar" id="${producto.id} eliminar">Eliminar del carro</a>
        </div>
    </div>
    </div>
    `;
    return cardRendered;
}

function limpiarCarrito() {
    let divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = "";
    console.log(divCarrito)
}
function actualizarCarrito(carrito) {
    let divCarrito = document.getElementById("carrito");
    carrito.productos.forEach(resinas => {
        divCarrito.innerHTML += renderCardParaCarro(resinas);
    })
    divCarrito.innerHTML += `<h1 class="total">Precio Total: $ ${carrito.calcularTotal()}</h1>`
}

 function renovarStorage() {
     localStorage.removeItem("carrito"); 
     localStorage.setItem("carrito", JSON.stringify(carrito));
 }


/* Cargar carrito existente */
window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});

/* Generación de mi catálogo de productos */
let catalogoProductos = [];
let producto1 = new Producto(1, "Resina pequeña", "1 litro", 200, "resinachica.jpg");
let producto2 = new Producto( 2, "Resina normal", "3 litros", 600, "medi.jpg");
let producto3 = new Producto(3, "Resina grande", "10 litros", 1000, "gr.jpg");
let producto4 = new Producto(4, "Tinte negro", "1 litro", 200, "ñ.jpg");
let producto5 = new Producto(5, "Tinte a eleccion", "1 litro", 500, "l.jpg");

catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);
catalogoProductos.push(producto4);
catalogoProductos.push(producto5);

/* Generar mis tarjetas de productos */
let cardsDiv = document.querySelector("#cards");
catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
})

/* Ingresar al carrito un producto */
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



