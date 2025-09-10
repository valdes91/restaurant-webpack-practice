import './style.css';
import Home from './Home.js';
import Menu from './Menu.js';
import About from './About.js';

const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

function clearContent() {
	contentDiv.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
	clearContent();
	contentDiv.appendChild(Home);
});

menuBtn.addEventListener('click', () => {
	clearContent();
	contentDiv.appendChild(Menu);
});

aboutBtn.addEventListener('click', () => {
	clearContent();
	contentDiv.appendChild(About);
});

contentDiv.appendChild(Home);
