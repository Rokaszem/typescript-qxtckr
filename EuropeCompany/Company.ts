import { Employee } from './Employee';

class Company {
  employees: Array<Employee>;

  constructor() {
    this.employees = [];
  }

  add(e: Employee) {
    this.employees.push(e);
  }

  getProjectList(): Array<string> {
    let employeesProject!: Array<string>;
    this.employees.forEach((e) => employeesProject.push(e.getCurrentProject()));
    return employeesProject;
  }

  getNameList(): Array<string> {
    let employeesName!: Array<string>;
    this.employees.forEach((e) => employeesName.push(e.getName()));
    return employeesName;
  }
}

export { Company };
