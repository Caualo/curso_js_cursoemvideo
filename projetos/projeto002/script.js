function verificar() {
    let data = new Date()
    //Armazenando o ano atual para calcular com ano informado depois
    let ano = data.getFullYear()
    //Armazenando o ano informado pelo usuario
    let fano = document.getElementById('txtano')
    //Variavel que vai mostar o resultado
    let res = document.querySelector('div#res')
    //Criando caso de uso de erro,Não preencher o campo ou informar um ano maior que o atual
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente ')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        //Usando o create para criar um elemento img no HTML
        let img = document.createElement('img')
        //Criando um ID para o elemento img criado
        img.setAttribute('id', 'foto')
        //Declarando genero como vazio para ser inforado depois
        let genero = ''
        //Posição 0 é marculino e usando checked para checar
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.jpg')
            }else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else {
            genero = "Mulher"
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemF.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulta.jpg')
            }else {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero}, com ${idade} anos.`
        res.appendChild(img)
    }
}