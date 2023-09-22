/*
let edad = 19   
console.log(edad)

if(edad >18){
    console.log('es mayor de edad')
}else{
    console.log('es menor de edad')
}



let edad = 18 

console.log(edad)

if(edad > 18){
    console.log('Es mayor de edad')
}else{
    console.log('Es menor de edad')
}
*/
/*
let edad = parseInt(prompt('Digite su edad'))

if(edad >= 14 && edad <= 17){
   
    alert('Eres un adolecente')

}else if(edad >= 18 && edad <= 25){
    alert('Eres un joven adulto')

}else if(edad >=  26){
    alert('Eres un adulto')

}

let pais = prompt('Digale el pais de naciment (Colombia, Peru, EEUU, Inglatera)')

if(pais == 'Colombia' || pais == 'Peru'){
    alert('Tu pais es de habla hispana')
}else if(pais == 'EEUU' || pais == 'Inglatera'){

}


let edad = parseInt(prompt('Digite su edad:'))

if(!(edad >= 18)){
    nombreAcudiente = prompt('Digale el nombre de su acudiente:')
    alert(`Su edad ${nombreAcudiente} quedo registrado con existo`)
}else{
    alert('Usted no necesita acudiente')
}

*/
let edad = parseInt(prompt('¿Cuantos años tiene?'))
let diabetes = parseInt(prompt('Digite el nombre 1 si esta enfermo de diabetes o digite si no lo esta'))

if(edad >= 50){
    if(diabetes == 1){
        alert('Eres una persona enferma de diabetes y tienes mas de 50 años, TU TURNO ES PRIORITARIO')
    }else{
        alert('Eres uan persona que tiene mas de 50 años SIN diabetes, TU TURNO ES NORMAL')
    }


}else{
    alert('Eres una persona menor de 50 años, TU TURNO ES NORMAL')
}
/*
let dia = parseInt(prompt('Digale el numero de un dia de la semana'))
switch (dia) {
    case 1:
        alert('LUNES')
        break;
    case 2:
        alert('MARTES')
        break;
    case 3:
        alert('MIERCOLES')
        break;
    case 4:
        alert('JUEVES')
        break;
    case 5:
        alert('VIERNES')
        break;
    case 6:
        alert('SABADO')
        break;
    case 7:
        alert('DOMINGO')
        break;                    
}*/



