import Backend from './EuropeCompany/Backend';
import Company from './EuropeCompany/Company';
import Frontend from './EuropeCompany/Frontend';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let company = new Company();

let b1 = new Backend('Bogtrotter Industries', 'Briony Bartlett');
let b2 = new Backend('Bogtrotter Industries', 'Usman Rush');
let b3 = new Backend('Bond and Co', 'Jerome Villanueva');
let b4 = new Backend('Connor, Humble And Thornton, Associates', 'Samir Barry');
let b5 = new Backend('Devito Unlimited', 'Sienna Wheeler');

let f1 = new Frontend(
  'Connor, Humble And Thornton, Associates',
  'Marianne Short'
);
let f2 = new Frontend('Bond and Co', 'Leland Levine');
let f3 = new Frontend('Bogtrotter Industries', 'Krystal Duffy');
let f4 = new Frontend('Bond and Co', 'Maria Cook');
let f5 = new Frontend('Devito Unlimited', 'Yash Allen');

company.add(b1);
company.add(b2);
company.add(b3);
company.add(b4);
company.add(b5);
company.add(f1);
company.add(f2);
company.add(f3);
company.add(f4);
company.add(f5);
company.getProjectList().forEach((p) => console.log(p));
company.getNameList().forEach((n) => console.log(n));
