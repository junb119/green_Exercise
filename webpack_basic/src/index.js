import './css/style.css';
import hello from './hello.js';
import world from './world.js';

document.querySelector('#root').innerHTML = `${hello} ${world}!`;