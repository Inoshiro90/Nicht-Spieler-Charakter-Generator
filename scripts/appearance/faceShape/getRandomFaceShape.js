function getRandomFaceShape() {
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
