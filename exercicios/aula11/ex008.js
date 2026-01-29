

let vel = document.getElementById('txtvel')
let ver = document.getElementById('btver')


ver.addEventListener('click', resultado)

function resultado() {
    
    const velocidade = Number(vel.value);

    if (velocidade <= 60) {
        console.log(`A velocidade é ${velocidade}Km/h, Dentro do limite de velocidade`)
    }else {
        console.log(`A velocidade é ${velocidade}Km/h, Voce ultrapassou a velocidade permitida`)
    }
}