// Funktion zur Berechnung der Haarlänge basierend auf einer Gauß'schen Normalverteilung
function generateGaussianDistribution(mean, standardDeviation) {
	var u = 0,
		v = 0;
	while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
	while (v === 0) v = Math.random();
	var z0 = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	// Anpassung der Standardabweichung und Mittelwert
	var hairLength = z0 * standardDeviation + mean;

	// Runden auf ganze Zahlen und Begrenzung auf den Bereich von 1 bis 100
	hairLength = Math.round(hairLength);
	hairLength = Math.max(1, Math.min(100, hairLength));

	return hairLength;
}

// Funktion zur Zuordnung der Haarlänge zu einem Namen
function assignHairLengthName(hairLength) {
	// Liste von Haarlängen und ihren Namen
	var hairLengthMappings = [
		{min: 1, max: 6, name: 'Glatze/Haarlos'},
		{min: 7, max: 15, name: 'kurzgeschoren'},
		{min: 16, max: 30, name: 'ohrlang'},
		{min: 31, max: 45, name: 'kinnlang'},
		{min: 46, max: 60, name: 'schulterlang'},
		{min: 61, max: 75, name: 'achsellang'},
		{min: 76, max: 85, name: 'rückenlang'},
		{min: 86, max: 100, name: 'polang'},
	];

	// Durchlaufe die Liste von Haarlängen und finde den entsprechenden Namen
	for (var i = 0; i < hairLengthMappings.length; i++) {
		if (hairLength >= hairLengthMappings[i].min && hairLength <= hairLengthMappings[i].max) {
			return hairLengthMappings[i].name;
		}
	}

	// Wenn keine Übereinstimmung gefunden wurde, gebe einen Standardnamen zurück
	return 'Unbekannt';
}

// Mittelwert und Standardabweichung für schulterlange Haare bei Frauen
var meanHairLengthWomen = 50; // Schulterlänge
var standardDeviationWomen = 20; // Beispielstandardabweichung

// Mittelwert und Standardabweichung für kinnlange Haare bei Männern
var meanHairLengthMen = 20; // Kinnlang
var standardDeviationMen = 15; // Beispielstandardabweichung

// Anzahl der generierten Haarlängen
var numGenerated = 1;

function generateRandomHairlengthMan() {
	hairLength = {};
	hairLength.value = generateGaussianDistribution(meanHairLengthMen, standardDeviationMen);
	hairLength.description = assignHairLengthName(hairLength.value);
	// console.log(
	// 	'Generated hair length man: ' + hairLength.value + ', Name: ' + hairLength.description
	// );
	return hairLength;
}

function generateRandomHairlengthWoman() {
	hairLength = {};
	hairLength.value = generateGaussianDistribution(meanHairLengthWomen, standardDeviationWomen);
	hairLength.description = assignHairLengthName(hairLength.value);
	// console.log(
	// 	'Generated hair length woman: ' + hairLength.value + ', Name: ' + hairLength.description
	// );
	return hairLength;
}

function generateRandomHairLength(gender) {
	switch (gender) {
		case 'Männlich':
			hairLength = generateRandomHairlengthMan();
			break;
		case 'Weiblich':
			hairLength = generateRandomHairlengthWoman();
			break;
		case 'Nicht-binär':
			hairLength = getRandomElement([
				generateRandomHairlengthMan(),
				generateRandomHairlengthWoman(),
			]);
			break;
		default:
			console.error('Ungültiges Geschlecht: ' + gender);
	}
	// console.log('Haarlänge: ' + hairLength.description);
	return hairLength;
}
// // Generierung von Haarlängen und Ausgabe für Frauen
// console.log('Generierte Haarlängen für Frauen:');
// for (var i = 0; i < numGenerated; i++) {
// 	var hairLength = generateGaussianDistribution(meanHairLengthWomen, standardDeviationWomen);
// 	var hairLengthName = assignHairLengthName(hairLength);
// 	console.log('Generated hair length: ' + hairLength + ', Name: ' + hairLengthName);
// }

// // Generierung von Haarlängen und Ausgabe für Männer
// console.log('\nGenerierte Haarlängen für Männer:');
// for (var i = 0; i < numGenerated; i++) {
// 	var hairLength = generateGaussianDistribution(meanHairLengthMen, standardDeviationMen);
// 	var hairLengthName = assignHairLengthName(hairLength);
// 	console.log('Generated hair length: ' + hairLength + ', Name: ' + hairLengthName);
// }
