function getRandomEyeShape() {
	const eyeShapes = [
		'Langestreckt, oval, leicht nach oben geneigte äußere Augenwinkel',
		'Äußere Augenwinkel leicht nach unten geneigt, weit geöffnete Augenpartie',
		'Äußere Augenwinkel leicht nach oben geneigt, nach oben hin zusammenlaufend',
		'Obere Lidhaut deckt einen Teil der Augenfläche, Überlappung oder Falte über dem oberen Lid',
		'Vollständig runde Form, keine erkennbare Neigung der Augenwinkel',
		'Liegen tiefer in den Augenhöhlen, deutlich sichtbare Augenhöhlenkante',
		'Stehen stärker aus der Augenhöhle hervor, weniger sichtbare Augenhöhlenkante',
	];

	// Zufällige Auswahl einer Gesichtsform mit getRandomElement
	return getRandomElement(eyeShapes);
}
