const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const employees = [];

function init() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your manager's name?",
      },
      {
        name: "email",
        message: "What is your manager's email address?",
      },
      {
        name: "id",
        message: "What is your manager's id number?",
      },
      {
        name: "officenumber",
        message: "What is your manager's officeNumber?",
      },
    ])
    .then(function (manager) {
      employees.push(
        new Manager(
          manager.name,
          manager.email,
          manager.id,
          manager.officeNumber
        )
      );
      employeeType()
    });
}

init();

function employeeType() {
    inquirer.prompt({
        type:"list",
        name:"choice",
        message:"Would you like to add an additional employee?",
        choices: ["Engineer", "Intern", "Exit"]
    })
    .then(function(data) {
        switch (expr) {
            case"Engineer":
                initEngineer();
                break;
            case "Intern":
                initIntern();
                break;
                //Function to Create Html Page declared below
            default:
                inithtml();

        }
    })
}

