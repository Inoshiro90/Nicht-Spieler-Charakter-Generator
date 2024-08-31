function getRandomFaceShape() {
	const faceShapes = [
		"Oval",
		"Rund",
		"Quadratisch",
		"Herzförmig",
		"Trapezförmig",
		"Rautenförmig",
		"V-förmig",
		"A-förmig",
		"Rechteckig"
	];

	// Zufällige Auswahl einer Gesichtsform mit getRandomElement
	return getRandomElement(faceShapes);
}
