const repeatString = function(string, num) {
	let hey = "";
	if(num < 0)
		return "ERROR";
	for (let index = 0; index < num; index++) {
		hey += string;
	}
	return hey;
};

// Do not edit below this line
module.exports = repeatString;
