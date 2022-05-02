function phrase() {
    var x = document.getElementById("binario").value;

    if (x == "1" || x == "0") {
        var h6 = document.getElementById("frase")
        h6.innerHTML="Here is your decimal!"
    }
    else {
        var h6 = document.getElementById("frase")
        h6.innerHTML="You entered a non-binary digit (please enter only a 0 or 1)."
    }
}

function convertodecimal() {
    var x = document.getElementById("binario").value;
    var y = document.getElementById("decimal")
    parseInt(x, 2)

  }