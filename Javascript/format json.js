function formatJson(json) {
	let data = JSON.parse(json);
	let result = {
		h: [],
		d: [],
	};

	// look for unique field names and store them
	for (let i = 0; i < data.length; i++) {
		for (key in data[i]) {
			let same_flag = false;

			for (let k = 0; k < result.h.length; k++) {
				if (result.h[k] === key) {
					same_flag = true;
				}
			}

			if (!same_flag) {
				result.h.push(key);
			}
		}
	}

	// add a "+" should a field name happen to be the same, to make each distinct
	for (let i = 0; i < result.h.length; i++) {
		for (let k = i + 1; k < result.h.length; k++) {
			if (result.h[i] === result.h[k]) {
				result.h[k] += '+';
			}
		}
	}

	// get the data from each field
	data.forEach((e) => {
		let datum = [];
		for (key in e) {
			datum.push(e[key]);
		}

		result.d.push(datum);
	});

	return JSON.stringify(result);
}

let json =
	'[{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4},{"username":"joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height": 1.8},{"username":"minghua","hair_color":"green","height": 0.5,"age":102,"ag":"test"}]';

console.log(formatJson(json));
