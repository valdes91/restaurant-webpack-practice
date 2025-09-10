function createAbout() {
	const aboutDiv = document.createElement('div');
	aboutDiv.setAttribute('id', 'about');
	aboutDiv.classList.add('flex', 'column');

	const aboutParagraph = document.createElement('p');
	aboutParagraph.textContent =
		'We are a non profit, all volunteer organization with the sole purpose of making the existence of the Triple Dipper (now available at Chilis) known. Paired with any margarita on the menu, you will be sure for feel God in your local Chilis with this insane combination of flavors and experiences';

	aboutDiv.appendChild(aboutParagraph);

	const contactCard = document.createElement('div');
	contactCard.classList.add('flex', 'column', 'card');

	const contactTitle = document.createElement('h2');
	contactTitle.textContent = 'Contact Us';
	contactCard.appendChild(contactTitle);

	const phoneSpan = document.createElement('span');
	phoneSpan.textContent = '999-999-9999';

	contactCard.appendChild(phoneSpan);

	aboutDiv.appendChild(contactCard);

	return aboutDiv;
}

export default createAbout();
