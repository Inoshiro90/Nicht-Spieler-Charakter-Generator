// Bestimmt die Oberkategorie, Kategorie und Namen des Typs
const typesData = {
	1: {
		A: {
			Kategorie: 'Kategorie 1',
			Volksname: ['Felubion', 'Osbelu', 'Nobule', 'Tunelbo', 'Dalbune'],
		},
		B: {
			Kategorie: 'Kategorie 1',
			Volksname: [
				'Miruban',
				'Parbune',
				'Gembrua',
				'Eaburn',
				'Pobera',
				'Nibura',
				'Giburan',
				'Ibrune',
				'Bebruna',
				'Ornebu',
				'Inubre',
			],
		},
		C: {
			Kategorie: 'Kategorie 1',
			Volksname: [
				'Buneale',
				'Wabelu',
				'Labune',
				'Dilabu',
				'Amlube',
				'Tubelna',
				'Eubeana',
				'Palbune',
			],
		},
		D: {
			Kategorie: 'Kategorie 1',
			Volksname: ['Weluban', 'Walbune', 'Golbune', 'Malubu', 'Tolbune', 'Osalbu', 'Ailbune'],
		},
	},
	2: {
		A: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Simporo', 'Wosmipo', 'Osmipon', 'Espomio'],
		},
		B: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Sinomta', 'Snimono', 'Misnomo', 'Snimosi'],
		},
		C: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Nemosip'],
		},
		D: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Panomis', 'Monimpa'],
		},
		E: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Ansumo', 'Brusinmo', 'Sifumon'],
		},
	},
	3: {
		A: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Nikotäg', 'Nänkägo', 'Mingoka'],
		},
		B: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Wosnigu', 'Nignowo', 'Panigwo'],
		},
		C: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Pangoon', 'Augonin'],
		},
		D: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Knogani'],
		},
		E: {
			Kategorie: 'Kategorie 2',
			Volksname: ['Banynop', 'Neygofa'],
		},
	},
};

// Volksnamen der Typen
const types = [
	'Felubion',
	'Osbelu',
	'Nobule',
	'Tunelbo',
	'Dalbune',
	'Miruban',
	'Parbune',
	'Gembrua',
	'Eaburn',
	'Pobera',
	'Nibura',
	'Giburan',
	'Ibrune',
	'Bebruna',
	'Ornebu',
	'Inubre',
	'Buneale',
	'Wabelu',
	'Labune',
	'Dilabu',
	'Amlube',
	'Tubelna',
	'Eubeana',
	'Palbune',
	'Weluban',
	'Walbune',
	'Golbune',
	'Malubu',
	'Tolbune',
	'Osalbu',
	'Ailbune',
	'Simporo',
	'Wosmipo',
	'Osmipon',
	'Espomio',
	'Sinomta',
	'Snimono',
	'Misnomo',
	'Snimosi',
	'Nemosip',
	'Panomis',
	'Monimpa',
	'Ansumo',
	'Brusinmo',
	'Sifumon',
	'Nikotäg',
	'Nänkägo',
	'Mingoka',
	'Wosnigu',
	'Nignowo',
	'Panigwo',
	'Pangoon',
	'Augonin',
	'Knogani',
	'Banynop',
	'Neygofa',
];

