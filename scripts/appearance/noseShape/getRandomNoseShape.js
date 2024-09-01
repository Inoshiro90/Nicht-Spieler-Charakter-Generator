function getRandomNoseShape() {
	const noseShapes = [
		'Markanter Höcker auf der Mitte des Nasenrückens',
		'Stark gebogener Nasenrücken, der unten zu einer markanten, hakenförmigen Spitze zusammenläuft',
		'Flacher, eingesunkener Nasenrücken mit einer sattelförmigen Vertiefung',
		'Breiter Nasenrücken und -flügel mit weit auseinanderstehenden Nasenlöchern',
		'Kurz, nach oben gerichtet mit einer runden, stupsigen Spitze',
		'Rundliche, voluminöse Nasenspitze, weich und voll',
		'Glatter, gerader Nasenrücken ohne auffällige Kurven oder Höcker',
		'Breite, knollige Nasenspitze, ausgeprägtes rundes Volumen',
	];

	// Zufällige Auswahl einer Gesichtsform mit getRandomElement
	return getRandomElement(noseShapes);
}
