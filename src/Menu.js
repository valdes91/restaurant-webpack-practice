class MenuItem {
	constructor(name, description) {
		this.container = document.createElement('div');
		this.title = document.createElement('h2');
		this.title.textContent = name;
		this.description = document.createElement('p');
		this.description.textContent = description;
		this.container.classList.add('flex', 'column', 'card');
		this.container.appendChild(this.title);
		this.container.appendChild(this.description);
	}
}

function createMenu() {
	const menuDiv = document.createElement('div');
	menuDiv.setAttribute('id', 'menu');
	menuDiv.classList.add('flex', 'column');

	const menuTitle = document.createElement('h2');
	menuTitle.textContent = 'Menu';
	menuDiv.appendChild(menuTitle);

	const cardContainer = document.createElement('div');
	cardContainer.classList.add('grid');

	const menuItems = [
		new MenuItem(
			'Triple Dipper',
			"What more do you want, it's the classic triple dipper. Highly customizable too, so if you don't like it it's really your fault"
		),
		new MenuItem(
			'El Presidente Margarita',
			"Don't be shy, wash that Triple Dipper Down with an ICE COLD PRESIDENTE"
		),
		new MenuItem(
			'Chips and Salsa',
			'The standard appetizer. This ones on the house, but Guac is extra.'
		),
	];

	menuItems.forEach((item) => {
		cardContainer.appendChild(item.container);
	});

	menuDiv.appendChild(cardContainer);

	return menuDiv;
}

export default createMenu();
