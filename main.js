
let numero = parseFloat (prompt ("ingrese un numero de las tablas de 1 solo decimal"));
if(numero <=9){
    for (let i = 1; i <=10; i++){
        let resultado = numero * i
        alert (numero + "x"+ i +" = "+ resultado)
    }
    }else if (numero >=10){
        alert (numero + " no esta dentro de las tablas de un solo decimal")
    }else if (numero = ""){
        alert ("dejaste el espacio vacio")
    }
    else{
        alert ("escribiste una palabra o letra.")
    }


