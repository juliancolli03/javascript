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


class Producto{
    constructor(precio, color, cantidad){
    this.elPrecio = precio;
    this.elcolor= color;
    this.volumen = cantidad;
}
}

const RESINITA = new Producto(100, "Negra", "1Litro" );  
const RESINOTA = new Producto(400, "A eleccion", "4Litros" );
let final = []
function alerta(){
    alert(`Usted compro: \n ${final}`)
}

function resinass(){
    let medioPago = (prompt(`Tenemos: 
    \n 1-Resina barata
    \n 2-Resina cara`))
    if(medioPago == "1"){
        final.push(`Resina ${RESINITA.elcolor} de ${RESINITA.volumen}\n`)
        alerta()
        alert(`Usted va a pagar: $${RESINITA.elPrecio} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante. No tenemos mas stock que una`)
    }else if (medioPago == '2' ){
        final.push(`Resina ${RESINOTA.elcolor} de ${RESINOTA.volumen}\n`)
        alerta()
    let cuanttas = parseInt(prompt("cuantas quiere?"))
    let precioFinal = 400 * cuanttas
    alert(`Usted va a pagar: $${precioFinal} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante`)
    }
    else{
        alert("Ingresa una de las opciones")
        resinass()
    }
}resinass()