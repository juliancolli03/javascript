const LISTAPRODUCTOS = [{
    id: 1, nombre: "Resina pequeña", cantidad: "1 litro", precio: 200, foto:"resinachica.jpg"
},
{
    id: 2, nombre: "Resina normal", cantidad: "3 litros", precio: 600, foto:"resinachica.jpg"
},
{
    id: 3, nombre: "Resina grande", cantidad: "10 litros", precio: 1000, foto:"gr.jpg"
},
{
    id: 4, nombre: "Tinte negro", cantidad: "1 litro", precio: 200, foto:"resinachica.jpg"
},
{
    id: 5, nombre: "Tinte a eleccion", cantidad: "1 litro", precio: 500, foto:"resinachica.jpg"
},]
let meterEnHtml = document.getElementById("cards")

LISTAPRODUCTOS.forEach((itemm)=>renderCard(itemm))

function renderCard(producto) {
    let cardRendered = `    
    <div class="card m-3" style="width: 18rem;">
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    `;
meterEnHtml.innerHTML+=cardRendered
}
