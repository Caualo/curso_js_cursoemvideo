

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
        //Adicionando o numero ao array
        valores.push(Number(num.value))
        //Variavel "item" vai receber o elemento option html
        let item = document.createElement('option')
        //Texto do elemento option
        item.text = `Valor ${num.value} adicionado.`
        //Adicionando dentro da lista no html o elemento option através da varivael "item"
        lista.appendChild(item)
    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    //Limpando o campo de input
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }else {
        //Total de numero informados
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let posi in valores) {
            soma += valores[posi]
            if(valores[posi] > maior) 
                maior = valores[posi]
            if(valores[posi] < menor)
                menor = valores[posi]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos, ${soma}</p>`
        res.innerHTML += `<p>A media entre os numero é ${media}</p>`

    }
}