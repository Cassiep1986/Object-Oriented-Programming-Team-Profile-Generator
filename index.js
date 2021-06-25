const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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
          return;
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
        name: "officeNumber",
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
};

const employeeChoice = () => {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "Would you like to add an additional employee?",
      choices: ["Engineer", "Intern", "Manager", "Exit"],
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
          initManager();
          break;
        default:
          initprofile();
      }
    });
};

const initprofile = () => {
  const htmlPageContent = profileTemplate(employees);
  fs.writeFile("./dist/Sample-Team-Profile.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created Profile!")
  );
};

const initEngineer = () => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        name: "id",
        message: "What is the Engineer's id number?",
      },
      {
        name: "github",
        message: "What is the Engineer's Github Username?",
      },
    ])
    .then(function (engineer) {
      employees.push(
        new Engineer(
          engineer.name,
          engineer.email,
          engineer.id,
          engineer.github
        )
      );
      employeeChoice();
    });
};

function initIntern() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        name: "id",
        message: "What is the Intern's id number?",
      },
      {
        name: "school",
        message: "Where did the Intern attend school?",
      },
    ])
    .then(function (intern) {
      employees.push(
        new Intern(
          intern.name,
          intern.email,
          intern.id,
          intern.school
        )
      );
      employeeChoice();
    });
}
