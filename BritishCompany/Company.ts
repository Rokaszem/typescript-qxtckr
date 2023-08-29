import Employee from '../BritishCompany/Employee';

export default class Company<T extends Location> {
  employees: Employee[] = [];

  add(e: Employee) {
    this.employees.push(e);
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
