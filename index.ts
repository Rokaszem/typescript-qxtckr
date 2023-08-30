import './style.css';

//region This is for American and European Companies

/*import Backend from './EuropeCompany/Backend';
import Company from './EuropeCompany/Company';
import Frontend from './EuropeCompany/Frontend';
import Company from './EuropeCompany/Company';
import Backend from './AmericanCompany/Backend';
import Company from './AmericanCompany/Company';
import Frontend from './AmericanCompany/Frontend';

let c1 = new Company();

let b1 = new Backend('Bogtrotter Industries', 'Briony Bartlett');
let b2 = new Backend('Bogtrotter Industries', 'Usman Rush');
let b3 = new Backend('Bond and Co', 'Jerome Villanueva');
let f4 = new Frontend('Connor, Humble And Thornton, Associates', 'Samir Barry');
let f5 = new Frontend('Devito Unlimited', 'Sienna Wheeler');

c1.add(b1);
c1.add(b2);
c1.add(b3);
c1.add(f4);
c1.add(f5);

c1.getNameList().forEach((n) => console.log(n));
c1.getProjectList().forEach((p) => console.log(p));
*/
//endregion

//region This is for the British Company

import Company from './BritishCompany/Company';
import CompanyLocationArray from './BritishCompany/CompanyLocationArray';
import CompanyLocationLocalStorage from './BritishCompany/CompanyLocationLocalStorage';
import Employee from './BritishCompany/Employee';

let cla = new CompanyLocationArray();
let clls = new CompanyLocationLocalStorage();

let c1 = new Company(cla);
let c2 = new Company(clls);

let e1 = new Employee('Bogtrotter Industries', 'Briony Bartlett');
let e2 = new Employee('Bogtrotter Industries', 'Usman Rush');
let e3 = new Employee('Bond and Co', 'Jerome Villanueva');

c1.add(e1);
c1.add(e2);
c2.add(e3);

console.log(clls.getPerson(0));

console.log(c1);
console.log(c2);

//endregion

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
