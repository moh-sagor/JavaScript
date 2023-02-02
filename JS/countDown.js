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