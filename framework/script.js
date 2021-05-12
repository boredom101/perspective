function process() {
    const value = document.getElementById("input").value;
    const result = calculate(value);
    document.getElementById("output").innerText = "around x" + result.quantity + " " + result.item.type + " of " + result.item.object;
}

function init() {
    var params = (new URL(document.location)).searchParams;
    if (params.has("value")) {
        document.getElementById("input").value = params.get("value");
        process();
    }
}