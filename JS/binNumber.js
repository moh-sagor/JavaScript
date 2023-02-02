document.getElementById('generate').addEventListener("click", function () {
    let min = 2000000000000;
    let max = 3000000000000;
    let binNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("display").innerHTML = binNumber;
});


