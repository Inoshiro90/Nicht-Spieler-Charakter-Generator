function getRandomGender() {
	const genderOptions = ['Männlich', 'Weiblich', 'Nicht-binär'];
	const genderOptionsWeights = [49, 49, 2];

	const gender = getRandomElementWeighted(genderOptions, genderOptionsWeights);
	return gender;
}
