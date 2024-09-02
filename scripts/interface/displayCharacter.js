function displayCharacter() {
	const container = document.getElementById('container-generated-character');
	// Den Container leeren, bevor neue Bücher hinzugefügt werden
	container.innerHTML = '';
	// const character = character;
	const htmlContent =
		`<p>` +
		`<b>Geschlecht:</b> ${character.randomGender} <br>`+
		`<b>Hautfarbe:</b> ${character.randomSkinColor} (${character.skinColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.skinColorHex};"></span> <br>` +
		`<b>Augenfarbe:</b> ${character.randomEyeColor} (${character.eyeColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.eyeColorHex};"></span> <br>` +
		`<b>Haare:</b> ${character.randomHairColor} (${character.hairColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.hairColorHex};"></span>,  ${character.hairStructureDescription}, ${character.randomHairLength.description}<br>` +
		`<b>Stirn:</b> ${sentenceCase(character.randomFaceShape.forehead)}<br>` +
		`<b>Wangenknochen:</b> ${sentenceCase(character.randomFaceShape.cheekBones)}<br>` +
		`<b>Kiefer:</b> ${sentenceCase(character.randomFaceShape.jaw)}<br>` +
		`<b>Kinn:</b> ${sentenceCase(character.randomFaceShape.chin)}<br>` +
		`<b>Nase:</b> ${character.randomNoseShape}<br>` +
		`<b>Augen:</b> ${character.randomEyeShape}<br>` +
		`<b>Ohren:</b> ${character.randomEarShape.ear_shape}, ${character.randomEarShape.helix}, ${character.randomEarShape.earlobe}, ${character.randomEarShape.tragus}<br>` +
		`<b>Mund:</b> ${character.randomMouthShape}<br>`;
	container.innerHTML += htmlContent;
}
