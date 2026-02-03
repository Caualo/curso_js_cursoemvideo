function contar() {
    //Mesmo o input no HTMl sendo um type"number" o input do user n vem como numero então sempre é preciso converter
    let inicio = document.getElementById('ini')  
    let fim = document.getElementById('ifim')         
    let passo = document.getElementById('ipas')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        alert('[ERRO] digite todos os campos')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f) {
             for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
            }
        }else {
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
            }
        }

       
    }
}
        