// Hautfarben
const skinColors = {
	Felubion: ['Blass', 'Weiß'],
	Osbelu: ['Blass', 'Weiß'],
	Nobule: ['Blass', 'Weiß'],
	Tunelbo: ['Blass'],
	Dalbune: ['Blass', 'Weiß'],
	Miruban: ['Hellbraun', 'Braun'],
	Parbune: ['Hellbraun'],
	Gembrua: ['Hellbraun'],
	Eaburn: ['Hellbraun', 'Braun'],
	Pobera: ['Hellbraun', 'Braun'],
	Nibura: ['Hellbraun', 'Braun', 'Dunkelbraun'],
	Giburan: ['Hellbraun', 'Braun'],
	Ibrune: ['Hellbraun', 'Braun'],
	Bebruna: ['Hellbraun'],
	Ornebu: ['Hellbraun'],
	Inubre: ['Dunkelbraun'],
	Buneale: ['Blass', 'Weiß', 'Hellbraun'],
	Wabelu: ['Blass', 'Weiß', 'Hellbraun'],
	Labune: ['Hellbraun'],
	Dilabu: ['Hellbraun'],
	Amlube: ['Hellbraun'],
	Tubelna: ['Hellbraun'],
	Eubeana: ['Hellbraun'],
	Palbune: ['Hellbraun'],
	Weluban: ['Braun', 'Dunkelbraun'],
	Walbune: ['Dunkelbraun'],
	Golbune: ['Dunkelbraun'],
	Malubu: ['Dunkelbraun', 'Schwarz'],
	Tolbune: ['Braun', 'Dunkelbraun'],
	Osalbu: ['Braun', 'Dunkelbraun'],
	Ailbune: ['Weiß', 'Hellbraun'],
	Simporo: ['Hellbraun'],
	Wosmipo: ['Weiß', 'Hellbraun'],
	Osmipon: ['Weiß', 'Hellbraun', 'Braun'],
	Espomio: ['Hellbraun'],
	Sinomta: ['Weiß', 'Hellbraun'],
	Snimono: ['Weiß', 'Hellbraun'],
	Misnomo: ['Weiß', 'Hellbraun', 'Braun'],
	Snimosi: ['Hellbraun', 'Braun'],
	Nemosip: ['Hellbraun', 'Braun'],
	Panomis: ['Hellbraun'],
	Monimpa: ['Hellbraun', 'Braun', 'Dunkelbraun'],
	Ansumo: ['Braun', 'Dunkelbraun'],
	Brusinmo: ['Braun'],
	Sifumon: ['Hellbraun'],
	Nikotäg: ['Dunkelbraun'],
	Nänkägo: ['Braun', 'Dunkelbraun'],
	Mingoka: ['Dunkelbraun'],
	Wosnigu: ['Dunkelbraun'],
	Nignowo: ['Schwarz'],
	Panigwo: ['Hellbraun', 'Braun', 'Dunkelbraun'],
	Pangoon: ['Dunkelbraun'],
	Augonin: ['Braun', 'Dunkelbraun', 'Schwarz'],
	Knogani: ['Hellbraun'],
	Banynop: ['Braun', 'Dunkelbraun'],
	Neygofa: ['Dunkelbraun', 'Schwarz'],
};

const skinColorsOther = [
	'Blau',
	'Braun',
	'Bronze',
	'Gelb',
	'Gold',
	'Grün',
	'Kupfer',
	'Messing',
	'Orange',
	'Pink',
	'Purpur',
	'Rot',
	'Schwarz',
	'Silber',
	'Weiß',
];

// Augenfarben
const eyeColors = {
	Felubion: ['Blau', 'Grün', 'Grau'],
	Osbelu: ['Blau', 'Grau'],
	Nobule: ['Blau', 'Grau'],
	Tunelbo: ['Blau'],
	Dalbune: ['Blau', 'Grau'],
	Miruban: ['Braun'],
	Parbune: ['Braun'],
	Gembrua: ['Braun'],
	Eaburn: ['Braun'],
	Pobera: ['Braun'],
	Nibura: ['Braun'],
	Giburan: ['Braun'],
	Ibrune: ['Braun'],
	Bebruna: ['Braun'],
	Ornebu: ['Braun'],
	Inubre: ['Braun'],
	Buneale: ['Braun'],
	Wabelu: ['Braun'],
	Labune: ['Braun'],
	Dilabu: ['Braun'],
	Amlube: ['Braun'],
	Tubelna: ['Grün', 'Braun'],
	Eubeana: ['Braun'],
	Palbune: ['Haselnuss', 'Braun'],
	Weluban: ['Braun'],
	Walbune: ['Braun'],
	Golbune: ['Braun'],
	Malubu: ['Braun'],
	Tolbune: ['Braun'],
	Osalbu: ['Braun'],
	Ailbune: ['Braun'],
	Simporo: ['Braun'],
	Wosmipo: ['Braun'],
	Osmipon: ['Braun'],
	Espomio: ['Braun'],
	Sinomta: ['Haselnuss', 'Braun'],
	Snimono: ['Braun'],
	Misnomo: ['Braun'],
	Snimosi: ['Braun'],
	Nemosip: ['Braun'],
	Panomis: ['Braun'],
	Monimpa: ['Braun'],
	Ansumo: ['Braun'],
	Brusinmo: ['Braun'],
	Sifumon: ['Braun'],
	Nikotäg: ['Braun'],
	Nänkägo: ['Braun'],
	Mingoka: ['Braun'],
	Wosnigu: ['Braun'],
	Nignowo: ['Braun'],
	Panigwo: ['Braun'],
	Pangoon: ['Braun'],
	Augonin: ['Braun'],
	Knogani: ['Braun'],
	Banynop: ['Braun'],
	Neygofa: ['Braun'],
};

