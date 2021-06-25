const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, email, id, github) {
    super(name, email, id, github);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getgithub() {
    return this.github;
  }
}


module.exports = Engineer;