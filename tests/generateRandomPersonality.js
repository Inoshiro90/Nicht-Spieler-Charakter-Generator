// Objekt, um Testergebnisse zu speichern
const testResults = {};

// Definition der Facetten des HEXACO-Modells und deren Beschreibungen
const description_facet = {
	H1: 'Aufrichtigkeit',
	H2: 'Fairness',
	H3: 'Materielle Genügsamkeit',
	H4: 'Bescheidenheit',
	E1: 'Ängstlichkeit',
	E2: 'Besorgtheit',
	E3: 'Abhängigkeit',
	E4: 'Verbundenheit',
	X1: 'Soziales Selbstvertrauen',
	X2: 'Soziale Kühnheit',
	X3: 'Geselligkeit',
	X4: 'Lebhaftigkeit',
	A1: 'Vergebungsbereitschaft',
	A2: 'Nachsichtigkeit',
	A3: 'Kompromissbereitschaft',
	A4: 'Sanftmut',
	C1: 'Organisiertheit',
	C2: 'Fleiß',
	C3: 'Perfektionismus',
	C4: 'Besonnenheit',
	O1: 'Wertschätzung für Kunst und Natur',
	O2: 'Wissbegierde',
	O3: 'Kreativität',
	O4: 'Unkonventionalität',
};

// Funktion zur Abbildung von Buchstaben auf die vollständigen Namen der Oberkategorien
function mapOverallCategoryNames(key) {
	switch (key) {
		case 'H':
			return 'Ehrlichkeit/Bescheidenheit';
		case 'E':
			return 'Emotionale Stabilität';
		case 'X':
			return 'Extraversion';
		case 'A':
			return 'Verträglichkeit';
		case 'C':
			return 'Gewissenhaftigkeit';
		case 'O':
			return 'Offenheit für Erfahrungen';
		default:
			return '';
	}
}

