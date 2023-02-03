let count = 0;
document.getElementById('increse').onclick = function () {
    count += 1;
    document.getElementById('display').innerHTML = count;
}

document.getElementById('reset').onclick = function () {
    count = 0;
    document.getElementById('display').innerHTML = count;
}

document.getElementById('decrese').onclick = function () {

    if (count > 0) {
        count -= 1;
    }
    else {
        count = 0;
    }
    document.getElementById('display').innerHTML = count;
}

document.getElementById('range').onchange = function () {
    var rang = document.getElementById('range').value;

    var h = parseInt(rang);
    var w = parseInt(rang);

    document.getElementById('ball').style.height = h + "px";
    document.getElementById('ball').style.width = w + "px";
    document.getElementById('ball').innerHTML = rang;
}


