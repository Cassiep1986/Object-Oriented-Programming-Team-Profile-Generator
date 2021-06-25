const profileTemplate = (employees) => {
  let teamMember = "";
  for (let i = 0; i < employees.length; i++) {
    switch (employees[i].getRole()) {
      case "Manager":
      console.log("HotDOg!!!");
      teamMember += `    <div class="tile is-ancestor">
          <div class="tile">
              <article class="tile is-child notification is-primary">
                <p class="title">${employees[i].getRole()}</p>
                <p class="subtitle">${employees[i].name}</p>
                <ul>
                  <li>Email: ${employees[i].email}</li>
                  <li>ID: ${employees[i].id}</li>
                  <li>Office #: ${employees[i].officeNumber}</li>    
                </ul>
              </article>
        </div>
      </div>`;
    }
    // console.log(teamMember);
    // console.log(employees[i].getRole());
  }
  let body = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" type="text/css" href="./style.css" />
    ${teamMember}
  </head>
  <body>
  </body>
</html>`;
  return body;
};
module.exports = profileTemplate;
