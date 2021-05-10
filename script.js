const dataset = [
    {
        "value":2.72,
        "type":"height",
        "object":"Robert Wadlow, the tallest known human-being"
    },
    {
        "value":8.38,
        "type":"length",
        "object":"London bus"
    },
    {
        "value":133,
        "type":"length",
        "object":"longest-known blue whale"
    },
    {
        "value":52,
        "type":"height",
        "object":"Niagra Falls"
    },
    {
        "value":93.47,
        "type":"height",
        "object":"Statue of Liberty"
    },
    {
        "value":105,
        "type":"length",
        "object":"football field"
    },
    {
        "value":147,
        "type":"height",
        "object":"Great Pyramid of Giza"
    },
    {
        "value":300,
        "type":"height",
        "object":"Eiffel Tower"
    },
    {
        "value":979,
        "type":"height",
        "object":"Salto Angel Waterfall"
    },
    {
        "value":2300,
        "type":"length",
        "object":"Three Gorges Dam"
    },
    {
        "value":3100,
        "type":"width",
        "object":"Strait of Messina"
    },
    {
        "value":8848,
        "type":"height",
        "object":"Mount Everest"
    },
    {
        "value":10900,
        "type":"depth",
        "object":"Challenger Deep in the Mariana Trench"
    },
    {
        "value":27000,
        "type":"circumference",
        "object":"Large Hadron Collider"
    },
    {
        "value":42195,
        "type":"length",
        "object":"a marathon"
    }
];

const factor = 5;

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
