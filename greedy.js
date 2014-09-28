var items = {
    gold: {},
    silver: {},
    copper: {}
};

for(var i in items) {
    items[i].value = Math.floor(Math.random() * 500);
    items[i].weight = Math.floor(Math.random() * 500);
}
console.log(items);

Object.prototype.length = function () {
    var result = 0;
    for(var i in this) {
        console.log(i);
        result++;
    }

    // we remove one count for the length function itself
    return result -1;
};

function clone (obj) {
    return JSON.parse(JSON.stringify(obj));
}