const eyeColorsOther = [
	'Blau',
	'Braun',
	'Bronze',
	'Gelb',
	'Gold',
	'Grün',
	'Kupfer',
	'Messing',
	'Orange',
	'Pink',
	'Purpur',
	'Rot',
	'Schwarz',
	'Silber',
	'Weiß',
];

// Haarfarben
const hairColors = {
	Felubion: ['Blond', 'Rotblond'],
	Osbelu: ['Goldblond', 'Fuchsrot', 'Hellbraun'],
	Nobule: ['Blond', 'Fuchsrot', 'Hellbraun', 'Braun'],
	Tunelbo: ['Fuchsrot', 'Aschblond', 'Rotbraun'],
	Dalbune: ['Staub', 'Hellbraun', 'Braun'],
	Miruban: ['Braun', 'Dunkelbraun', 'Schwarz'],
	Parbune: ['Braun', 'Dunkelbraun', 'Schwarz'],
	Gembrua: ['Schwarz'],
	Eaburn: ['Braun', 'Schwarz'],
	Pobera: ['Schwarz'],
	Nibura: ['Schwarz'],
	Giburan: ['Schwarz'],
	Ibrune: ['Braun', 'Schwarz'],
	Bebruna: ['Goldbraun', 'Hellbraun', 'Braun'],
	Ornebu: ['Braun', 'Schwarz'],
	Inubre: ['Braun', 'Schwarz'],
	Buneale: ['Hellbraun', 'Braun'],
	Wabelu: ['Aschblond', 'Staub', 'Goldbraun', 'Hellbraun', 'Braun'],
	Labune: ['Braun', 'Dunkelbraun', 'Fuchsrot', 'Schwarz'],
	Dilabu: ['Dunkelbraun'],
	Amlube: ['Staub', 'Braun', 'Dunkelbraun'],
	Tubelna: ['Staub', 'Braun', 'Dunkelbraun'],
	Eubeana: ['Dunkelbraun', 'Schwarz'],
	Palbune: ['Braun', 'Dunkelbraun', 'Schwarz'],
	Weluban: ['Dunkelbraun', 'Schwarz'],
	Walbune: ['Schwarz'],
	Golbune: ['Dunkelbraun', 'Schwarz'],
	Malubu: ['Schwarz'],
	Tolbune: ['Schwarz'],
	Osalbu: ['Braun', 'Schwarz'],
	Ailbune: ['Schwarz'],
	Simporo: ['Hellbraun', 'Braun', 'Schwarz'],
	Wosmipo: ['Braun', 'Schwarz'],
	Osmipon: ['Hellbraun', 'Braun', 'Schwarz'],
	Espomio: ['Dunkelbraun', 'Schwarz'],
	Sinomta: ['Schwarz'],
	Snimono: ['Schwarz'],
	Misnomo: ['Schwarz'],
	Snimosi: ['Schwarz'],
	Nemosip: ['Braun', 'Dunkelbraun', 'Schwarz'],
	Panomis: ['Braun', 'Dunkelbraun'],
	Monimpa: ['Schwarz'],
	Ansumo: ['Dunkelbraun', 'Schwarz'],
	Brusinmo: ['Schwarz'],
	Sifumon: ['Dunkelbraun', 'Schwarz'],
	Nikotäg: ['Schwarz'],
	Nänkägo: ['Schwarz'],
	Mingoka: ['Schwarz'],
	Wosnigu: ['Schwarz'],
	Nignowo: ['Schwarz'],
	Panigwo: ['Schwarz'],
	Pangoon: ['Dunkelbraun', 'Schwarz'],
	Augonin: ['Schwarz'],
	Knogani: ['Schwarz'],
	Banynop: ['Dunkelbraun'],
	Neygofa: ['Schwarz'],
};

