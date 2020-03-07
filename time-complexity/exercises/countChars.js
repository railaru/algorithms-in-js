//big-o: linear

var countChartsLogarithmic = function(str) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        count++;
    }

    return count;
};

console.log(
    "(countChartsLogarithmic('walk'): ",
    countChartsLogarithmic('walk'),
);
console.log(
    "(countChartsLogarithmic('dance'): ",
    countChartsLogarithmic('dance'),
);

///big-o: constant
// since everything in js is an object, property lookup is constant

var countChartsConstant = function(str) {
    return str.length;
};

console.log("(countChartsConstant('walk'): ", countChartsConstant('walk'));
console.log("(countChartsConstant('dance'): ", countChartsConstant('dance'));
