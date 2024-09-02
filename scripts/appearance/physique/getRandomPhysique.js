function getRandomPhysique(selectedPhysique) {
	const physiqueOptions = [
		{value: 'U1', name: 'Hager', description: 'Geringes Gewicht und geringe Muskelmasse'},
		{
			value: 'U2',
			name: 'Schmal',
			description: 'Geringes Gewicht und durchschnittliche Muskelmasse',
		},
		{value: 'U3', name: 'Drahtig', description: 'Geringes Gewicht und hohe Muskelmasse'},
		{
			value: 'A1',
			name: 'Zart',
			description: 'Durchschnittliches Gewicht und geringe Muskelmasse',
		},
		{
			value: 'A2',
			name: 'Ausgewogen',
			description: 'Durchschnittliches Gewicht und durchschnittliche Muskelmasse',
		},
		{
			value: 'A3',
			name: 'Athletisch',
			description: 'Durchschnittliches Gewicht und hohe Muskelmasse',
		},
		{value: 'O1', name: 'Wohlgenährt', description: 'Hohes Gewicht und geringe Muskelmasse'},
		{
			value: 'O2',
			name: 'Füllig',
			description: 'Hohes Gewicht und durchschnittliche Muskelmasse',
		},
		{value: 'O3', name: 'Massig', description: 'Hohes Gewicht und hohe Muskelmasse'},
	];

	const physiqueOptionsWeights = [5, 10, 5, 10, 30, 15, 5, 10, 10];

	if (selectedPhysique) {
		// Wenn eine Auswahl getroffen wurde, das entsprechende Objekt zurückgeben
		const selectedOption = physiqueOptions.find((option) => option.name === selectedPhysique);
		if (selectedOption) {
			return selectedOption;
		}
	}

	// Wenn keine Auswahl getroffen wurde, zufällige Option zurückgeben
	const physique = getRandomElementWeighted(physiqueOptions, physiqueOptionsWeights);

	return physique;
}
