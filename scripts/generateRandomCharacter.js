// Funktion zur Generierung einer zufälligen Haarlänge
// function generateRandomHairLength() {}

// Funktion zur Generierung einer zufälligen Frisur
// function generateRandomHairStyle () {}

function generateRandomCharacter() {
	let character = {};
	console.log(document.getElementById('skinColorDropdown').value)
	selectedSkinColor = document.getElementById('skinColorDropdown').value;
	character.randomCategory = getRandomType(selectedSkinColor);
	character.randomType = character.randomCategory['Volksname'];
	// Wenn "Zufall" ausgewählt wurde, wähle eine zufällige Hautfarbe, ansonsten nutze die ausgewählte Hautfarbe
	if (selectedSkinColor === 'Zufall') {
		character.randomSkinColor = getRandomElement(skinColors[character.randomType]);
	} else {
		character.randomSkinColor = mapSkinColor(selectedSkinColor);
	}
	// character.randomSkinColor = getRandomElement(skinColors[character.randomType]);
	character.randomEyeColor = getRandomElement(eyeColors[character.randomType]);
	character.randomHairColor = getRandomElement(hairColors[character.randomType]);
	character.randomHairStructure = getRandomElement(hairStructures[character.randomType]);
	character.randomHairLength = generateRandomHairLength();
	// Hier kommt später der Aufruf für die Frisur hin
	// const randomHairStyle = generateRandomHairStyle (randomHairStructure, randomHairLength);

	// let character.skinColorHex;
	// let character.eyeColorHex;
	// let character.hairColorHex;
	// let character.hairStructureDescription;

	switch (character.randomSkinColor) {
		case 'Blass':
			character.skinColorHex = getRandomElement(skinColorPale);
			break;
		case 'Weiß':
			character.skinColorHex = getRandomElement(skinColorWhite);
			break;
		case 'Hellbraun':
			character.skinColorHex = getRandomElement(skinColorLightBrown);
			break;
		case 'Braun':
			character.skinColorHex = getRandomElement(skinColorBrown);
			break;
		case 'Dunkelbraun':
			character.skinColorHex = getRandomElement(skinColorDarkBrown);
			break;
		case 'Schwarz':
			character.skinColorHex = getRandomElement(skinColorBlack);
			break;
		default:
			character.skinColorHex = getRandomElement(skinColorBrown); // Fallback
	}

	switch (character.randomEyeColor) {
		case 'Blau':
			character.eyeColorHex = getRandomElement(eyeColorBlue); // Blue
			break;
		case 'Grün':
			character.eyeColorHex = getRandomElement(eyeColorGreen); // Green
			break;
		case 'Grau':
			character.eyeColorHex = getRandomElement(eyeColorGrey); // Gray
			break;
		case 'Braun':
			character.eyeColorHex = getRandomElement(eyeColorBrown); // Gray
			break;
		case 'Haselnuss':
			character.eyeColorHex = getRandomElement(eyeColorHazel); // Gray
			break;
		default:
			character.eyeColorHex = '#000000'; // Black (fallback)
	}

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
		case 'Braun':
			character.hairColorHex = getRandomElement(hairColorBrown);
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
			character.hairColorHex = getRandomElement(hairColorBlack); // Fallback
	}

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
			character.hairColorHex = getRandomElement(hairColorBlack); // Fallback
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
