function displayCharacter() {
	const container = document.getElementById('container-generated-character');
	// Den Container leeren, bevor neue Bücher hinzugefügt werden
	container.innerHTML = '';
	// const character = character;
	const htmlContent =
		`<p>` +
		`<b>Hautfarbe:</b> ${character.randomSkinColor} (${character.skinColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.skinColorHex};"></span> <br>` +
		`<b>Augenfarbe:</b> ${character.randomEyeColor} (${character.eyeColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.eyeColorHex};"></span> <br>` +
		`<b>Haare:</b> ${character.randomHairColor} (${character.hairColorHex}) <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${character.hairColorHex};"></span>,  ${character.hairStructureDescription}, ${character.randomHairLength.description}<br>` +
		`<b>Gesichtsform:</b> ${character.randomFaceShape}<br>`;
	container.innerHTML += htmlContent;
}
