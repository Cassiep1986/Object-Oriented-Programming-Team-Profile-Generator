const profileTemplate = () =>
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>
  <body>
    <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">${manager.name}</p>
                <p class="subtitle">Manager</p>
              </article>
              </div>
            </div>
          </article>
        </div>
      </div>
 
  </body>
</html>`


module.exports = profileTemplate;
