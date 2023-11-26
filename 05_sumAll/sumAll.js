function isNumber(value) {
	return typeof value === 'number';
}

const sumAll = function (n1, n2) {
	let sum = 0;

	if (n1 < 0 || n2 < 0)
		return "ERROR";
	if (typeof n1 !== "number" || typeof n2 !== "number")
		return "ERROR"

	if (n1 > n2) {
		let aux = n1;
		n1 = n2;
		n2 = aux;
	}
	for (let index = n1; index <= n2; index++) {
		sum += index;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
