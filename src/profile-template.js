// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const profileTemplate = (employees) => {
  let teamMember = "";
  for (let i = 0; i < employees.length; i++) {
    switch (employees[i].getRole()) {
      case "Manager":
    teamMember += `<div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Engineer</p>
              <p class="subtitle">${employees[i].name}</p>
            </article>
            </div>
          </div>
      </div>
    </div>`;
    break;
    default:
     `<h1> Half Way there</h1>`;
    }
  }
  let body = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>
  <body>
  </body>
</html>`;
  return body;
};
module.exports = profileTemplate;
