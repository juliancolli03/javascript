function saludar(){
    let nombre;
    do{
        nombre=(prompt("Como es tu nombre"));
    } while (!(isNaN)(nombre))
    
}
saludar()

function repreguntar(){
    let repregunta = prompt('¿Desea comprar algo? (si/no)')
    if(repregunta == 'no'){
        alert("Ok gracias")
        return "gracias" + nombre; 
    }else if(repregunta == 'si'){
        alert('ok')
    }else{
        alert('Ingrese una opción valida')
        repreguntar()
    }

}
repreguntar()
function resinas(literal) {
    this.nombre = literal.nombre;
    this.precio   = literal.precio;
    this.color  = literal.color;
}

// let array = []
// const producta = [{ nombre: "Resinachica", precio: 391, color: "Negra" },
//                 { nombre: "Resinagrande", precio: 3222, color: "Blanca" }
// ]
// for(const nombre of producta){
// console.log(nombre.producta)
// }
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

function resinass(){
    let medioPago = (prompt(`Tenemos: 
    \n 1-Resina barata
    \n 2-Resina cara`))
    if(medioPago == "1"){
        alert (resinita.elPrecio + resinita.elcolor + resinita.volumen)
        let precioResinachica = 200
        alert(`Usted va a pagar: $${precioResinachica} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante. No tenemos mas stock que una`)
    }else if (medioPago == '2' ){
        
        let resinaGrande = 300
    let cuanttas = parseInt(prompt("cuantas quiere?"))
    let precioFinal = resinaGrande * cuanttas
    alert(`Usted va a pagar: $${precioFinal} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante`)
    }
    else{
        alert("Ingresa una de las opciones")
        resinass()
    }
}resinass()