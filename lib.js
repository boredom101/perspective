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
        "value":133,
        "type":"length",
        "object":"longest-known blue whale"
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

function calculate(value) {
    for (var i = dataset.length - 1; i >= 0; i--) {
        temp = dataset[i].value;
        remainder = Math.min(value % temp, (value + factor) % temp);
        if (dataset[i] < value && remainder <= factor * 2) {
            return {item: dataset[i], quantity: Math.round(value / dataset[i].value)};
        }
    }
    return {item: dataset[0], quantity: Math.round(value / dataset[0].value)};
}
