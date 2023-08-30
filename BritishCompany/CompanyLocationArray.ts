import Employee from '../BritishCompany/Employee';
import ILocation from '../BritishCompany/ILocation';

export default class CompanyLocationArray implements ILocation {
  employees: Employee[] = [];
  addPerson(e: Employee): void {
    this.employees.push(e);
  }
  getPerson(i: number): Employee {
    return this.employees.at(i);
  }
  getCount(): number {
    return this.employees.length;
  }
}
