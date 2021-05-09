const dataset = @dataset@;

function process() {
    const value = document.getElementById("input").value;
    result = dataset.reduce((a, b) => Math.abs(b.value - value) < Math.abs(a.value - value) ? b : a);
    document.getElementById("output").innerText = result.type + " of " + result.object;
}

function init() {
    var params = (new URL(document.location)).searchParams;
    if (params.has("value")) {
        document.getElementById("input").value = params.get("value");
        process();
    }
}