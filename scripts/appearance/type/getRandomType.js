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
		if (selectedSkinColor === 'Zufall' || skinColors[randomType].includes(selectedSkinColor)) {
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