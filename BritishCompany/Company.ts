import Employee from '../BritishCompany/Employee';
import ILocation from '../BritishCompany/ILocation';

export default class Company {
  employees: Employee[] = [];
  location: ILocation;

  constructor(location: ILocation) {
    this.location = location;
  }

  add(e: Employee) {
    this.employees.push(e);
    this.location.addPerson(e);
  }

  getProjectList(): Array<string> {
    var employeesProject: string[] = [];
    this.employees.forEach((e) => employeesProject.push(e.getCurrentProject()));
    return employeesProject;
  }

  getNameList(): Array<string> {
    var employeesName: string[] = [];
    this.employees.forEach((e) => employeesName.push(e.getName()));
    return employeesName;
  }
}