// Individuelle Beschreibungen für jeden Wert jeder Facette
const individualDescriptions = {
	H1: {
		'Sehr niedrig': 'Tendiert dazu, sich zu verstellen und unaufrichtig zu sein, um persönliche Ziele zu erreichen. Beeinflusst andere oft zum eigenen Vorteil.',
		Niedrig: 'Kann dazu neigen, die Wahrheit zu verdrehen, um eigene Interessen zu schützen oder zu fördern, zeigt geringe Skrupel bei der Manipulation anderer.',
		Moderat: 'Bemüht sich um Aufrichtigkeit, kann jedoch in bestimmten Situationen dazu neigen, Informationen zurückzuhalten, um Konflikte zu vermeiden oder den eigenen Ruf zu schützen.',
		Hoch: 'Ist in der Regel aufrichtig und unverstellt im interpersonellen Kontakt, vermeidet Täuschung und betrügerisches Verhalten.',
		'Sehr hoch': 'Zeigt eine außergewöhnlich hohe Authentizität und Aufrichtigkeit, beeinflusst andere nicht zum eigenen Vorteil und handelt stets nach ethischen Prinzipien.',
	},
	H2: {
		'Sehr niedrig': 'Neigt dazu, Regeln zu brechen und andere zu übervorteilen, um persönlichen Nutzen zu erlangen, zeigt wenig Respekt vor den Rechten oder Bedürfnissen anderer.',
		Niedrig: 'Kann unfair sein und Regeln nicht genau einhalten, um eigene Interessen zu fördern, zeigt geringe Bereitschaft, anderen gegenüber gerecht zu handeln.',
		Moderat: 'Strebt nach Gerechtigkeit, obwohl unter bestimmten Umständen persönliche Vorurteile Einfluss nehmen können.',
		Hoch: 'Ist fair und ehrlich im Umgang mit anderen, respektiert die Rechte und Bedürfnisse anderer, auch wenn es persönlich unangenehm ist.',
		'Sehr hoch': 'Legt höchsten Wert auf Gerechtigkeit und Integrität, handelt stets ethisch und bereichert sich nicht auf Kosten anderer.',
	},
	H3: {
		'Sehr niedrig': 'Strebt nach Reichtum und Luxus, legt großen Wert auf materielle Güter und den sozialen Status, vernachlässigt andere Lebensaspekte zugunsten des Materiellen.',
		Niedrig: 'Schätzt materielle Güter übermäßig und misst den eigenen Wert oft an Besitz und Reichtum, neigt dazu, geizig oder verschwenderisch zu sein.',
		Moderat: 'Hat eine ausgewogene Einstellung zum Besitz und sozialem Status, schätzt nicht nur materielle Güter, sondern auch immaterielle Werte wie Beziehungen und Erfahrungen.',
		Hoch: 'Achtet darauf, dass materielle Güter nicht überbewertet werden, ist zufrieden mit dem, was vorhanden ist, und legt mehr Wert auf persönliche Erfüllung als auf materielle Akkumulation.',
		'Sehr hoch': 'Hat eine ausgeprägte Unabhängigkeit von materiellen Gütern und sozialem Status, findet Erfüllung und Zufriedenheit in immateriellen Lebensaspekten.',
	},
	H4: {
		'Sehr niedrig': 'Fühlt sich anderen gegenüber oft privilegiert und überlegen, neigt dazu, sich als besonders und herausragend zu betrachten.',
		Niedrig: 'Kann dazu neigen, die eigenen Fähigkeiten zu übertreiben und nach Anerkennung zu streben, zeigt wenig Demut oder Dankbarkeit gegenüber anderen.',
		Moderat: 'Ist bescheiden in Bezug auf die eigenen Fähigkeiten und Leistungen, zeigt Anerkennung für die Beiträge anderer und ist bereit, von ihnen zu lernen.',
		Hoch: 'Zeigt eine gesunde Bescheidenheit und ein realistisches Selbstbild, ist dankbar für Erfolge, ohne sie übermäßig zu betonen, und schätzt die Beiträge anderer angemessen.',
		'Sehr hoch': 'Betrachtet sich und andere als gleichwertig, beansprucht keine besondere Behandlung und zeigt eine außergewöhnliche Demut und Wertschätzung für die Leistungen anderer.',
	},
	E1: {
		'Sehr niedrig': 'Ist risikofreudig und mutig, zeigt wenig Angst vor möglichen Verletzungen oder Schmerzen.',
		Niedrig: 'Ist selten ängstlich und bleibt in angespannten Situationen ruhig und gelassen, schreckt nicht vor Herausforderungen zurück.',
		Moderat: 'Kann in verschiedenen Situationen Angst empfinden, bleibt jedoch größtenteils ruhig und gelassen, auch wenn die Bedrohung gering ist.',
		Hoch: 'Neigt dazu, in verschiedenen Situationen große Angst zu empfinden und körperliche Schmerzen zu vermeiden, reagiert empfindlich auf mögliche Bedrohungen.',
		'Sehr hoch': 'Empfindet in vielen Situationen große Angst und vermeidet körperliche Schmerzen oder Bedrohungen um jeden Preis, kann sich von Ängsten überwältigt fühlen und hat möglicherweise Schwierigkeiten, mit ihnen umzugehen.',
	},
	E2: {
		'Sehr niedrig': 'Macht sich selten Sorgen, bleibt in stressigen Situationen ruhig und gelassen, hat eine optimistische Einstellung.',
		Niedrig: 'Ist selten besorgt, kann jedoch in bestimmten Situationen leichte Besorgnis zeigen, bleibt jedoch größtenteils ruhig und gelassen.',
		Moderat: 'Neigt dazu, sich manchmal Sorgen zu machen, besonders über kleine Dinge, kann schnell angespannt sein und schlecht schlafen, wenn die Gedanken kreisen.',
		Hoch: 'Macht sich oft Sorgen, auch über kleine Dinge, reagiert schnell auf Stress und kann Schwierigkeiten haben, sich zu beruhigen oder zu entspannen.',
		'Sehr hoch': 'Macht sich sehr häufig und intensiv Sorgen über verschiedene Aspekte des Lebens, auch über kleine Dinge, fühlt sich oft gestresst und angespannt, und hat starke Schwierigkeiten, sich zu beruhigen oder zu entspannen.',
	},
	E3: {
		'Sehr niedrig': 'Fühlt sich in der Lage, Probleme ohne Hilfe oder Rat anderer zu bewältigen, bevorzugt Unabhängigkeit und Selbstständigkeit.',
		Niedrig: 'Ist relativ unabhängig und fühlt sich nicht stark auf emotionale Unterstützung von anderen angewiesen, kann jedoch in bestimmten Situationen Unterstützung suchen.',
		Moderat: 'Sucht aktiv nach emotionaler Unterstützung von anderen und ist bereit, über persönliche Probleme zu sprechen, um Rat zu bitten und Unterstützung zu erhalten.',
		Hoch: 'Ist auf emotionale Unterstützung von anderen angewiesen, sucht aktiv nach Bestätigung und Unterstützung in interpersonellen Beziehungen.',
		'Sehr hoch': 'Ist äußerst abhängig von emotionaler Unterstützung durch andere, sucht ständig nach Bestätigung und Unterstützung in interpersonellen Beziehungen, fühlt sich unsicher und verloren ohne die ständige Anwesenheit oder Unterstützung anderer.',
	},
	E4: {
		'Sehr niedrig': 'Lässt sich so gut wie gar nicht von den Gefühlen anderer mitreißen, zeigt oft wenig Mitgefühl oder emotionale Reaktionen.',
		Niedrig: 'Reagiert in sozialen Situationen oft wenig emotional, zeigt selten starke Mitgefühl oder emotionale Verbundenheit.',
		Moderat: 'Ist in der Lage, Mitgefühl und emotionale Verbundenheit zu zeigen, reagiert jedoch nicht immer stark auf die Gefühle anderer.',
		Hoch: 'Zeigt in vielen sozialen Situationen starke Emotionen und Mitgefühl, fühlt sich stark mit anderen verbunden und reagiert einfühlsam auf deren Gefühle.',
		'Sehr hoch': 'Empfindet starke emotionale Verbundenheit mit anderen, reagiert äußerst einfühlsam auf die Gefühle und Bedürfnisse anderer, fühlt sich tief mit anderen verbunden und kann die Gefühle anderer stark mitempfinden.',
	},
	X1: {
		'Sehr niedrig': 'Neigt dazu, sich weniger wert und unbeliebt zu fühlen, hat oft ein geringes Selbstwertgefühl und zweifelt an der eigenen sozialen Kompetenz.',
		Niedrig: 'Kann sich unsicher fühlen und Zweifel an der eigenen sozialen Kompetenz haben, fühlt sich möglicherweise nicht immer wohl in sozialen Situationen.',
		Moderat: 'Hat ein ausgewogenes Maß an Selbstvertrauen in sozialen Situationen, fühlt sich normalerweise wohl und akzeptiert, kann jedoch gelegentlich Selbstzweifel haben.',
		Hoch: 'Ist in der Regel mit sich selbst zufrieden und denkt von sich selbst, eine sympathische Ausstrahlung zu haben, hat ein starkes Selbstwertgefühl und fühlt sich in sozialen Situationen sicher.',
		'Sehr hoch': 'Ist äußerst selbstsicher und glaubt fest an die eigene soziale Kompetenz, hat ein sehr hohes Selbstwertgefühl und fühlt sich in den meisten sozialen Situationen äußerst wohl und akzeptiert.',
	},
	X2: {
		'Sehr niedrig': 'Übernimmt sehr ungern die Führungsrolle und fühlt sich unwohl, wenn es darum geht, vor einer Gruppe oder mit fremden Personen zu sprechen, zeigt wenig Selbstvertrauen in sozialen Situationen.',
		Niedrig: 'Kann sich unsicher fühlen und zögern, in sozialen Situationen die Initiative zu ergreifen oder die eigene Meinung zu äußern, vermeidet oft Führungspositionen.',
		Moderat: 'Hat ein ausgewogenes Maß an Selbstvertrauen in sozialen Situationen und ist bereit, Verantwortung zu übernehmen, fühlt sich jedoch nicht immer wohl in der Führungsrolle.',
		Hoch: 'Fühlt sich in der Führungsrolle sicher und hat keine Scheu, die eigene Meinung vor anderen zu äußern, übernimmt gerne Verantwortung und zeigt Selbstvertrauen in sozialen Situationen.',
		'Sehr hoch': 'Ist äußerst selbstsicher und übernimmt gerne die Führung, fühlt sich in jeder sozialen Situation wohl und zeigt eine starke Präsenz.',
	},
	X3: {
		'Sehr niedrig': 'Sucht selten das Gespräch und bevorzugt es, alleine zu sein, fühlt sich nicht besonders wohl in großen sozialen Gruppen.',
		Niedrig: 'Zieht sich gerne zurück und verbringt oft Zeit alleine, schätzt jedoch auch gelegentliche soziale Interaktionen, fühlt sich aber nicht nicht immer wohl in großen sozialen Gruppen.',
		Moderat: 'Schätzt den direkten Kontakt und unterhält sich in verschiedenen Situationen gerne mit anderen Menschen, ist jedoch auch in der Lage, Zeit alleine zu genießen.',
		Hoch: 'Genießt den sozialen Austausch und gesellschaftliche Anlässe, sucht aktiv nach Gesprächspartnern und ist gerne in sozialen Gruppen präsent.',
		'Sehr hoch': 'Liebt den direkten Kontakt und unterhält sich gerne mit anderen, sucht ständig nach neuen sozialen Interaktionen und ist oft das Zentrum der Aufmerksamkeit in sozialen Gruppen.',
	},
	X4: {
		'Sehr niedrig': 'Ist wenig fröhlich und energiegeladen, zeigt oft eine geringere Begeisterung und Enthusiasmus für verschiedene Aktivitäten.',
		Niedrig: 'Kann weniger enthusiastisch und zuversichtlich sein, braucht möglicherweise mehr Zeit, um sich für Aktivitäten zu begeistern, zeigt weniger Optimismus.',
		Moderat: 'Hat ein ausgewogenes Maß an Enthusiasmus und Zuversicht, ist oft energiegeladen und erlebt gelegentlich Optimismus und gute Laune.',
		Hoch: 'Ist in der Regel voller Energie und erlebt oft Optimismus und gute Laune, zeigt eine positive Einstellung und Begeisterung für verschiedene Aktivitäten.',
		'Sehr hoch': 'Ist äußerst enthusiastisch und zuversichtlich, sprudelt vor Energie und zeigt eine ansteckende Begeisterung für das Leben und verschiedene Aktivitäten.',
	},
	A1: {
		'Sehr niedrig': 'Neigt sehr dazu, nachtragend und misstrauisch gegenüber denen zu sein, die Schaden zugefügt haben, und hat starke Schwierigkeiten, anderen zu vergeben oder vertrauensvolle Beziehungen wiederherzustellen.',
		Niedrig: 'Kann Schwierigkeiten haben, anderen zu vergeben, und neigt dazu, nachtragend zu sein, zeigt wenig Bereitschaft, vertrauensvolle Beziehungen wiederherzustellen.',
		Moderat: 'Ist in der Regel bereit, anderen zu vergeben und vertrauensvolle Beziehungen wiederherzustellen, kann jedoch gelegentlich zögern oder Bedenken haben.',
		Hoch: 'Ist dazu bereit, anderen nach einer Kränkung wieder zu vertrauen und freundschaftliche Beziehungen wiederherzustellen, zeigt eine hohe Vergebungsbereitschaft und einen offenen Umgang mit Konflikten.',
		'Sehr hoch': 'Zeigt eine außergewöhnlich hohe Bereitschaft, anderen zu vergeben, und ist schnell bereit, vertrauensvolle Beziehungen wiederherzustellen, auch nach schwerwiegenden Verletzungen.',
	},
	A2: {
		'Sehr niedrig': 'Neigt dazu, andere streng zu beurteilen und wenig Toleranz für ihre Fehler oder Schwächen zu zeigen, kann kritisch und unversöhnlich in der Beurteilung anderer sein.',
		Niedrig: 'Beurteilt andere tendenziell kritisch und zeigt wenig Toleranz für ihre Fehler oder Schwächen, kann jedoch gelegentlich nachsichtig sein.',
		Moderat: 'Zeigt eine gewisse Toleranz für die Fehler und Schwächen anderer und ist bereit, ihre Handlungen in einem positiven Licht zu betrachten, kann jedoch gelegentlich kritisch sein.',
		Hoch: 'Nimmt die Schwächen anderer Personen in der Regel tolerant hin und ist nachsichtig bei der Beurteilung ihres Verhaltens, zeigt eine hohe Toleranz und Akzeptanz.',
		'Sehr hoch': 'Zeigt eine außergewöhnliche Toleranz für die Fehler und Schwächen anderer und ist bereit, diese großzügig zu übersehen, ohne sie zu kritisieren oder zu verurteilen.',
	},
	A3: {
		'Sehr niedrig': 'Reagiert oft mit Widerstand auf andere Meinungen und ist unnachgiebig in der Verteidigung des eigenen Standpunkts, zeigt wenig Bereitschaft, Kompromisse einzugehen oder zusammenzuarbeiten.',
		Niedrig: 'Kann Schwierigkeiten haben, Kompromisse einzugehen, und neigt dazu, auf dem eigenen Standpunkt zu beharren, zeigt wenig Flexibilität oder Zusammenarbeitsbereitschaft.',
		Moderat: 'Ist in der Regel offen für andere Meinungen und sucht Kompromisse und Zusammenarbeit, kann jedoch gelegentlich zögerlich sein.',
		Hoch: 'Zeigt eine hohe Bereitschaft, Kompromisse einzugehen und zusammenzuarbeiten, ist flexibel und offen für die Ideen anderer.',
		'Sehr hoch': 'Hat eine außergewöhnlich hohe Bereitschaft, Kompromisse einzugehen und sich auf andere einzulassen, ist schnell bereit, gemeinsame Lösungen zu finden und auf ein gemeinsames Ziel hinzuarbeiten.',
	},
	A4: {
		'Sehr niedrig': 'Reagiert oft ungehalten und aufbrausend auf Herausforderungen, hat Schwierigkeiten, die Fassung zu bewahren und ruhig zu bleiben.',
		Niedrig: 'Kann Schwierigkeiten haben, die Fassung zu bewahren und zeigt gelegentlich unkontrollierte Wutausbrüche, zeigt wenig Gelassenheit oder Geduld.',
		Moderat: 'Ist in der Regel gelassen und verliert nur manchmal die Fassung, bleibt meist ruhig und besonnen in stressigen Situationen.',
		Hoch: 'Zeigt eine hohe Fähigkeit, gelassen zu bleiben und Konflikte ruhig anzugehen, vermeidet es, sich von Wut oder Frustration überwältigen zu lassen.',
		'Sehr hoch': 'Bewahrt in jeder Situation eine außergewöhnliche Gelassenheit und Ruhe, zeigt eine bemerkenswerte Fähigkeit, auch in stressigen Situationen einen klaren Kopf zu bewahren.',
	},
	C1: {
		'Sehr niedrig': 'Ist eher unordentlich und unorganisiert, hat wenig Bedürfnis nach Struktur und zeigt wenig Interesse an einer geordneten Herangehensweise an Aufgaben.',
		Niedrig: 'Kann Mühe haben, Ordnung zu halten und eine strukturierte Herangehensweise an Aufgaben zu verfolgen, zeigt wenig Engagement für die Organisation.',
		Moderat: 'Kann eine gewisse Ordnung halten und eine strukturierte Herangehensweise an Aufgaben verfolgen, zeigt jedoch nicht immer eine hohe Präferenz für Ordnung und Struktur.',
		Hoch: 'Ist auf Ordnung bedacht und bevorzugt eine strukturierte Herangehensweise an Aufgaben, setzt sich aktiv dafür ein, Ordnung zu halten und effizient zu arbeiten.',
		'Sehr hoch': 'Legt großen Wert auf Ordnung und Struktur, strebt nach höchster Effizienz und Präzision bei der Durchführung von Aufgaben, zeigt eine außergewöhnliche Fähigkeit zur Organisation und Planung.',
	},
	C2: {
		'Sehr niedrig': 'Neigt sehr dazu, Aufgaben aufzuschieben und wenig Anstrengung zu investieren, zeigt eine geringe Motivation, sich anzustrengen.',
		Niedrig: 'Kann dazu neigen, weniger gewissenhaft zu arbeiten und sich weniger zu bemühen als andere, zeigt eine niedrigere Leistungsmotivation.',
		Moderat: 'Arbeitet gewissenhaft und zielstrebig, setzt sich ehrgeizige Ziele und bemüht sich, diese zu erreichen, zeigt jedoch nicht immer eine hohe Anstrengungsbereitschaft.',
		Hoch: 'Setzt sich intensiv für die eigenen Ziele ein und ist bereit, mehr als andere zu tun, um erfolgreich zu sein, zeigt eine hohe Leistungsmotivation und Zielstrebigkeit.',
		'Sehr hoch': 'Arbeitet äußerst hart und zielstrebig, ist hochmotiviert und bereit, alles zu tun, um die eigenen Ziele zu erreichen, zeigt eine außergewöhnliche Ausdauer und Engagement.',
	},
	C3: {
		'Sehr niedrig': 'Nimmt Fehler bewusst in Kauf und zeigt wenig Interesse an Perfektion, prüft nicht jedes Detail und akzeptiert Fehler oder Unvollkommenheiten.',
		Niedrig: 'Kann dazu neigen, nicht alle Details zu überprüfen und Fehler in Kauf zu nehmen, zeigt eine gewisse Toleranz für Unvollkommenheiten.',
		Moderat: 'Strebt nach einer gewissen Genauigkeit und Präzision, überprüft jedoch nicht jedes Detail akribisch und akzeptiert gelegentliche Fehler.',
		Hoch: 'Strebt nach Perfektion und überprüft die eigene Arbeit sorgfältig, um Fehler oder Verbesserungsmöglichkeiten zu finden, zeigt eine hohe Genauigkeit und Sorgfalt.',
		'Sehr hoch': 'Strebt konsequent nach Perfektion und überprüft die eigene Arbeit bis ins kleinste Detail, zeigt eine außergewöhnliche Sorgfalt und Genauigkeit bei der Durchführung von Aufgaben.',
	},
	C4: {
		'Sehr niedrig': 'Reagiert spontan auf Impulse und handelt ohne langes Nachdenken oder Abwägen der Konsequenzen, kann dazu neigen, unüberlegte Entscheidungen zu treffen.',
		Niedrig: 'Kann dazu neigen, impulsiv zu handeln und nicht immer die langfristigen Konsequenzen der eigenen Handlungen zu berücksichtigen, zeigt eine gewisse Tendenz zur Impulsivität.',
		Moderat: 'Prüft die eigenen Optionen sorgfältig und handelt wohl überlegt, zeigt eine gewisse Vorsicht und Bedachtsamkeit in seinen Handlungen.',
		Hoch: 'Ist bedacht und beherrscht, neigt dazu, die Konsequenzen der eigenen Handlungen sorgfältig abzuwägen und nicht spontan auf Impulse zu reagieren.',
		'Sehr hoch': 'Prüft die eigenen Optionen äußerst sorgfältig und handelt äußerst überlegt, zeigt eine außergewöhnliche Fähigkeit, Emotionen zu kontrollieren und rational zu handeln.',
	},
	O1: {
		'Sehr niedrig': 'Interessiert sich so gut wie gar nicht für Kunst und Natur, bleibt unberührt von ästhetischen oder natürlichen Schönheiten, zeigt wenig Neigung, sich mit verschiedenen Kunstformen oder der Natur zu beschäftigen.',
		Niedrig: 'Hat nur geringes Interesse an Kunst und Natur, zeigt nur wenig Bewunderung für ästhetische oder natürliche Schönheiten, investiert wenig Zeit in das Betrachten von Kunstwerken oder die Erkundung der Natur.',
		Moderat: 'Hat ein gewisses Interesse an Kunst und Natur, zeigt gelegentlich Bewunderung für ästhetische oder natürliche Schönheiten, kann jedoch auch gleichgültig gegenüber Kunst und Natur sein.',
		Hoch: 'Interessiert sich häufig für Kunst und Natur, genießt das Betrachten von Kunstwerken und die Erkundung der Natur, zeigt häufig Bewunderung für ästhetische und natürliche Schönheiten.',
		'Sehr hoch': 'Befasst sich überaus gerne mit verschiedenen Kunstformen und genießt die Betrachtung der Natur oder von Kunstwerken in vollen Zügen, zeigt sehr häufig eine tiefverwurzelte Bewunderung für ästhetische und natürliche Schönheiten.',
	},
	O2: {
		'Sehr niedrig': 'Zeigt geringes Interesse an der Welt um sich herum, ist nur sehr selten neugierig für neue Informationen oder Ideen, strebt nur selten nach Wissen über Mensch und Umwelt.',
		Niedrig: 'Hat geringe Neugierde für die Welt um sich herum, zeigt wenig Interesse an neuen Informationen oder Ideen, investiert wenig Zeit in das Erlernen neuer Dinge über Mensch und Umwelt.',
		Moderat: 'Zeigt ein gewisses Interesse an der Welt um sich herum, kann neugierig sein auf neue Informationen oder Ideen, verfolgt jedoch nicht aktiv ein breites Wissen über Mensch und Umwelt.',
		Hoch: 'Zeigt starkes Interesse an der Umwelt, ist neugierig auf neue Informationen oder Ideen, strebt aktiv danach, ein breites Wissen über verschiedene Themen zu erlangen.',
		'Sehr hoch': 'Interessiert sich sehr stark für die Umwelt und verschafft sich auf vielfältige Weise ein breites und intensives Wissen darüber, zeigt eine ausgeprägte Neugierde für neue Informationen oder Ideen.',
	},
	O3: {
		'Sehr niedrig': 'Bevorzugt fast immer Routine und vermeidet stark Experimente oder innovative Ideen, zeigt nur eine sehr geringe Neigung zu kreativen Ausdrucksformen oder originellen Lösungen.',
		Niedrig: 'Hat wenig Neigung zu kreativem Denken oder originellen Ideen, bevorzugt etablierte Wege und Lösungen, zeigt wenig Interesse an Experimenten oder Innovation.',
		Moderat: 'Kann zuweilen kreatives Denken zeigen und originelle Ideen haben, ist jedoch nicht konsequent innovativ oder experimentell.',
		Hoch: 'Sucht nach neuen Lösungen für Probleme und zeigt kreative Ausdrucksformen, ist offen für Experimente und Innovation.',
		'Sehr hoch': 'Sucht aktiv nach neuartigen Lösungen für Probleme und drückt sich gerne künstlerisch aus, strebt intensiv nach originellen Ideen und kreativen Ausdrucksformen.',
	},
	O4: {
		'Sehr niedrig': 'Bevorzugt ausschließlich den Kontakt zu Personen, die den gesellschaftlichen Konventionen entsprechen, zeigt sehr geringes Interesse an ungewöhnlichen Ideen oder Meinungen, folgt eher traditionellen oder konservativen Überzeugungen.',
		Niedrig: 'Hat wenig Interesse an unkonventionellen Ideen oder Meinungen, neigt dazu, sich an gesellschaftliche Konventionen zu halten, zeigt wenig Neigung, eigene ungewöhnliche Überzeugungen zu entwickeln.',
		Moderat: 'Kann gelegentlich Interesse an unkonventionellen Ideen oder Meinungen zeigen, bleibt jedoch größtenteils in den gesellschaftlichen Normen verankert.',
		Hoch: 'Interessiert sich für unkonventionelle Ideen und Meinungen, diskutiert gerne darüber und schätzt die eigene Überzeugungen als unüblich ein, ist offen für neue Denkweisen.',
		'Sehr hoch': 'Zeigt eine sehr starke Vorliebe für ungewöhnliche Ideen oder Meinungen, diskutiert intensiv darüber und schätzt die eigenen Überzeugungen als sehr ungewöhnlich ein, ist mehr als offen für neue Denkweisen und experimentiert gerne mit ungewöhnlichen Ansichten.',
	},
};

