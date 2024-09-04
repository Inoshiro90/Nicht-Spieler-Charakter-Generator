// Funktion zur Generierung einer zufälligen Haarlänge
// function generateRandomHairLength() {}

// Funktion zur Generierung einer zufälligen Frisur
// function generateRandomHairStyle () {}

function generateRandomCharacter() {
	let character = {};
	// console.log(document.getElementById('skinColorDropdown').value);
	selectedGender = document.getElementById('genderDropdown').value;
	if (selectedGender === 'Zufall') {
		character.randomGender = getRandomGender();
	} else {
		character.randomGender = selectedGender;
	}

	selectedRace = document.getElementById('raceDropdown').value;
	if (selectedRace === 'Zufall') {
		character.randomRace = getRandomRace();
	} else {
		character.randomRace = selectedRace;
	}

	selectedSkinColor = document.getElementById('skinColorDropdown').value;
	character.randomCategory = getRandomType(selectedSkinColor);
	character.randomType = character.randomCategory['Volksname'];
	// Wenn "Zufall" ausgewählt wurde, wähle eine zufällige Hautfarbe, ansonsten nutze die ausgewählte Hautfarbe
	if (selectedSkinColor === 'Zufall') {
		character.randomSkinColor = getRandomElement(skinColors[character.randomType]);
	} else {
		character.randomSkinColor = selectedSkinColor;
	}

	selectedPhysique = document.getElementById('physiqueDropdown').value;
	if (selectedPhysique === 'Zufall') {
		character.randomPhysique = getRandomPhysique();
	} else {
		character.randomPhysique = getRandomPhysique(selectedPhysique);
	}

	character.randomEyeColor = getRandomElement(eyeColors[character.randomType]);
	character.randomHairColor = getRandomElement(hairColors[character.randomType]);
	character.randomHairStructure = getRandomElement(hairStructures[character.randomType]);
	character.randomHairLength = generateRandomHairLength(character.randomGender);
	// Hier kommt später der Aufruf für die Frisur hin
	// const randomHairStyle = generateRandomHairStyle (randomHairStructure, randomHairLength);
	character.randomFaceShape = getRandomFaceShape();
	character.randomNoseShape = getRandomNoseShape();
	character.randomEyeShape = getRandomEyeShape();
	character.randomEarShape = getRandomEarShape();
	character.randomMouthShape = getRandomMouthShape();
	character.randomTieflingHornShape = getRandomElement(tieflingHornShapes);

	// Hautfarbe
	switch (character.randomSkinColor) {
		case 'Blass':
			switch (character.randomRace) {
				case 'Elf':
				case 'Halbelf':
					character.skinColorHex = getRandomElement([
						...skinColorPaleElf,
						...skinColorPale,
					]);
					break;
				case 'Gnom':
					character.skinColorHex = getRandomElement([
						...skinColorPaleGnome,
						...skinColorPale,
					]);
					break;
				case 'Halbork':
					character.skinColorHex = getRandomElement([
						...skinColorPaleOrc,
						...skinColorPale,
					]);
					break;
				case 'Drachenblütiger':
					character.skinColorHex = getRandomElement([
						...skinColorPaleDragonborn,
						...skinColorPale,
					]);
					break;
				case 'Tiefling':
					character.skinColorHex = getRandomElement([
						...skinColorPaleTiefling,
						...skinColorPale,
					]);
					break;
				default:
					character.skinColorHex = getRandomElement(skinColorPale);
			}
			break;
		case 'Weiß':
			switch (character.randomRace) {
				case 'Elf':
				case 'Halbelf':
					character.skinColorHex = getRandomElement([
						...skinColorWhiteElf,
						...skinColorWhite,
					]);
					break;
				case 'Gnom':
					character.skinColorHex = getRandomElement([
						...skinColorWhiteGnome,
						...skinColorWhite,
					]);
					break;
				case 'Halbork':
					character.skinColorHex = getRandomElement([
						...skinColorWhiteOrc,
						...skinColorWhite,
					]);
					break;
				case 'Drachenblütiger':
					character.skinColorHex = getRandomElement([
						...skinColorWhiteDragonborn,
						...skinColorWhite,
					]);
					break;
				case 'Tiefling':
					character.skinColorHex = getRandomElement([
						...skinColorWhiteTiefling,
						...skinColorWhite,
					]);
					break;
				default:
					character.skinColorHex = getRandomElement(skinColorWhite);
			}
			break;
		case 'Hellbraun':
			switch (character.randomRace) {
				case 'Elf':
				case 'Halbelf':
					character.skinColorHex = getRandomElement([
						...skinColorLightBrownElf,
						...skinColorLightBrown,
					]);
					break;
				case 'Gnom':
					character.skinColorHex = getRandomElement([
						...skinColorLightBrownGnome,
						...skinColorLightBrown,
					]);
					break;
				case 'Halbork':
					character.skinColorHex = getRandomElement([
						...skinColorLightBrownOrc,
						...skinColorLightBrown,
					]);
					break;
				case 'Drachenblütiger':
					character.skinColorHex = getRandomElement([
						...skinColorLightBrownDragonborn,
						...skinColorLightBrown,
					]);
					break;
				case 'Tiefling':
					character.skinColorHex = getRandomElement([
						...skinColorLightBrownTiefling,
						...skinColorLightBrown,
					]);
					break;
				default:
					character.skinColorHex = getRandomElement(skinColorLightBrown);
			}
			break;
		case 'Braun':
			switch (character.randomRace) {
				case 'Elf':
				case 'Halbelf':
					character.skinColorHex = getRandomElement([
						...skinColorBrownElf,
						...skinColorBrown,
					]);
					break;
				case 'Gnom':
					character.skinColorHex = getRandomElement([
						...skinColorBrownGnome,
						...skinColorBrown,
					]);
					break;
				case 'Halbork':
					character.skinColorHex = getRandomElement([
						...skinColorBrownOrc,
						...skinColorBrown,
					]);
					break;
				case 'Drachenblütiger':
					character.skinColorHex = getRandomElement([
						...skinColorBrownDragonborn,
						...skinColorBrown,
					]);
					break;
				case 'Tiefling':
					character.skinColorHex = getRandomElement([
						...skinColorBrownTiefling,
						...skinColorBrown,
					]);
					break;
				default:
					character.skinColorHex = getRandomElement(skinColorBrown);
			}
			break;
		case 'Dunkelbraun':
			switch (character.randomRace) {
				case 'Elf':
				case 'Halbelf':
					character.skinColorHex = getRandomElement([
						...skinColorDarkBrownElf,
						...skinColorDarkBrown,
					]);
					break;
				case 'Gnom':
					character.skinColorHex = getRandomElement([
						...skinColorDarkBrownGnome,
						...skinColorDarkBrown,
					]);
					break;
				case 'Halbork':
					character.skinColorHex = getRandomElement([
						...skinColorDarkBrownOrc,
						...skinColorDarkBrown,
					]);
					break;
				case 'Drachenblütiger':
					character.skinColorHex = getRandomElement([
						...skinColorDarkBrownDragonborn,
						...skinColorDarkBrown,
					]);
					break;
				case 'Tiefling':
					character.skinColorHex = getRandomElement([
						...skinColorDarkBrownTiefling,
						...skinColorDarkBrown,
					]);
					break;
				default:
					character.skinColorHex = getRandomElement(skinColorDarkBrown);
			}
			break;
		case 'Schwarz':
			switch (character.randomRace) {
				case 'Elf':
				case 'Halbelf':
					character.skinColorHex = getRandomElement([
						...skinColorBlackElf,
						...skinColorBlack,
					]);
					break;
				case 'Gnom':
					character.skinColorHex = getRandomElement([
						...skinColorBlackGnome,
						...skinColorBlack,
					]);
					break;
				case 'Halbork':
					character.skinColorHex = getRandomElement([
						...skinColorBlackOrc,
						...skinColorBlack,
					]);
					break;
				case 'Drachenblütiger':
					character.skinColorHex = getRandomElement([
						...skinColorBlackDragonborn,
						...skinColorBlack,
					]);
					break;
				case 'Tiefling':
					character.skinColorHex = getRandomElement([
						...skinColorBlackTiefling,
						...skinColorBlack,
					]);
					break;
				default:
					character.skinColorHex = getRandomElement(skinColorBlack);
			}
			break;
		default:
			console.error('Ungültige Hautfarbe: ' + character.randomSkinColor);
	}

	//Augenfarbe
	switch (character.randomEyeColor) {
		case 'Blau':
			character.eyeColorHex = getRandomElement(eyeColorBlue);
			break;
		case 'Grün':
			character.eyeColorHex = getRandomElement(eyeColorGreen);
			break;
		case 'Grau':
			character.eyeColorHex = getRandomElement(eyeColorGrey);
			break;
		case 'Braun':
			character.eyeColorHex = getRandomElement(eyeColorBrown);
			break;
		case 'Haselnuss':
			character.eyeColorHex = getRandomElement(eyeColorHazel);
			break;
		default:
			console.error('Ungültige Augenfarbe: ' + character.randomEyeColor);
	}

	//Haarfarbe
	switch (character.randomHairColor) {
		case 'Blond':
			character.hairColorHex = getRandomElement(hairColorBlonde);
			break;
		case 'Aschblond':
			character.hairColorHex = getRandomElement(hairColorBlondeAsh);
			break;
		case 'Goldblond':
			character.hairColorHex = getRandomElement(hairColorBlondeGold);
			break;
		case 'Rotblond':
			character.hairColorHex = getRandomElement(hairColorBlondeStrawberry);
			break;
		case 'Staub':
			character.hairColorHex = getRandomElement(hairColorDust);
			break;
		case 'Hellbraun':
			character.hairColorHex = getRandomElement(hairColorLightBrown);
			break;
		case 'Braun':
			character.hairColorHex = getRandomElement(hairColorBrown);
			break;
		case 'Dunkelbraun':
			character.hairColorHex = getRandomElement(hairColorDarkBrown);
			break;
		case 'Rostrot':
			character.hairColorHex = getRandomElement(hairColorBrownAuburn);
			break;
		case 'Rotbraun':
			character.hairColorHex = getRandomElement(hairColorBrownRed);
			break;
		case 'Goldbraun':
			character.hairColorHex = getRandomElement(hairColorBrownGold);
			break;
		case 'Fuchsrot':
			character.hairColorHex = getRandomElement(hairColorGinger);
			break;
		case 'Schwarz':
			character.hairColorHex = getRandomElement(hairColorBlack);
			break;
		case 'Weiß':
			character.hairColorHex = getRandomElement(hairColorWhite);
			break;
		case 'Grau':
			character.hairColorHex = getRandomElement(hairColorGrey);
			break;
		default:
			console.error('Ungültige Haarfarbe: ' + character.randomHairColor);
	}

	//Haarstruktur
	switch (character.randomHairStructure) {
		case 'Glatt':
			character.hairStructureDescription = getRandomElement(hairStructureType1);
			break;
		case 'Wellig':
			character.hairStructureDescription = getRandomElement(hairStructureType2);
			break;
		case 'Lockig':
			character.hairStructureDescription = getRandomElement(hairStructureType3);
			break;
		case 'Kraus':
			character.hairStructureDescription = getRandomElement(hairStructureType4);
			break;
		default:
			console.error('Ungültige Haarstruktur: ' + character.randomHairStructure);
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
	return character;
}

// Funktion aufrufen, um einen zufälligen Charakter zu generieren
// generateRandomCharacter();
