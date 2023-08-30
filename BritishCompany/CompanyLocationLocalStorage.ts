import Employee from '../BritishCompany/Employee';
import ILocation from '../BritishCompany/ILocation';

export default class CompanyLocationLocalStorage implements ILocation {
  employees: Employee[] = [];
  addPerson(e: Employee): void {
    this.employees.push(e);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
  getPerson(i: number): Employee {
    return this.employees.at(i);
  }
  getCount(): number {
    return this.employees.length;
  }
}
