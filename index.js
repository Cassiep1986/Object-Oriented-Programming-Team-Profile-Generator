const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const profileTemplate = require("./src/profile-template");

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
      employeeChoice();
    });
}

init();

const employeeChoice = () => {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "Would you like to add an additional employee?",
      choices: ["Engineer", "Intern", "Exit"],
    })

    .then((data) => {
      switch (data.choice) {
        case "Engineer":
          initEngineer();
          break;
        case "Intern":
          initIntern();
          break;
        default:
          const profileTemplate = () => {
            fs.writeFile("./dist/TeamProfile.html", htmlPageContent(employees), (err) =>
              err
                ? console.log(err)
                : console.log("Successfully created TeamProfile")
            );
          };
      }
    });
};

function initEngineer() {
  console.log("You got this Engineer!");
}

function initIntern() {
  console.log("You got this Intern!");
}

module.exports = Manager;
