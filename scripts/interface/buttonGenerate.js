document.getElementById('btn-generate').addEventListener('click', async function () {
	// let character;
	// getSelectedSetting();
	// getSelectedGenre();
	// getSelectedDescription();
	// generateEmptyArrayForGeneratedBook();
	// let generatedBook = await generateBooks(selectedSetting, selectedGenre);
	// displayGeneratedBooks(generatedBook, selectedDescription);
	character = generateRandomCharacter();
	// console.log(character);
	generateRandomHairlengthMan();
	generateRandomHairlengthWoman();
	displayCharacter();
});

// document.getElementById('input-field-book-count').addEventListener('keydown', async function (event) {
// 	if (event.key === 'Enter') {
// 		getSelectedSetting();
// 		getSelectedGenre();
// 		getSelectedDescription();
// 		generateEmptyArrayForGeneratedBook();
// 		let generatedBook = await generateBooks(selectedSetting, selectedGenre);
// 		displayGeneratedBooks(generatedBook, selectedDescription);
// 	}
// });
