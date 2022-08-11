function carregar() {
    var data = new Date()
    var hora = data.getHours()

    var t1 = document.getElementById('t1')
    var t2 = document.getElementById('t2')
    var lumi = document.getElementsByClassName('lumi')

    if (hora >= 6 && hora < 12) {
        document.body.style.backgroundImage = "url('imagens/dunadia.jpg')";
        t1.style.color = '#162972';
        t2.style.color = '#162972';
        for (var i = 0; i < lumi.length; i++) {
            lumi[i].style.backgroundColor = '#f1d3a5';
        }

    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundImage = "url('imagens/dunatarde.jpg')";
        t1.style.color = '#1d1742';
        t2.style.color = '#1d1742';
        for (var i = 0; i < lumi.length; i++) {
            lumi[i].style.backgroundColor = '#f8b37e';
        }
    } else {
        document.body.style.backgroundImage = "url('imagens/dunanoite.jpg')";
        t1.style.color = '#24034d';
        t2.style.color = '#24034d';
        for (var i = 0; i < lumi.length; i++) {
            lumi[i].style.backgroundColor = '#d6b6a6';
        }
    }
}