
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('ires')
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

//Se o numero existe retunr true caso não retunr false
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    //Criando função dentro do if para verificar se o input do usuario é numero e função parea verificar se o numero digita ja existe na lista
    if(isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }

}