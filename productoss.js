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
const LOSPRODUCTOS = [
    {
        id: 1,
        nombre: "ResinaChica",
        cantidad: "20litros",
        color: "negra",
        precio: 200
    }
]
const ELPROCUTO = [
    {
        id: 2,
        nombre: "ResinaGrande",
        cantidad: "100litros",
        color: "A eleccion",
        precio: 600
    }
]
function resinass(){
    let total = 0
        let nombreProducto = (prompt(`Tenemos: 
        \n 1-Resina barata
        \n 2-Resina cara.
        \n Te mostramos las cualidades de la que selecciones`))
        if(nombreProducto == "1"){
            let unFinal= LOSPRODUCTOS.map(x => x.precio)
            let uniFinal= LOSPRODUCTOS.map(x => x.color)
            let uneFinal= LOSPRODUCTOS.map(x => x.cantidad)
            let tamanio = parseInt(prompt("Cuantas queres"))
            if(!(isNaN(tamanio))){
                alert("El precio es de cada una es "+ unFinal + "la cantidad que trae es " + uneFinal + " el color que trae es " + uniFinal)
                let subtotal =  unFinal * tamanio
                alert(`Usted va a pagar: $${subtotal} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante. No tenemos mas stock que una`)
            } else{
                alert("No ingresaste un numero")
                resinass()
            }
        }else if (nombreProducto == '2' ){
            let unFinal= ELPROCUTO.map(x => x.precio)
            let uniFinal= ELPROCUTO.map(x => x.color)
            let uneFinal= ELPROCUTO.map(x => x.cantidad)
            let tamanio = parseInt(prompt("Cuantas queres"))
            if(!(isNaN(tamanio))){
            alert("El precio es de cada una es "+ unFinal + "la cantidad que trae es " + uneFinal + " el color que trae es " + uniFinal)
            let subtotal =  unFinal * tamanio
            alert(`Usted va a pagar: $${subtotal} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante. No tenemos mas stock que una`)
        } else{
            alert("No ingresaste un numero")
            resinass()
        }
    } else{
            alert("Ingresa una de las opciones")
            resinas ()
        }
}resinass()


// let productosEnHtml = document.getElementById("productoresina")

// for(const TODORESINA of ELPROCUTO){
//     let honda=document.createElement("span")
//     honda.innerHTML= 
//     `<p> ${TODORESINA.nombre
//     } </p>
//     <p> ${TODORESINA.color
//     } </p>
//     <p> ${TODORESINA.cantidad
//     } </p>
//     <p> ${TODORESINA.precio
//     } </p>
//     `
//     productosEnHtml.append(honda)
// }