// Funktion zur Generierung einer Zufallszahl zwischen min und max
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funktion zur Berechnung des Durchschnitts einer Array von Zahlen
function calculateAverage(arr) {
	const sum = arr.reduce((acc, curr) => acc + curr, 0);
	return sum / arr.length;
}

// Funktion zur Kategorisierung eines Durchschnittswerts
function categorizeScore(average) {
	if (average <= 2) {
		return 'Sehr niedrig';
	} else if (average <= 4) {
		return 'Niedrig';
	} else if (average <= 6) {
		return 'Moderat';
	} else if (average <= 8) {
		return 'Hoch';
	} else if (average <= 10) {
		return 'Sehr hoch';
	}
}

// Schleife zur Generierung simulierter Testergebnisse für jede Facette
for (const key in description_facet) {
	const facetResults = [];
	for (let i = 0; i < 1; i++) {
		const randomScore = getRandomNumber(1, 10);
		facetResults.push(randomScore);
	}
	testResults[key] = facetResults;
}

// Funktion zum Berechnen des Durchschnitts für Oberkategorien
function calculateOverallAverage(results) {
	const overallAverages = {};

	// Schleife über die Oberkategorien
	for (const key of ['H', 'E', 'X', 'A', 'C', 'O']) {
		const facetResults = [];

		// Schleife über die Unterkategorien und Aggregation der Ergebnisse
		for (const subKey in results) {
			if (subKey.startsWith(key)) {
				facetResults.push(...results[subKey]);
			}
		}

		// Berechnung des Durchschnitts und Speicherung in overallAverages
		overallAverages[key] = calculateAverage(facetResults);
	}

	return overallAverages;
}

