function getRandomEarShape() {
	const ear_shape = ['Oval', 'Dreieckig', 'Rechteckig', 'Rund'];

	const helix = [
		'gerollte Ohrleisten',
		'überlappende Ohrleisten',
		'flache Ohrleisten',
		'eingesunkene Ohrleisten',
		'weite Ohrleisten mit konkaver Randeindrückung',
	];

	// Wahrscheinlichkeitsverteilung basierend auf dem Forschungspapier
	const helixWeights = [
		57.15, // 'gerollte Ohrleisten'
		15.71, // 'überlappende Ohrleisten'
		6.0, // 'eingesunkene Ohrleisten'
		11.14, // 'flache Ohrleisten'
		10.0, // 'weite Ohrleisten mit konkaver Randeindrückung'
	];

	const earlobe = [
		'beidseitig freistehende Ohrläppchen',
		'freistehendes Ohrläppchen ' + getRandomElement(['links', 'rechts']),
		'beidseitig teilweise freistehende Ohrläppchen',
		'teilweise freistehendes Ohrläppchen ' + getRandomElement(['links', 'rechts']),
		'beidseitig angewachsene Ohrläppchen',
		'angewachsenes Ohrläppchen ' + getRandomElement(['links', 'rechts']),
	];

	const earlobeWeights = [
		53.71, // 'freistehende Ohrläppchen beidseitig'
		4.0, // 'freistehendes Ohrläppchen einseitig'
		17.14, // 'teilweise freistehende Ohrläppchen beidseitig'
		2.86, // 'teilweise freistehendes Ohrläppchen einseitig'
		23.72, // 'angewachsene Ohrläppchen beidseitig'
		4.0, // 'angewachsenes Ohrläppchen einseitig'
	];

	const tragus = [
		'keine Ohrhöcker',
		'knotige Ohrhöcker',
		'vergrößerte Ohrhöcker',
		'hervorstehende Ohrhöcker',
	];

	const tragusWeights = [
		58.57, // 'fehlender Darwin-Höcker'
		28.57, // 'knotiger Tragus'
		12.86, // 'vergrößerter Tragus'
		1.43, // 'hervorstehender Tragus'
	];

	const earShape = {};
	earShape.ear_shape = getRandomElement(ear_shape);
	earShape.helix = getRandomElementWeighted(helix, helixWeights);
	earShape.earlobe = getRandomElementWeighted(earlobe, earlobeWeights);
	earShape.tragus = getRandomElementWeighted(tragus, tragusWeights);

	return earShape;
}
