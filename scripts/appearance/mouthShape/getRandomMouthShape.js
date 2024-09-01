function getRandomMouthShape() {
	const mouthShapes = [
		'Lippen sind groß, weit, prall und üppig',
		'Lippen sind im Vergleich zur Höhe deutlich breiter, Distanz zwischen den Mundwinkeln ist größer als die Distanz vom Armorbogen zur Unterlippe',
		'Lippen sind schmal und weniger ausgeprägt, Ober- und Unterlippe haben wenig Volumen',
		'Oberlippe hat eine markante V-Form, die an ein Herz erinnert, Lippen sind natürlicherweise etwas voller als breit',
		'Oberlippe hat eine U-förmige Kurve in der Mitte, die wie ein Bogen aussieht, Lippen sind in der Mitte voller als an den Seiten',
		'Lippen haben eine gleichmäßige, kreisrunde Form',
		'Oberlippe ist ausgeprägter und voller als die Unterlippe, Armorbogen ist besonders betont',
		'Unterlippe ist größer und voller als die Oberlippe',
	];

	// Zufällige Auswahl einer Gesichtsform mit getRandomElement
	return getRandomElement(mouthShapes);
}
