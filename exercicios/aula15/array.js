

let num = [5, 1, 8]

//Jeito antigo de fazer lopping com arrays
/*for(let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}*/

//Padrão mercado
for(let pos in num) {
    console.log(num[pos])
}

//Buscar a posição do valor que você sabe ter dentro da array
num.indexOf(8)