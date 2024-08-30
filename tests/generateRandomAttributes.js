function generateRandomAttributes() {
	// Funktion, um eine zufällige ganze Zahl zwischen min und max (einschließlich) zu generieren
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Attribute und ihre Beschreibungen
	const attribute = {
		Stärke: [
			'Zeigt eine extrem geringe körperliche Kraft und Muskelmasse und hat Schwierigkeiten, selbst leichte Gegenstände zu bewegen.',
			'Hat wenig körperliche Kraft und Muskelmasse und hat Mühe, schwerere Gegenstände zu bewegen.',
			'Besitzt eine durchschnittliche körperliche Kraft und Muskelmasse, kann moderate Aufgaben bewältigen, aber hat Schwierigkeiten bei besonders anspruchsvollen körperlichen Herausforderungen.',
			'Verfügt über beträchtliche körperliche Kraft und Muskelmasse, kann schwere Lasten heben und körperlich anspruchsvolle Aufgaben bewältigen.',
			'Besitzt eine außergewöhnliche körperliche Stärke und Muskelmasse, ist in der Lage, enorme Lasten zu bewegen und körperliche Herausforderungen mühelos zu meistern.',
		],
		Geschicklichkeit: [
			'Zeigt eine auffällige Unfähigkeit, sich geschickt zu bewegen oder Aufgaben präzise auszuführen, neigt dazu, sich häufig zu verheddern oder Dinge umzustoßen.',
			'Hat Schwierigkeiten, sich geschickt zu bewegen oder Aufgaben präzise auszuführen, macht gelegentlich Fehler oder lässt Dinge fallen.',
			'Bewegt sich durchschnittlich geschickt und kann die meisten Aufgaben ohne größere Probleme erledigen, zeigt jedoch keine bemerkenswerte Geschicklichkeit oder Ungeschicklichkeit.',
			'Bewegt sich mit Leichtigkeit und Präzision, führt Aufgaben geschickt und elegant aus, zeigt eine natürliche Anmut in Bewegung und Handeln.',
			'Zeigt eine außergewöhnliche Fähigkeit, sich geschickt zu bewegen und Aufgaben präzise auszuführen, strahlt eine beeindruckende Anmut und Eleganz in allen Handlungen aus.',
		],
		Konstitution: [
			'Zeigt eine stark beeinträchtigte Gesundheit, wenig Ausdauer und geringe Lebenskraft, ist oft krank und anfällig für Verletzungen.',
			'Hat eine schwache Gesundheit und niedrige Ausdauer, neigt dazu, schnell müde zu werden und ist anfällig für Krankheiten.',
			'Verfügt über eine durchschnittliche Gesundheit, Ausdauer und Lebenskraft, kann die meisten Herausforderungen bewältigen, ohne übermäßig erschöpft zu sein.',
			'Besitzt eine gute Gesundheit, hohe Ausdauer und starke Lebenskraft, erholt sich schnell von Verletzungen oder Krankheiten und kann körperliche Anstrengungen gut bewältigen.',
			'Verfügt über eine außergewöhnlich starke Gesundheit, hohe Ausdauer und überwältigende Lebenskraft, ist extrem widerstandsfähig gegen Krankheiten und Verletzungen, kann selbst unter extremen Bedingungen lange durchhalten.',
		],
		Intelligenz: [
			'Zeigt eine stark eingeschränkte geistige Schärfe, eine ungenaue Erinnerung und ein langsames logisches Denkvermögen, hat Schwierigkeiten, komplexe Probleme zu verstehen oder sich Informationen zu merken.',
			'Besitzt eine begrenzte geistige Schärfe und eine eher ungenaue Erinnerung, benötigt mehr Zeit, um komplexe Informationen zu verarbeiten oder logische Zusammenhänge zu erkennen.',
			'Verfügt über eine durchschnittliche geistige Schärfe und Erinnerungspräzision, kann die meisten Informationen verstehen und logische Probleme lösen, benötigt jedoch gelegentlich etwas Zeit, um komplexe Zusammenhänge zu durchschauen.',
			'Besitzt eine gute geistige Schärfe und eine präzise Erinnerung, kann komplexe Probleme effektiv analysieren und logische Schlussfolgerungen ziehen, verfügt über ein solides Verständnis für verschiedene Themen und kann sich schnell neues Wissen aneignen.',
			'Zeigt eine außergewöhnliche geistige Schärfe und eine äußerst präzise Erinnerung, ist in der Lage, komplexe Informationen schnell zu verarbeiten und innovative Lösungen für schwierige Probleme zu finden, verfügt über ein umfassendes Verständnis für eine Vielzahl von Themen und kann sich mühelos neues Wissen aneignen.',
		],
		Weisheit: [
			'Zeigt eine stark eingeschränkte Wahrnehmung und Intuition, neigt dazu, Dinge schnell zu vergessen und kann häufig desorientiert oder abgelenkt sein, hat Schwierigkeiten, die Welt um sich herum zu verstehen oder angemessen darauf zu reagieren.',
			'Besitzt eine begrenzte Wahrnehmung und Intuition, kann Informationen schnell vergessen und ist manchmal abgelenkt oder desorientiert, benötigt Zeit, um sich an neue Situationen anzupassen und angemessen zu reagieren.',
			'Verfügt über eine durchschnittliche Wahrnehmung und Intuition, kann die meisten Situationen angemessen einschätzen und auf sie reagieren, benötigt jedoch gelegentlich zusätzliche Informationen oder Zeit, um kluge Entscheidungen zu treffen.',
			'Besitzt eine gute Wahrnehmung und Intuition, kann die Welt um sich herum klar erfassen und fundierte Schlussfolgerungen ziehen, ist in der Lage, komplexe Probleme zu lösen und anderen mit Einsicht und Ratschlägen zur Seite zu stehen.',
			'Zeigt eine außergewöhnliche Wahrnehmung und Intuition, kann tiefe Einsichten in komplexe Situationen gewinnen und kluge Entscheidungen treffen, verfügt über eine bemerkenswerte Fähigkeit, anderen mit Weisheit und Verständnis zu helfen und Lösungen für schwierige Probleme zu finden.',
		],
		Charisma: [
			'Zeigt wenig Wortgewandtheit, wirkt auf andere oft einschläfernd oder demotivierend, hat Schwierigkeiten, die Aufmerksamkeit anderer zu gewinnen oder sie von seinem Standpunkt zu überzeugen.',
			'Besitzt begrenzte Wortgewandtheit, kann Gespräche manchmal langweilig oder einschläfernd gestalten, benötigt oft zusätzliche Anstrengungen, um andere zu beeinflussen oder zu motivieren.',
			'Verfügt über durchschnittliche Wortgewandtheit, kann sich in den meisten sozialen Situationen angemessen ausdrücken und auf andere eingehen, ohne jedoch besonders überzeugend oder fesselnd zu sein.',
			'Besitzt ein hohes Maß an Wortgewandtheit, kann andere überzeugend beeinflussen und für die eigenen Ideen gewinnen, verfügt über eine charismatische Persönlichkeit, die es ermöglicht, andere zu inspirieren und zu motivieren.',
			'Zeigt eine außergewöhnliche Fähigkeit zur Interaktion und Überzeugung, kann andere mit Leichtigkeit beeinflussen und für die eigenen Ziele gewinnen, besitzt eine natürliche Anziehungskraft und Ausstrahlung, die es ermöglicht, andere zu inspirieren und zu führen.',
		],
	};

	// Durchschnittswerte für Attribute
	const average = 3;

	// Wähle zufällig einen Wert um den Durchschnitt für jedes Attribut
	for (const attributeName in attribute) {
		const deviation = randomNumber(-2, 2); // Zufällige Verschiebung von -2 bis +2 um den Durchschnitt
		const score = average + deviation;
		const index = score - 1;
		console.log(attribute[attributeName][index]);
	}
}

// Funktion aufrufen
generateRandomAttributes();