const hairColorsOther = [
	'Blau',
	'Braun',
	'Bronze',
	'Gelb',
	'Gold',
	'Grün',
	'Kupfer',
	'Messing',
	'Orange',
	'Pink',
	'Purpur',
	'Rot',
	'Schwarz',
	'Silber',
	'Weiß',
];

// Haarstrukturen
const hairStructures = {
	Felubion: ['Glatt', 'Wellig'],
	Osbelu: ['Glatt', 'Wellig'],
	Nobule: ['Glatt', 'Wellig', 'Lockig'],
	Tunelbo: ['Glatt'],
	Dalbune: ['Glatt'],
	Miruban: ['Glatt', 'Wellig', 'Lockig'],
	Parbune: ['Glatt', 'Wellig', 'Lockig'],
	Gembrua: ['Glatt', 'Wellig', 'Lockig'],
	Eaburn: ['Wellig', 'Lockig'],
	Pobera: ['Wellig', 'Lockig'],
	Nibura: ['Glatt', 'Wellig'],
	Giburan: ['Glatt', 'Wellig'],
	Ibrune: ['Glatt', 'Wellig'],
	Bebruna: ['Glatt', 'Wellig'],
	Ornebu: ['Wellig', 'Lockig'],
	Inubre: ['Glatt', 'Wellig', 'Lockig'],
	Buneale: ['Glatt', 'Wellig'],
	Wabelu: ['Glatt', 'Wellig'],
	Labune: ['Glatt'],
	Dilabu: ['Glatt', 'Wellig'],
	Amlube: ['Wellig'],
	Tubelna: ['Glatt', 'Wellig'],
	Eubeana: ['Glatt', 'Wellig'],
	Palbune: ['Glatt'],
	Weluban: ['Wellig', 'Lockig'],
	Walbune: ['Wellig'],
	Golbune: ['Wellig', 'Lockig'],
	Malubu: ['Wellig', 'Lockig'],
	Tolbune: ['Wellig'],
	Osalbu: ['Wellig', 'Lockig'],
	Ailbune: ['Wellig', 'Lockig'],
	Simporo: ['Glatt', 'Wellig'],
	Wosmipo: ['Glatt'],
	Osmipon: ['Glatt', 'Wellig'],
	Espomio: ['Glatt'],
	Sinomta: ['Glatt'],
	Snimono: ['Glatt'],
	Misnomo: ['Glatt'],
	Snimosi: ['Glatt'],
	Nemosip: ['Wellig', 'Lockig'],
	Panomis: ['Glatt', 'Wellig'],
	Monimpa: ['Glatt'],
	Ansumo: ['Glatt', 'Wellig'],
	Brusinmo: ['Glatt', 'Wellig'],
	Sifumon: ['Glatt', 'Wellig'],
	Nikotäg: ['Lockig'],
	Nänkägo: ['Lockig'],
	Mingoka: ['Wellig'],
	Wosnigu: ['Kraus'],
	Nignowo: ['Kraus'],
	Panigwo: ['Kraus'],
	Pangoon: ['Lockig', 'Kraus'],
	Augonin: ['Glatt', 'Wellig', 'Kraus'],
	Knogani: ['Kraus'],
	Banynop: ['Kraus'],
	Neygofa: ['Kraus'],
};
