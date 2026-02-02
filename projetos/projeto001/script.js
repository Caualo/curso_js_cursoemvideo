
function carregar() {
    let msg = document.getElementById('msg')
    let foto = document.getElementById('foto')
    let dark = document.getElementById('titulo')
    let data = new Date()
    let hora = data.getHours ()
    if (hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
        foto.src = 'fotoManha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if (hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
        foto.src = 'fotoTarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    }else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
        foto.src = 'fotoNoite.jpg'
        document.body.style.backgroundColor = '#0b024e'
        titulo.style.color = 'white'
    }
}

