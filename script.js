function carregar() {
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 6 && hora < 12) {
        document.body.style.backgroundImage = "url('imagens/dunadia.jpg')";
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundImage = "url('imagens/dunatarde.jpg')";
    } else {
        document.body.style.backgroundImage = "url('imagens/dunanoite.jpg')";
    }
}