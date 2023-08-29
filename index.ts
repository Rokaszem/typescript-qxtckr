import Company from './BritishCompany/Company';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let c1 = new Company<Location>('Bruen LLC');
