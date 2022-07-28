//document.getElementById("currency-field").addEventListener("keyup", formatCurrency());

function formatNumber(n) {
    // format number 1000000 to 1.000.000
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}


function formatCurrency() {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    var input = document.getElementById("currency-field");

    // don't validate empty input
    if (input === "") { return; }

    input_val = formatNumber(input.value);
    input_val = "$" + input_val;

    // send updated string to input
    input.value = input_val
}