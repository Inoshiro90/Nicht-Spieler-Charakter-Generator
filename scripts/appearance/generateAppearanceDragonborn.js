function generateAppearanceDragonborn(gender) {
	let appearance = {};
	appearance.randomGender = gender;
	selectedSkinColor = document.getElementById('skinColorOtherDropdown').value;

	// Wenn "Zufall" ausgewählt wurde, wähle eine zufällige Hautfarbe, ansonsten nutze die ausgewählte Hautfarbe
	if (selectedSkinColor === 'Zufall') {
		appearance.randomSkinColor = getRandomElement(skinColorsOther);
	} else {
		appearance.randomSkinColor = selectedSkinColor;
	}

	// console.log('Ausgewählte Hautfarbe:', appearance.randomSkinColor);

	selectedPhysique = document.getElementById('physiqueDropdown').value;
	if (selectedPhysique === 'Zufall') {
		appearance.randomPhysique = getRandomPhysique();
	} else {
		appearance.randomPhysique = getRandomPhysique(selectedPhysique);
	}

	// appearance.randomEyeColor = getRandomElement(eyeColorsOther);
	// Hier kommt später der Aufruf für die Frisur hin
	// const randomHairStyle = generateRandomHairStyle (randomHairStructure, randomHairLength);
	// appearance.randomFaceShape = getRandomFaceShape();
	// appearance.randomNoseShape = getRandomNoseShape();
	// appearance.randomEyeShape = getRandomEyeShape();
	// appearance.randomEarShape = getRandomEarShape();
	// appearance.randomMouthShape = getRandomMouthShape();

	// Hautfarbe
	switch (appearance.randomSkinColor) {
		case 'Schwarz':
			appearance.skinColorHex = getRandomElement(skinColorOtherBlack);
			break;
		case 'Blau':
			appearance.skinColorHex = getRandomElement(skinColorOtherBlue);
			break;
		case 'Braun':
			appearance.skinColorHex = getRandomElement(skinColorOtherBrown);
			break;
		case 'Grün':
			appearance.skinColorHex = getRandomElement(skinColorOtherGreen);
			break;
		case 'Messing':
			appearance.skinColorHex = getRandomElement(skinColorOtherBrass);
			break;
		case 'Bronze':
			appearance.skinColorHex = getRandomElement(skinColorOtherBronze);
			break;
		case 'Kupfer':
			appearance.skinColorHex = getRandomElement(skinColorOtherCopper);
			break;
		case 'Silber':
			appearance.skinColorHex = getRandomElement(skinColorOtherSilver);
			break;
		case 'Gold':
			appearance.skinColorHex = getRandomElement(skinColorOtherGold);
			break;
		case 'Pink':
			appearance.skinColorHex = getRandomElement(skinColorOtherPink);
			break;
		case 'Rot':
			appearance.skinColorHex = getRandomElement(skinColorOtherRed);
			break;
		case 'Weiß':
			appearance.skinColorHex = getRandomElement(skinColorOtherWhite);
			break;
		case 'Purpur':
			appearance.skinColorHex = getRandomElement(skinColorOtherPurple);
			break;
		case 'Orange':
			appearance.skinColorHex = getRandomElement(skinColorOtherOrange);
			break;
		case 'Gelb':
			appearance.skinColorHex = getRandomElement(skinColorOtherYellow);
			break;
		default:
			console.error('Ungültige Hautfarbe: ' + appearance.randomSkinColor);
	}

	//Augenfarbe
	// switch (appearance.randomEyeColor) {
	// 	case 'Blau':
	// 		appearance.eyeColorHex = getRandomElement(eyeColorBlue);
	// 		break;
	// 	case 'Grün':
	// 		appearance.eyeColorHex = getRandomElement(eyeColorGreen);
	// 		break;
	// 	case 'Grau':
	// 		appearance.eyeColorHex = getRandomElement(eyeColorGrey);
	// 		break;
	// 	case 'Braun':
	// 		appearance.eyeColorHex = getRandomElement(eyeColorBrown);
	// 		break;
	// 	case 'Haselnuss':
	// 		appearance.eyeColorHex = getRandomElement(eyeColorHazel);
	// 		break;
	// 	default:
	// 		console.error('Ungültige Augenfarbe: ' + appearance.randomEyeColor);
	// }
	
	return appearance;
}
