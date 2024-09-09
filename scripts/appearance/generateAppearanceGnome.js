function generateAppearanceGnome(gender) {
	let appearance = {};
	appearance.randomGender = gender;
	selectedSkinColor = document.getElementById('skinColorDropdown').value;

	appearance.randomCategory = getRandomType(selectedSkinColor);
	appearance.randomType = appearance.randomCategory['Volksname'];

	// Wenn "Zufall" ausgewählt wurde, wähle eine zufällige Hautfarbe, ansonsten nutze die ausgewählte Hautfarbe
	if (selectedSkinColor === 'Zufall') {
		appearance.randomSkinColor = getRandomElement(skinColors[appearance.randomType]);
	} else {
		appearance.randomSkinColor = selectedSkinColor;
	}

	selectedPhysique = document.getElementById('physiqueDropdown').value;
	if (selectedPhysique === 'Zufall') {
		appearance.randomPhysique = getRandomPhysique();
	} else {
		appearance.randomPhysique = getRandomPhysique(selectedPhysique);
	}

	appearance.randomEyeColor = getRandomElement(eyeColors[appearance.randomType]);
	appearance.randomHairColor = getRandomElement(hairColors[appearance.randomType]);
	appearance.randomHairStructure = getRandomElement(hairStructures[appearance.randomType]);
	appearance.randomHairLength = generateRandomHairLength(appearance.randomGender);
	// Hier kommt später der Aufruf für die Frisur hin
	// const randomHairStyle = generateRandomHairStyle (randomHairStructure, randomHairLength);
	appearance.randomFaceShape = getRandomFaceShape();
	appearance.randomNoseShape = getRandomNoseShape();
	appearance.randomEyeShape = getRandomEyeShape();
	appearance.randomEarShape = getRandomEarShape();
	appearance.randomMouthShape = getRandomMouthShape();

	// Hautfarbe
	switch (appearance.randomSkinColor) {
		case 'Blass':
			appearance.skinColorHex = getRandomElement([...skinColorPaleGnome, ...skinColorPale]);
			break;
		case 'Weiß':
			appearance.skinColorHex = getRandomElement([...skinColorWhiteGnome, ...skinColorWhite]);
			break;
		case 'Hellbraun':
			appearance.skinColorHex = getRandomElement([
				...skinColorLightBrownGnome,
				...skinColorLightBrown,
			]);
			break;
		case 'Braun':
			appearance.skinColorHex = getRandomElement([...skinColorBrownGnome, ...skinColorBrown]);
			break;
		case 'Dunkelbraun':
			appearance.skinColorHex = getRandomElement([
				...skinColorDarkBrownGnome,
				...skinColorDarkBrown,
			]);
			break;
		case 'Schwarz':
			appearance.skinColorHex = getRandomElement([...skinColorBlackGnome, ...skinColorBlack]);
			break;
		default:
			console.error('Ungültige Hautfarbe: ' + appearance.randomSkinColor);
	}

	//Augenfarbe
	switch (appearance.randomEyeColor) {
		case 'Blau':
			appearance.eyeColorHex = getRandomElement(eyeColorBlue);
			break;
		case 'Grün':
			appearance.eyeColorHex = getRandomElement(eyeColorGreen);
			break;
		case 'Grau':
			appearance.eyeColorHex = getRandomElement(eyeColorGrey);
			break;
		case 'Braun':
			appearance.eyeColorHex = getRandomElement(eyeColorBrown);
			break;
		case 'Haselnuss':
			appearance.eyeColorHex = getRandomElement(eyeColorHazel);
			break;
		default:
			console.error('Ungültige Augenfarbe: ' + appearance.randomEyeColor);
	}

	//Haarfarbe
	switch (appearance.randomHairColor) {
		case 'Blond':
			appearance.hairColorHex = getRandomElement(hairColorBlonde);
			break;
		case 'Aschblond':
			appearance.hairColorHex = getRandomElement(hairColorBlondeAsh);
			break;
		case 'Goldblond':
			appearance.hairColorHex = getRandomElement(hairColorBlondeGold);
			break;
		case 'Rotblond':
			appearance.hairColorHex = getRandomElement(hairColorBlondeStrawberry);
			break;
		case 'Staub':
			appearance.hairColorHex = getRandomElement(hairColorDust);
			break;
		case 'Hellbraun':
			appearance.hairColorHex = getRandomElement(hairColorLightBrown);
			break;
		case 'Braun':
			appearance.hairColorHex = getRandomElement(hairColorBrown);
			break;
		case 'Dunkelbraun':
			appearance.hairColorHex = getRandomElement(hairColorDarkBrown);
			break;
		case 'Rostrot':
			appearance.hairColorHex = getRandomElement(hairColorBrownAuburn);
			break;
		case 'Rotbraun':
			appearance.hairColorHex = getRandomElement(hairColorBrownRed);
			break;
		case 'Goldbraun':
			appearance.hairColorHex = getRandomElement(hairColorBrownGold);
			break;
		case 'Fuchsrot':
			appearance.hairColorHex = getRandomElement(hairColorGinger);
			break;
		case 'Schwarz':
			appearance.hairColorHex = getRandomElement(hairColorBlack);
			break;
		case 'Weiß':
			appearance.hairColorHex = getRandomElement(hairColorWhite);
			break;
		case 'Grau':
			appearance.hairColorHex = getRandomElement(hairColorGrey);
			break;
		default:
			console.error('Ungültige Haarfarbe: ' + appearance.randomHairColor);
	}

	//Haarstruktur
	switch (appearance.randomHairStructure) {
		case 'Glatt':
			appearance.hairStructureDescription = getRandomElement(hairStructureType1);
			break;
		case 'Wellig':
			appearance.hairStructureDescription = getRandomElement(hairStructureType2);
			break;
		case 'Lockig':
			appearance.hairStructureDescription = getRandomElement(hairStructureType3);
			break;
		case 'Kraus':
			appearance.hairStructureDescription = getRandomElement(hairStructureType4);
			break;
		default:
			console.error('Ungültige Haarstruktur: ' + appearance.randomHairStructure);
	}

	return appearance;
}
