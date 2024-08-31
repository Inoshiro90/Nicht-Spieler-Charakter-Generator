// function getRandomFaceShape() {
// 	const faceShapes = [
// 		"Ovales Gesicht, sanft gerundete Stirn, hervorstehende aber harmonische Wangenknochen, weicher zulaufender Kiefer, abgerundetes Kinn",
// 		"Rundes Gesicht, weiche und volle Stirn, rundliche und weiche Wangenknochen, weniger definierter Kiefer, rundliches Kinn",
// 		"Quadratisches Gesicht, breite und gerade Stirn, breite und ausgeprägte Wangenknochen, breiter und kantiger Kiefer, flaches und markantes Kinn",
// 		"Herzförmiges Gesicht, breite und gewölbte Stirn, sanft geschwungene Wangenknochen, schmaler und eleganter Kiefer, spitzes Kinn",
// 		"Diamantförmiges Gesicht, schmale und hohe Stirn, auffällige und breite Wangenknochen, schmal zulaufender Kiefer, spitzes und schmales Kinn",
// 		"Rechteckiges Gesicht, hohe und schmale Stirn, lange und gerade Wangenknochen, langer und schmaler Kiefer, sanft abgerundetes Kinn",
// 		"Dreieckiges Gesicht, schmale und niedrige Stirn, weniger betonte Wangenknochen, breiter und ausgeprägter Kiefer, breites und flaches Kinn",
// 	];

// 	// Zufällige Auswahl einer Gesichtsform mit getRandomElement
// 	return getRandomElement(faceShapes);
// }

function getRandomFaceShape() {
	// const foreheadShape = [
	// 	'gerade, schmale und hohe Stirn',
	// 	'gerade, schmale und niedrige Stirn',
	// 	'gerade, breite und hohe Stirn',
	// 	'gerade, breite und niedrige Stirn',
	// 	'gewölbte, schmale und hohe Stirn',
	// 	'gewölbte, schmale und niedrige Stirn',
	// 	'gewölbte, breite und hohe Stirn',
	// 	'gewölbte, breite und niedrige Stirn',
	// ];
	// const cheekBoneShape = [
	// 	'hervorstehende, breite und hohe Wangenknochen',
	// 	'hervorstehende, breite und niedrige Wangenknochen',
	// 	'hervorstehende, schmale und hohe Wangenknochen',
	// 	'hervorstehende, schmale und niedrige Wangenknochen',
	// 	'sanfte, breite und hohe Wangenknochen',
	// 	'sanfte, breite und niedrige Wangenknochen',
	// 	'sanfte, schmale und hohe Wangenknochen',
	// 	'sanfte, schmale und niedrige Wangenknochen',
	// ];
	// const jawShape = [
	// 	'breiter, eckiger und zulaufender Kiefer',
	// 	'breiter, eckiger und ausgeprägter Kiefer',
	// 	'breiter, runder und zulaufender Kiefer',
	// 	'breiter, eckiger und ausgeprägter Kiefer',
	// 	'schmaler, eckiger und zulaufender Kiefer',
	// 	'schmaler, eckiger und ausgeprägter Kiefer',
	// 	'schmaler, runder und zulaufender Kiefer',
	// 	'schmaler, eckiger und ausgeprägter Kiefer',
	// ];
	// const chinShape = [
	// 	'breites, rundes und hervorstehendes Kinn',
	// 	'breites, spitzes und hervorstehendes Kinn',
	// 	'breites, rundes und fliehendes Kinn',
	// 	'breites, spitzes und fliehendes Kinn',
	// 	'schmales, rundes und hervorstehendes Kinn',
	// 	'schmales, spitzes und hervorstehendes Kinn',
	// 	'schmales, rundes und fliehendes Kinn',
	// 	'schmales, spitzes und fliehendes Kinn',
	// ];

	const foreheadShape = [
		'gerade, schmal und hoch',
		'gerade, schmal und niedrig',
		'gerade, breit und hoch',
		'gerade, breit und niedrig',
		'gewölbt, schmal und hoch',
		'gewölbt, schmal und niedrig',
		'gewölbt, breit und hoch',
		'gewölbt, breit und niedrig',
	];

	const cheekBoneShape = [
		'hervorstehend, breit und hoch',
		'hervorstehend, breit und niedrig',
		'hervorstehend, schmal und hoch',
		'hervorstehend, schmal und niedrig',
		'sanft, breit und hoch',
		'sanft, breit und niedrig',
		'sanft, schmal und hoch',
		'sanft, schmal und niedrig',
	];

	const jawShape = [
		'breit, eckig und zulaufend',
		'breit, eckig und ausgeprägt',
		'breit, rund und zulaufend',
		'breit, rund und ausgeprägt',
		'schmal, eckig und zulaufend',
		'schmal, eckig und ausgeprägt',
		'schmal, rund und zulaufend',
		'schmal, rund und ausgeprägt',
	];

	const chinShape = [
		'breit und rund',
		'breit und spitz',
		'schmal und rund',
		'schmal und spitz',
	];

	const faceShape = {};
	faceShape.forehead = getRandomElement(foreheadShape);
	faceShape.cheekBones = getRandomElement(cheekBoneShape);
	faceShape.jaw = getRandomElement(jawShape);
	faceShape.chin = getRandomElement(chinShape);

	return faceShape;
}
