function carregar() {
    var agora = new Date()
    var hora = agora.getHours()

    var t2 = document.getElementsByClassName('t2')
    var lumi = document.getElementsByClassName('lumi')
    var lux = document.getElementsByClassName('lux')
    var sum = document.getElementById('sumario')

    if (hora >= 6 && hora < 12) {
        for (var i = 0; i < t2.length; i++) {
            t2[i].style.color = '#162972';
        }
        for (var i = 0; i < lumi.length; i++) {
            lumi[i].style.backgroundColor = '#F1D3A5';
        }
        for (var i = 0; i <lux.length; i++) {
            lux[i].style.backgroundColor = '#b7caf0';
        }
        sum.style.backgroundColor = '#162972';
    } else if (hora >= 12 && hora < 18) {
        for (var i = 0; i < t2.length; i++) {
            t2[i].style.color = '#1d1742';
        }
        for (var i = 0; i < lumi.length; i++) {
            lumi[i].style.backgroundColor = '#F8B37E';
        }
        for (var i = 0; i <lux.length; i++) {
            lux[i].style.backgroundColor = '#bcbcec';
        }
        sum.style.backgroundColor = '#1d1742';
    } else {
        for (var i = 0; i < t2.length; i++) {
            t2[i].style.color = '#24034d';
        }
        for (var i = 0; i < lumi.length; i++) {
            lumi[i].style.backgroundColor = '#D6B6A6';
        }
        for (var i = 0; i <lux.length; i++) {
            lux[i].style.backgroundColor = '#9191ec';
        }
        sum.style.backgroundColor = '#24034d';
    }
}