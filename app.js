const express = require("express");
const app = express();
const port = 4000;

// Models
const Item = require("./models/Item");

// Database
const db = require("./config/database");

// Test connection database
db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.use(express.urlencoded({
  extended: false
}));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  Item.findAll().then(items => {
    res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do Application</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <link rel = "stylesheet" type = "text/css" href = "css/style.css"/>
  </head>
<body>
  <div class="container">
    <h1 class="display-4 text-center py-1">To-Do List Application</h1>
    
    <div class="jumbotron p-3 shadow-sm">
      <form action="/" method="POST">
        <div class="d-flex align-items-center">
          <input name="item" placeholder="Ajouter votre texte ici" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
          <button class="btn btn-warning">Ajouter vos objets</button>
        </div>
      </form>
    </div>
    
    <ul class = "list-group pb-5" >
        ${items.map(function (item) {
                    return `
                <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                  <span class="item-text">${item.dataValues.item}</span>
                  <div>
                    <button data-id="${item.dataValues.id}"class = "edit-me btn btn-success btn-sm mr-1"> Modifier </button>
                    <button data-id="${item.dataValues.id}"class = "delete-me btn btn-danger btn-sm"> Supprimer </button>
                  </div>
                </li>`;
                })
                .join("")}
         </ul>
        </div>

    <div class="contact-footer">
          <a href="mailto:dev.richard.g@gmail.com:" title="my Email">
                <img src="assets/mail4.png" alt="logo-mail"></a>

            <a href="https://www.linkedin.com/in/richard-gobert-3b9248193/" title="my linkedin" target="_blank">
                <img src="./assets/linkedin1.png" alt="logo-linkedin" width="70" height="70"></a>

            <a href="https://github.com/Gyumao" title="Github" target="_blank">
                <img alt="logo-Github" src="assets/github1.png" width="70" height="70" /></a>
    <div>
        <p class="p-footer">@ Ce site a été réalisé dans le cadre d'un exercice de formation Yes We Web.</p>
    </div>
    </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="/js/edit.js"></script>
        </body>
        </html>`);
  });
});


app.post("/", (req, res) => {
  Item.create({
      item: req.body.item
    })
    .then(() => {
      res.redirect("/")
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/update-item", (req, res) => {
  Item.update({
    item: req.body.itemUpdated
  }, {
    where: {
      id: req.body.id
    }
  });
});

app.post("/delete-item", (req, res) => {
  Item.destroy({
    where: {
      id: req.body.id
    }
  });
});

app.listen(port);