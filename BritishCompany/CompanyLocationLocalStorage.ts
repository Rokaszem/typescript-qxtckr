import Employee from '../BritishCompany/Employee';
import ILocation from '../BritishCompany/ILocation';

export default class CompanyLocationLocalStorage implements ILocation {
  employees: Employee[] = [];

  addPerson(e: Employee): void {
    this.employees.push(e);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  getPerson(i: number): Employee {
    let tmpEmployees: Employee[] = JSON.parse(
      localStorage.getItem('employees')
    );
    return new Employee(
      tmpEmployees.at(i)['currentProject'],
      tmpEmployees.at(i)['name']
    );
  }

  getCount(): number {
    let tmpEmployees: Employee[] = JSON.parse(
      localStorage.getItem('employees')
    );
    return tmpEmployees.length;
  }
}
