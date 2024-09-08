function displayCharacter() {
	const container = document.getElementById('container-generated-character');
	// Den Container leeren, bevor neue Bücher hinzugefügt werden
	container.innerHTML = '';
	// const character = character;
	const htmlContent =
		`<p>` +
		`<b>Geschlecht:</b> ${character.appearance.randomGender}<br>` +
		`<b>Volk:</b> ${character.appearance.randomRace}<br>` +
		`<b>Statur:</b> ${character.appearance.randomPhysique.name} (${character.appearance.randomPhysique.description}) <br>` +
		`<b>Hautfarbe:</b> ${character.appearance.randomSkinColor} (${character.appearance.skinColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.appearance.skinColorHex};"></span> <br>` +
		`<b>Augenfarbe:</b> ${character.appearance.randomEyeColor} (${character.appearance.eyeColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.appearance.eyeColorHex};"></span> <br>` +
		`<b>Haare:</b> ${character.appearance.randomHairColor} (${character.appearance.hairColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.appearance.hairColorHex};"></span>,  ${character.appearance.hairStructureDescription}, ${character.appearance.randomHairLength.description}<br>` +
		`<b>Stirn:</b> ${sentenceCase(character.appearance.randomFaceShape.forehead)}<br>` +
		(character.appearance.randomRace === 'Tiefling' 
			? `<b>Horn:</b> ${sentenceCase(character.appearance.randomTieflingHornShape)}<br>` 
			: '') +
		`<b>Wangenknochen:</b> ${sentenceCase(character.appearance.randomFaceShape.cheekBones)}<br>` +
		`<b>Kiefer:</b> ${sentenceCase(character.appearance.randomFaceShape.jaw)}<br>` +
		`<b>Kinn:</b> ${sentenceCase(character.appearance.randomFaceShape.chin)}<br>` +
		`<b>Nase:</b> ${character.appearance.randomNoseShape}<br>` +
		`<b>Augen:</b> ${character.appearance.randomEyeShape}<br>` +
		`<b>Ohren:</b> ${character.appearance.randomEarShape.ear_shape}, ${character.appearance.randomEarShape.helix}, ${character.appearance.randomEarShape.earlobe}, ${character.appearance.randomEarShape.tragus}<br>` +
		`<b>Mund:</b> ${character.appearance.randomMouthShape}<br>`;
	container.innerHTML += htmlContent;
}
