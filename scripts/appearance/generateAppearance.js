function generateAppearance() {
	let appearance = {};

	selectedGender = document.getElementById('genderDropdown').value;

	if (selectedGender === 'Zufall') {
		appearance.randomGender = getRandomGender();
	} else {
		appearance.randomGender = selectedGender;
	}

	selectedRace = document.getElementById('raceDropdown').value;

	if (selectedRace === 'Zufall') {
		appearance.randomRace = getRandomRace();
	} else {
		appearance.randomRace = selectedRace;
	}

	// Je nach randomRace Aussehen generieren
	switch (appearance.randomRace) {
		case 'Mensch':
			Object.assign(appearance, generateAppearanceHuman(appearance.randomGender));
			break;
		case 'Zwerg':
			Object.assign(appearance, generateAppearanceDwarf(appearance.randomGender));
			break;
		case 'Elf':
			Object.assign(appearance, generateAppearanceElf(appearance.randomGender));
			break;
		case 'Halbling':
			Object.assign(appearance, generateAppearanceHalfling(appearance.randomGender));
			break;
		case 'Gnom':
			Object.assign(appearance, generateAppearanceGnome(appearance.randomGender));
			break;
		case 'Halbork':
			Object.assign(appearance, generateAppearanceHalfOrc(appearance.randomGender));
			break;
		case 'Halbelf':
			Object.assign(appearance, generateAppearanceHalfElf(appearance.randomGender));
			break;
		case 'Tiefling':
			Object.assign(appearance, generateAppearanceTiefling(appearance.randomGender));
			break;
		case 'Drachenblütiger':
			Object.assign(appearance, generateAppearanceDragonborn(appearance.randomGender));
			break;
		default:
			console.warn('Unbekanntes Volk:', appearance.randomRace);
	}

	// Code für die Frisur basierend auf Haarstruktur und Haarlänge
	// switch (character.hairStructureDescription){

	// }
	// console.log('Überkategorie: ' + randomCategory.Überkategorie);
	// console.log('Kategorie: ' + randomCategory.Kategorie);
	// console.log('Volksname: ' + randomCategory.Volksname);
	// console.log('Typ: ' + randomType);
	// console.log('Hautfarbe: ' + character.randomSkinColor + ' (' + character.skinColorHex + ')');
	// console.log('Augenfarbe: ' + character.randomEyeColor + ' (' + character.eyeColorHex + ')');
	// console.log('Haarfarbe: ' + character.randomHairColor + ' (' + character.hairColorHex + ')');
	// console.log('Haarstruktur: ' + character.hairStructureDescription);
	// console.log (character)
	return appearance;
}
