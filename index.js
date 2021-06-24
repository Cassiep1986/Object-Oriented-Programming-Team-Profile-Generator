const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const profileTemplate = require("./src/profile-template");

const employees = [];

const init = () => {
  inquirer
    .prompt({
      type: "list",
      name: "startup",
      message: "To start buliding your team profile, choice a role",
      choices: ["Manager", "Engineer", "Intern", "Exit"],
    })

    .then((data) => {
      switch (data.startup) {
        case "Manager":
          initManager();
          break;
        case "Engineer":
          initEngineer();
          break;
          case "Intern":
            initIntern;
            break;
            default:
              console.log("hello!!!!")
      }
    });
};

init();

const initManager = () => {
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
        case "Manager":
          initManager;
          break;
        default:
          initprofile();
      }
    });
};

const initprofile = () => {
  const htmlPageContent = profileTemplate(employees);
  fs.writeFile("./dist/Team-Profile.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created Profile!")
  );
};

function initEngineer() {
  console.log("You got this Engineer!");
}

function initIntern() {
  console.log("You got this Intern!");
}
