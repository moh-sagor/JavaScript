
document.getElementById('plus').onclick = function () {
    const total = parseInt((document.getElementById('number1').value)) + parseInt((document.getElementById('number2').value));
    document.getElementById('display').innerHTML = total;
}
document.getElementById('minus').onclick = function () {
    const total = parseInt((document.getElementById('number1').value)) - parseInt((document.getElementById('number2').value));
    document.getElementById('display').innerHTML = total;
}
document.getElementById('mul').onclick = function () {
    const total = parseInt((document.getElementById('number1').value)) * parseInt((document.getElementById('number2').value));
    document.getElementById('display').innerHTML = total;
}
document.getElementById('div').onclick = function () {
    const total = parseInt((document.getElementById('number1').value)) / parseInt((document.getElementById('number2').value));
    document.getElementById('display').innerHTML = total.toFixed(2);
}
document.getElementById('sqr').onclick = function () {
    const total = Math.pow(parseInt((document.getElementById('number1').value)), parseInt((document.getElementById('number2').value)))
    document.getElementById('display').innerHTML = total;
}
