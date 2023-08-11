import './style.css';
import createWebsite from './website.js'

const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'content')

document.body.appendChild(mainContent);

createWebsite();