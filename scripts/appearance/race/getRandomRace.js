function getRandomRace() {
	const raceOptions = [
		'Mensch',
		'Zwerg',
		'Elf',
		'Halbling',
		'Gnom',
		'Halbelf',
		'Halbork',
		'Drachenblütiger',
		'Tiefling',
	];
	const raceOptionsWeights = [50, 10, 10, 5, 5, 5, 5, 5, 5];

	const race = getRandomElementWeighted(raceOptions, raceOptionsWeights);
	// const race = getRandomElement(raceOptions);

	// console.log(race)
	return race;
}
