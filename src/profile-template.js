const profileTemplate = (employees) => {
  let teamMember = "";
  for (let i = 0; i < employees.length; i++) {
    switch (employees[i].getRole()) {
      case "Manager":
        teamMember += ` <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <div class="content">
                <p class="title">${employees[i].getRole()}</p>
                <p class="subtitle">${employees[i].name}</p>
                <div class="content"></div>
                <ul>
                  <li>Email: ${employees[i].email}</li>
                  <li>ID: ${employees[i].id}</li>
                  <li>Office #: ${employees[i].officeNumber}</li>    
                </ul>
                </div>
              </article>
            </div>`;
        break;
      case "Engineer":
        teamMember += `<div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <div class="content">
          <p class="title">${employees[i].getRole()}</p>
          <p class="subtitle">${employees[i].name}</p>
          <div class="content"></div>
          <ul>
            <li>Email: ${employees[i].email}</li>
            <li>ID: ${employees[i].id}</li>
            <li>Office #: ${employees[i].github}</li>    
          </ul>
          </div>
        </article>
      </div>
    </div>
  </div>`;
        break;
      case "Intern":
        teamMember += `  <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">${employees[i].getRole()}</p>
            <p class="subtitle">${employees[i].name}</p>
            <div class="content"></div>
            <ul>
              <li>Email: ${employees[i].email}</li>
              <li>ID: ${employees[i].id}</li>
              <li>Office #: ${employees[i].school}</li>    
            </ul>
            </div>
          </div>
        </article>
      </div>
    </div>`;
        break;
      default:
        return;
    }
  }
  let body = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Team Profile Generator</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
      />
      <link rel="stylesheet" type="text/css" href="./style.css" />
    </head>
    <body>
      <article class="panel is-primary">
        <p class="panel-heading" id="header">My Team</p>
      </article>
    ${teamMember}
  </head>
  </body>
</html>`;
  return body;
};
module.exports = profileTemplate;
