// TODO: add your solutions here!

// #1 concatenation
function combineWords(word1, word2) {
    var concoc = word1.concat(word2);
    return concoc
};
var result = combineWords('dog', 'house');
console.log(result);

// #2 repeat repeat
function repeat(phrase, num) {
    for (var i = 0; i < num; i++) {
        console.log(phrase);
    }
}
var result = repeat('hey there', 5);
console.log(result);

// #3

function numPower (num, power){
    var currentNum = 4;
    for (var i = 1; i < power; i++) {
        var product = currentNum *= num;
        console.log(product);
    }
    return product;
}
var result = numPower(4, 5);
console.log(result);

// #4 return area of circle

function findArea (rad) {
    let area = 2 * Math.PI * rad;
    return area;
}
var result = findArea(3);
console.log(result);

// #5 pythagorean
function findArea (a, b) {
    let area = a^2 + b^2;
    return area;
}
let result = findArea(2, 4);
console.log(result);

// #6 is x divisible by y




// #10
function printTriangle(length) {
	var ast = "*";

	for (var i = 0; i < length; i++) {
		console.log = ast+=
	}
}

printTriangle(3);
