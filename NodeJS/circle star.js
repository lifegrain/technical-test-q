function circleStar(n) {
	let output = [];

	if (n % 2 === 0) {
		output.push('CIRCLE');
	}
	if (n % 3 === 0) {
		output.push('STAR');
	}

	if (output.length) {
		return output.join(' ');
	} else {
		return null;
	}
}

console.log(circleStar(2)); // CIRCLE
console.log(circleStar(3)); // STAR
console.log(circleStar(6)); // CIRCLE STAR
console.log(circleStar(7)); // null
