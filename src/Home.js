function createHome() {
	// home page is just a hero image with some captions
	const heroDiv = document.createElement('div');
	heroDiv.setAttribute('id', 'hero');
	heroDiv.classList.add('flex', 'row');

	const leftContainerDiv = document.createElement('div');
	leftContainerDiv.classList.add('container');
	const leftH2 = document.createElement('h2');
	leftH2.textContent =
		"This isn't really a restaurant, its a fan page for one of Chilis' greatest inventions: the Triple Dipper. One of the greatest feats in recent history, the Triple Dipper allows diners to come in and eat as they please.";

	leftContainerDiv.appendChild(leftH2);

	const rightContainerDiv = document.createElement('div');
	rightContainerDiv.classList.add('container');
	const rightH2 = document.createElement('h2');
	rightH2.textContent = 'Try it today for $Free.99';
	rightContainerDiv.appendChild(rightH2);

	heroDiv.appendChild(leftContainerDiv);
	heroDiv.appendChild(rightContainerDiv);

	return heroDiv;
}

export default createHome();
