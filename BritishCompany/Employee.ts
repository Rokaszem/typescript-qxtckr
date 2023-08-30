export default class Employee {
  private currentProject: string;
  private name: string;

  constructor(currentProject: string, name: string) {
    this.currentProject = currentProject;
    this.name = name;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }

  getName(): string {
    return this.name;
  }
}
