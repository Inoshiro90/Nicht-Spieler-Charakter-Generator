function generateRandomHeightWeight(race) {
	let heightMin, heightMax, ponderalMin, ponderalMax;

	// Festlegen der Größen- und Ponderalindexbereiche basierend auf dem Volk
	switch (race) {
		case 'Mensch':
			heightMin = 145;
			heightMax = 190;
			ponderalMin = 10;
			ponderalMax = 19;
			break;
		case 'Hügelzwerg':
			heightMin = 115;
			heightMax = 130;
			ponderalMin = 28;
			ponderalMax = 37;
			break;
		case 'Gebirgszwerg':
			heightMin = 130;
			heightMax = 140;
			ponderalMin = 20;
			ponderalMax = 29;
			break;
		case 'Hochelf':
			heightMin = 145;
			heightMax = 185;
			ponderalMin = 5;
			ponderalMax = 14;
			break;
		case 'Waldelf':
			heightMin = 145;
			heightMax = 185;
			ponderalMin = 6;
			ponderalMax = 15;
			break;
		case 'Drow':
			heightMin = 137;
			heightMax = 162;
			ponderalMin = 7;
			ponderalMax = 16;
			break;
		case 'Halbling':
			heightMin = 102;
			heightMax = 112;
			ponderalMin = 7;
			ponderalMax = 16;
			break;
		case 'Drachenblütiger':
			heightMin = 170;
			heightMax = 205;
			ponderalMin = 11;
			ponderalMax = 20;
			break;
		case 'Gnom':
			heightMin = 92;
			heightMax = 102;
			ponderalMin = 12;
			ponderalMax = 21;
			break;
		case 'Halbelf':
			heightMin = 148;
			heightMax = 183;
			ponderalMin = 7;
			ponderalMax = 16;
			break;
		case 'Halbork':
			heightMin = 150;
			heightMax = 195;
			ponderalMin = 18;
			ponderalMax = 27;
			break;
		case 'Tiefling':
			heightMin = 148;
			heightMax = 183;
			ponderalMin = 12;
			ponderalMax = 21;
			break;
		default:
			console.log('Ungültiges Volk');
			return;
	}

	// Zufällige Auswahl der Körpergröße basierend auf dem Volk
	// let height = Math.floor(Math.random() * (heightMax - heightMin + 1)) + heightMin;

	// Bestimmen der Größenkategorie basierend auf der Verteilung von 25-50-25
	let height;
	let distribution = Math.random() * 100; // Zufällige Zahl zwischen 0 und 100
	if (distribution < 25) {
		// Klein: unteres 25%
		height = (Math.floor(Math.random() * ((heightMax - heightMin) * 0.25)) + heightMin).toFixed(
			0
		);
	} else if (distribution < 75) {
		// Durchschnittlich groß: mittleres 50%
		height = (
			Math.floor(Math.random() * ((heightMax - heightMin) * 0.5)) +
			heightMin +
			(heightMax - heightMin) * 0.25
		).toFixed(0);
	} else {
		// Groß: oberes 25%
		height = (
			Math.floor(Math.random() * ((heightMax - heightMin) * 0.25)) +
			heightMin +
			(heightMax - heightMin) * 0.75
		).toFixed(0);
	}

	// Zufällige Auswahl des Ponderal-Index basierend auf dem Volk
	let ponderalIndex;
	if (distribution < 25) {
		ponderalIndex = parseFloat(
			(Math.random() * (ponderalMin - ponderalMax) + ponderalMax).toFixed(2)
		);
	} else if (distribution < 75) {
		ponderalIndex = parseFloat(
			(Math.random() * (ponderalMax - ponderalMin) + ponderalMin).toFixed(2)
		);
	} else {
		ponderalIndex = parseFloat(
			(Math.random() * (ponderalMax - ponderalMin) + ponderalMin).toFixed(2)
		);
	}

	// Bestimmen der Ponderal-Kategorie basierend auf dem Index
	let weightCategory;
	switch (race) {
		case 'Mensch':
			if (ponderalIndex < 13) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 17) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Hügelzwerg':
			if (ponderalIndex < 31) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 35) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Gebirgszwerg':
			if (ponderalIndex < 23) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 27) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Hochelf':
			if (ponderalIndex < 8) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 12) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Waldelf':
			if (ponderalIndex < 9) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 13) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Drow':
			if (ponderalIndex < 10) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 14) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Halbling':
			if (ponderalIndex < 10) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 14) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Drachenblütiger':
			if (ponderalIndex < 14) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 18) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Gnom':
			if (ponderalIndex < 15) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 18) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Halbelf':
			if (ponderalIndex < 10) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 14) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Halbork':
			if (ponderalIndex < 21) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 25) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Übergewicht/füllig';
			}
			break;
		case 'Tiefling':
			if (ponderalIndex < 15) {
				weightCategory = 'Untergewicht/schlank';
			} else if (ponderalIndex < 19) {
				weightCategory = 'Normalgewicht/weder dick noch dünn';
			} else {
				weightCategory = 'Füllig';
			}
			break;
		default:
			weightCategory = 'Unbekannt';
			break;
	}

	// Fügen Sie hier den Code für die Einteilung der Größe in Kategorien ein
	let heightCategory;
	switch (race) {
		case 'Mensch':
			if (height < 160) {
				heightCategory = 'klein';
			} else if (height < 175) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Hügelzwerg':
			if (height < 119) {
				heightCategory = 'klein';
			} else if (height < 126) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Gebirgszwerg':
			if (height < 132) {
				heightCategory = 'klein';
			} else if (height < 137) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Hochelf':
			if (height < 155) {
				heightCategory = 'klein';
			} else if (height < 175) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Waldelf':
			if (height < 155) {
				heightCategory = 'klein';
			} else if (height < 175) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Drow':
			if (height < 143) {
				heightCategory = 'klein';
			} else if (height < 154) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Halbling':
			if (height < 104) {
				heightCategory = 'klein';
			} else if (height < 107) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Drachenblütiger':
			if (height < 178) {
				heightCategory = 'klein';
			} else if (height < 196) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Gnom':
			if (height < 94) {
				heightCategory = 'klein';
			} else if (height < 97) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Halbelf':
			if (height < 156) {
				heightCategory = 'klein';
			} else if (height < 174) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Halbork':
			if (height < 161) {
				heightCategory = 'klein';
			} else if (height < 183) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		case 'Tiefling':
			if (height < 156) {
				heightCategory = 'klein';
			} else if (height < 175) {
				heightCategory = 'durchschnittlich groß';
			} else {
				heightCategory = 'groß';
			}
			break;
		default:
			heightCategory = 'Unbekannt';
			break;
	}

	// Berechnen des Körpergewichts basierend auf der Körpergröße und dem Ponderal-Index
	let weightKg = (Math.pow(height / 100, 3) * ponderalIndex).toFixed(0);
	let weightLb = (weightKg * 2.20462).toFixed(0); // Konvertierung von kg in Pfund

	// Ausgabe der Ergebnisse
	// console.log('Volk: ' + race);
	console.log('Körpergröße: ' + height + ' cm');
	console.log('Größenkategorie: ' + heightCategory);
	console.log('Körpergewicht (kg): ' + weightKg + ' kg');
	console.log('Körpergewicht (lb): ' + weightLb + ' lb');
	// console.log('Ponderal-Index: ' + ponderalIndex);
	console.log('Gewichtskategorie: ' + weightCategory);
	// console.log('-------------------------------');
}

// Beispielaufruf für die Berechnung der Eigenschaften eines Gebirgszwergs
generateRandomHeightWeight('Mensch');
// calculateCharacterTraits('Hügelzwerg');
// calculateCharacterTraits('Gebirgszwerg');
// calculateCharacterTraits('Hochelf');
// calculateCharacterTraits('Waldelf');
// calculateCharacterTraits('Drow');
// calculateCharacterTraits('Halbling');
// calculateCharacterTraits('Drachenblütiger');
// calculateCharacterTraits('Gnom');
// calculateCharacterTraits('Halbelf');
// calculateCharacterTraits('Halbork');
// calculateCharacterTraits('Tiefling');