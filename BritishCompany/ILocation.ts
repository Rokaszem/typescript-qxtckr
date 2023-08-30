import Employee from '../BritishCompany/Employee';

export default interface ILocation {
  employees: Employee[];

  addPerson(e: Employee): void;
  getPerson(i: number): Employee;
  getCount(): number;
}
