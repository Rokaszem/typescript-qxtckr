export default class Frontend implements IEmployee {
  currentProject: string;
  name: string;

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
