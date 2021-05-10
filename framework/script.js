const dataset = @dataset@;

const factor = @factor@;

function process() {
    const value = document.getElementById("input").value;
    weights = dataset.map((x) =>
        Math.min(value % x.value, (value + factor) % x.value));
    var index = 0;
    var lowest = weights[0];
    for (var i = 1; i < weights.length; i++) {
        if (weights[i] < lowest && weights[i] >= 1) {
            lowest = weights[i];
            index = i;
        }
    }
    var result = dataset[index];
    //result = dataset.reduce((a, b) => Math.abs(b.value - value) < Math.abs(a.value - value) ? b : a);
    document.getElementById("output").innerText = "around x" + Math.round(value / result.value) + " " + result.type + " of " + result.object;
}

function init() {
    var params = (new URL(document.location)).searchParams;
    if (params.has("value")) {
        document.getElementById("input").value = params.get("value");
        process();
    }
}