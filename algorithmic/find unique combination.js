function getCombination(
	number,
	index = 1,
	sum = 0,
	result = [],
	combination = []
) {
	// if the combination is correct add into result
	if (sum === number) {
		result.push(combination.slice());
		return;
	}

	// check all combination
	for (let i = index; i < number; i++) {
		// if sum is greater than number then continue to next iteration
		if (sum + i > number) {
			continue;
		}

		// add current combination then call recursive for the current combination
		combination.push(i);
		getCombination(number, i, sum + i, result, combination);
		combination.pop();
	}

	return result;
}

console.log(getCombination(4));
console.log(getCombination(6));