// Funktion zur Formatierung der Ergebnisse
function formatResults(results, descriptions, individualDescriptions, overallAverages) {
	const formattedResults = {};

	// Formatieren der Ergebnisse für jede Facette
	for (const key in results) {
		const average = calculateAverage(results[key]);
		const category = categorizeScore(average);
		const facetDescription = individualDescriptions[key][category];

		formattedResults[key] = {
			name: descriptions[key], // Füge den Namen der Facette hinzu
			score: average.toFixed(2),
			category: category,
			description: facetDescription // Füge die Facettenbeschreibung hinzu
		};
	}

	// Hinzufügen der Durchschnittswerte der Oberkategorien zu den formatierten Ergebnissen
	for (const key in overallAverages) {
		const category = categorizeScore(overallAverages[key]);
		formattedResults[key] = {
			name: mapOverallCategoryNames(key), // Verwende die vollständigen Namen der Oberkategorien
			score: overallAverages[key].toFixed(2),
			category: category,
			//description: `Durchschnittswert für die Oberkategorie ${mapOverallCategoryNames(key)}: ${category} (${overallAverages[key].toFixed(2)})`
		};
	}

	return formattedResults;
}

// Berechnen der Durchschnittswerte für die Oberkategorien
const overallAverages = calculateOverallAverage(testResults);

// Formatieren der Ergebnisse
const formattedResults = formatResults(
	testResults,
	description_facet,
	individualDescriptions,
	overallAverages
);

// Ausgabe der formatierten Ergebnisse
// console.log(formattedResults);
console.log(formattedResults.H1.description)
console.log(formattedResults.H2.description)
console.log(formattedResults.H3.description)
console.log(formattedResults.H4.description)

console.log(formattedResults.E1.description)
console.log(formattedResults.E2.description)
console.log(formattedResults.E3.description)
console.log(formattedResults.E4.description)

console.log(formattedResults.X1.description)
console.log(formattedResults.X2.description)
console.log(formattedResults.X3.description)
console.log(formattedResults.X4.description)

console.log(formattedResults.A1.description)
console.log(formattedResults.A2.description)
console.log(formattedResults.A3.description)
console.log(formattedResults.A4.description)

console.log(formattedResults.C1.description)
console.log(formattedResults.C2.description)
console.log(formattedResults.C3.description)
console.log(formattedResults.C4.description)

console.log(formattedResults.O1.description)
console.log(formattedResults.O2.description)
console.log(formattedResults.O3.description)
console.log(formattedResults.O4.description)

// return formattedResults;

