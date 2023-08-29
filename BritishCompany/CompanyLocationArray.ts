import Employee from '../BritishCompany/Employee';
import ILocation from '../BritishCompany/ILocation';

export default class CompanyLocationArray implements ILocation {
  employees: Employee[];
  addPerson(e: Employee): void {
    throw new Error('Method not implemented.');
  }
  getPerson(i: number): Employee {
    throw new Error('Method not implemented.');
  }
  getCount(): number {
    throw new Error('Method not implemented.');
  }
}
