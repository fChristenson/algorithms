var Gene = function (string) {
    this.string = '';
    this.cost = 9999;

    if (string) {
        this.string = string;
    }
};

Gene.prototype.randomString = function(length) {
    while (length--) {
        this.string += String.fromCharCode(Math.floor(Math.random()*255));
    }
};

Gene.prototype.calcCost = function (otherString) {
    var result = 0;
    for (var i = 0; i < this.string.length; i++) {
        result += Math.abs((this.string.charCodeAt(i) - otherString.charCodeAt(i)));
    }
    this.cost = result;
};

Gene.prototype.mate = function (gene) {
    var mid = this.string.length / 2 | 0,
        child1 = this.string.substring(0, mid) + gene.string.substring(mid),
        child2 = gene.string.substring(0, mid) + this.string.substring(mid);

        return [new Gene(child1), new Gene(child2)];
};

Gene.prototype.mutate = function (chance) {
    if (Math.random() > chance) {
        return;
    }

    var index = Math.floor(Math.random() * this.string.length),
        shiftCharBy = Math.random() >= 0.5 ? 1 : -1,
        newChar = String.fromCharCode(this.string.charCodeAt(index) + shiftCharBy);

    this.string = this.string.substring(0, index) + newChar + this.string.substring(index + 1);
};

var Population = function (goalString, size) {
    this.adults = [];
    this.goalString = goalString;
    this.numGenerationCreated = 0;

    while(size--) {
        var gene = new Gene();
        gene.randomString(this.goalString.length);
        this.adults.push(gene);
    }
};

Population.prototype.sort = function () {
    this.adults.sort(function (gene1, gene2) {
        return gene1.cost - gene2.cost;
    });
};

Population.prototype.createNewGeneration = function () {
    for(var i = 0; i < this.adults.length; i++) {
        this.adults[i].calcCost(this.goalString);
    }
    this.sort();
    console.log('Generation: ' + this.numGenerationCreated + ', ' + this.adults[0].string);

    var children = this.adults[0].mate(this.adults[1]);
    this.adults.splice(this.adults.length - 2, 2, children[0], children[1]);

    for(i = 0; i < this.adults.length; i++) {
        this.adults[i].mutate(0.5);
        this.adults[i].calcCost(this.goalString);

        if (this.adults[i].string === this.goalString) {
            console.log('Perfect match found: ' + this.adults[i].string);
            return;
        }
    }

    this.numGenerationCreated++;
    var scope = this;
    setTimeout(function () {scope.createNewGeneration();}, 20);
};

var param = process.argv[2];
if (!param) {
    console.log('Please use correct format: node <file.js> <string>');
    return;
}
var  population = new Population(param, 20);
population.createNewGeneration();