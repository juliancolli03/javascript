function saludar(){
    let nombre = prompt('¿Cómo es tu nombre?')
    if (nombre !== ""){
    alert("Hola " + nombre )
    }
    else{
        alert("No escribiste tu nombre")
        saludar()
    }
}
saludar()

function repreguntar(){
    let repregunta = prompt('¿Desea comprar algo? (si/no)')
    if(repregunta == 'no'){
        alert("Gasta algo dale")
        repreguntar()
    }else if(repregunta == 'si'){
        alert('ok')
    }else{
        alert('Ingrese una opción valida')
        repreguntar()
    }
}
repreguntar()

function resina (){
    let recina = (prompt("Cuanto queres gastar?"))
    if(recina <=10){
        alert ("No podes comprar nada raton")
        resina()
    }
    else{
        alert ("Ok, ahora te muestro los productos")
    }
}
resina()
let impTotal = 0
function resinass(){
    let medioPago = (prompt(`Tenemos: 
    \n 1-Resina de 10 litros
    \n 2-Resina de 20 litros`))
    if(medioPago == '1'){
        alert('Ok, sale 200 pesos')
        let precioResinachica = 200
        alert(`Usted va a pagar: $${precioResinachica} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante. No tenemos mas stock que una`)
    }else if (medioPago == '2' ){
    alert('OK, sale 300 pesos')
    let resinaGrande = 300
    let cuanttas = parseInt(prompt("cuantas quiere?"))
    let precioFinal = resinaGrande * cuanttas
    alert(`Usted va a pagar: $${precioFinal} si esta de acuerdo toque en "Aceptar" y el pago se realiza al instante`)
    }
}resinass()
    
