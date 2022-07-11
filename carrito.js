class Producto{
    constructor(id, nombre, cantidad, precio, foto){
        this.id=id
        this.nombre=nombre
        this.cantidad=cantidad
        this.precio=precio
        this.foto=foto
    }
}
class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }
}
calcularTotal() ; {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return total;
}



misProductos.push(resinaPequenia)
misProductos.push(resinaNormal)
misProductos.push(resinaGrande)
misProductos.push(tinteNegro)
misProductos.push(tinteEleccion)

function renderCard(producto) {
    let cardRendered = `    
    <div class="card m-3" style="width: 18rem;">
        <img src="./images/${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    `;
    return cardRendered;
}

function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCard(producto);
    })
    divCarrito.innerHTML += `<h1>Precio Total: $ ${carrito.calcularTotal()}</h1>`
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
let misProductos = []
let resinaPequenia = new Producto(1, "Resina pequeña","1 litro", 200, "resinachica.jpg")
let resinaNormal = new Producto(2, "Resina normal","3 litros", 700, "medi.jpg")
let resinaGrande = new Producto(3, "Resina grande","10 litros", 1200, "gr.jpg")
let tinteNegro = new Producto(4, "Tinte negro","100ml", 200, "l.jpg")
let tinteEleccion = new Producto(5, "Tinte a eleccion","1 litro", 400, "ñ.jpg")
catalogoProductos.push(resinaPequenia);
catalogoProductos.push(resinaNormal);
catalogoProductos.push(resinaGrande);
catalogoProductos.push(tinteNegro);
catalogoProductos.push(tinteEleccion);

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