// function getRandomType(skinColor) {
// 	// Zufällige Auswahl einer Überkategorie
// 	const randomMainCategory = getRandomElement(Object.keys(typesData));

// 	// Zufällige Auswahl einer Kategorie aus der ausgewählten Überkategorie
// 	const randomSubCategory = getRandomElement(Object.keys(typesData[randomMainCategory]));

// 	// Zufällige Auswahl eines Volksnamens aus der ausgewählten Kategorie
// 	const randomType = getRandomElement(
// 		typesData[randomMainCategory][randomSubCategory]['Volksname']
// 	);

// 	// Rückgabe eines Objekts mit den ausgewählten Daten
// 	return {
// 		Überkategorie: randomMainCategory,
// 		Kategorie: randomSubCategory,
// 		Volksname: randomType,
// 	};
// }

function getRandomType(selectedSkinColor) {
	let randomTypeData;
	let validSkinColor = false;

	while (!validSkinColor) {
		// Zufällige Über- und Unterkategorie auswählen
		const randomMainCategory = getRandomElement(Object.keys(typesData));
		const randomSubCategory = getRandomElement(Object.keys(typesData[randomMainCategory]));
		const randomType = getRandomElement(typesData[randomMainCategory][randomSubCategory]['Volksname']);

		// Überprüfen, ob der ausgewählte Typ die gewünschte Hautfarbe unterstützt
		if (selectedSkinColor === 'Zufall' || skinColors[randomType].includes(mapSkinColor(selectedSkinColor))) {
			randomTypeData = {
				Überkategorie: randomMainCategory,
				Kategorie: randomSubCategory,
				Volksname: randomType,
			};
			validSkinColor = true;
		}
	}

	return randomTypeData;
}

function mapSkinColor(selectedSkinColor) {
	// Mapping der Dropdown-Auswahl auf die tatsächlichen Hautfarben
	switch (selectedSkinColor) {
		case 'Blass':
			return 'Blass';
		case 'Weiß':
			return 'Weiß';
		case 'Hellbraun':
			return 'Hellbraun';
		case 'Braun':
			return 'Braun';
		case 'Dunkelbraun':
			return 'Dunkelbraun';
		case 'Schwarz':
			return 'Schwarz';
		default:
			return 'Zufall';
	}
}