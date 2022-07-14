let catalogo = []
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
// function hacercarrito(){
// const SELECCIONARCARRITO = document.getElementById("carrrito")
// let carito = []
// let productoSeleccionado 
// let todo = productoSeleccionado + SELECCIONARCARRITO
// let todotodo = todo + carito
// }

let botoncito = document.querySelector("#botonDecompra")

class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = []
    }
  
    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio
        }
        return total
    }
  }
  
  catalogo.push(LISTAPRODUCTOS)
  console.log(catalogo)

  function limpiarCarrito() {
    LISTAPRODUCTOS.innerHTML = "";
  }
  
  function actualizarCarrito(carrito) {
    carrito.productos.forEach(producto => {
      const row = document.createElement("tr")
      row.innerHTML = 
        `<td><img src="${producto.foto}" class="fotoCarrito"></td>
          <td>${producto.nombre} <br> $${producto.precio}</td>`
      listaProductos.appendChild(row)
    })
    listaProductos.innerHTML += `<p  class="total">Precio Total: $ ${carrito.calcularTotal()}</p>`
  }

  let carrito = new Carrito(1);
let arrayDeBotones = Array.from(botoncito)
arrayDeBotones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    let productoElegido = catalogo.find(producto => producto.id == producto.precio)
    carrito.productos.push(productoElegido)
    limpiarCarrito()
    actualizarCarrito(carrito)
})
})

addEventListener('DOMContentLoaded',()=>{
    const btnMenu = document.getElementById("carrrito")
    if(btnMenu){
        btnMenu.addEventListener('click',()=>{
            const menuItems = document.getElementById('carrrito')
            
        })
    }
  })

