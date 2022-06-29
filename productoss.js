class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

const resinita = new Producto ("Resinita", 100, '1 Lts')
const resinota = new Producto ("Resinota", 400, '4 Lts')

let final = []

function alerta(){
    alert(`Usted compro: \n ${final}`)

}

function compra(){
        let opciones = parseFloat(prompt(`Hola! Bienvenido a JULI STORE, Nuestras opciones son: \n 1. ${resinita.nombre}: $${resinita.precio} \n 2. ${resinota.nombre}: $${resinota.precio}`))
        switch(opciones){
            case 1:
                final.push(`${resinita.nombre} ${resinita.cantidad}: ${resinita.precio}\n`)
                alerta()
                break
            case 2:
                final.push(`${resinota.nombre} ${resinota.cantidad}: ${resinota.precio}\n`)
                alerta()
                break
            default:
                alert("Por favor, seleccione una opcion valida")
                compra()
        }
}
compra()