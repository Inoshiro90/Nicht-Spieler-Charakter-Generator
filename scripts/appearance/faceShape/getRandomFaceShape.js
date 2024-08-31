function getRandomFaceShape() {
	const faceShapes = [
		"Ovales Gesicht, sanft gerundete Stirn, hervorstehende aber harmonische Wangenknochen, weicher zulaufender Kiefer, abgerundetes Kinn",
		"Rundes Gesicht, weiche und volle Stirn, rundliche und weiche Wangenknochen, weniger definierter Kiefer, rundliches Kinn",
		"Quadratisches Gesicht, breite und gerade Stirn, breite und ausgeprägte Wangenknochen, breiter und kantiger Kiefer, flaches und markantes Kinn",
		"Herzförmiges Gesicht, breite und gewölbte Stirn, sanft geschwungene Wangenknochen, schmaler und eleganter Kiefer, spitzes Kinn",
		"Diamantförmiges Gesicht, schmale und hohe Stirn, auffällige und breite Wangenknochen, schmal zulaufender Kiefer, spitzes und schmales Kinn",
		"Rechteckiges Gesicht, hohe und schmale Stirn, lange und gerade Wangenknochen, langer und schmaler Kiefer, sanft abgerundetes Kinn",
		"Dreieckiges Gesicht, schmale und niedrige Stirn, weniger betonte Wangenknochen, breiter und ausgeprägter Kiefer, breites und flaches Kinn",
	];

	// Zufällige Auswahl einer Gesichtsform mit getRandomElement
	return getRandomElement(faceShapes);
}
