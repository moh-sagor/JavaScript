// while loop **************************************************************

// var sum = 0;
// document.getElementById('button').onclick = function () {
//     var i = parseInt(document.getElementById('start').value);
//     while (i <= parseInt(document.getElementById('end').value)) {
//         sum += i;
//         i = i + parseInt(document.getElementById('step').value);
//     }
//     document.getElementById('display').innerHTML = sum;
// }


// for loop *****************************************************************

// var sum = 0;
// document.getElementById('button').onclick = function () {
//     for (i = parseInt(document.getElementById('start').value); i <= parseInt(document.getElementById('end').value); i = i + (parseInt(document.getElementById('step').value))) {
//         sum += i;
//     }
//     document.getElementById('display').innerHTML = sum;
// }

// do while loop **************************************************************


// do while loop 
var sum = 0;
document.getElementById('button').onclick = function () {
    let i = parseInt(document.getElementById('start').value);
    do {
        sum = sum + i;

        i = i + parseInt((document.getElementById('step').value));

    }
    while (i <= parseInt(document.getElementById('end').value));
    document.getElementById('display').innerHTML = sum;
}