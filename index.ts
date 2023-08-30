/*import Backend from './EuropeCompany/Backend';
import Frontend from './EuropeCompany/Frontend';
import Backend from './AmericanCompany/Backend';
import Frontend from './AmericanCompany/Frontend';
import Company from './EuropeCompany/Company';*/
import Company from './BritishCompany/Company';
import CompanyLocationArray from './BritishCompany/CompanyLocationArray';
import CompanyLocationLocalStorage from './BritishCompany/CompanyLocationLocalStorage';
import Employee from './BritishCompany/Employee';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let c1 = new Company(new CompanyLocationArray());
let c2 = new Company(new CompanyLocationLocalStorage());


/*
let b1 = new Backend('Bogtrotter Industries', 'Briony Bartlett');
let b2 = new Backend('Bogtrotter Industries', 'Usman Rush');
let b3 = new Backend('Bond and Co', 'Jerome Villanueva');
let b4 = new Backend('Connor, Humble And Thornton, Associates', 'Samir Barry');
let b5 = new Backend('Devito Unlimited', 'Sienna Wheeler');
*/
let e1 = new Employee('Bogtrotter Industries', 'Briony Bartlett');
let e2 = new Employee('Bogtrotter Industries', 'Usman Rush');
let e3 = new Employee('Bond and Co', 'Jerome Villanueva');

c1.add(e1);
c1.add(e2);
c2.add(e3);

console.log(c1);
console.log(c2);
