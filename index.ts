import { Company } from './EuropeCompany/Company';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let company = new Company();
console.log(company);
