const express = require("express");
const app = express();
const port = 4000;

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

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do Application</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
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
    
    <ul class="list-group pb-5">
      <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
        <span class="item-text">NodeJs</span>
        <div>
          <button class="edit-me btn btn-success btn-sm mr-1">Ajouter</button></button>
          <button class="delete-me btn btn-danger btn-sm">Supprimer</button>
        </div>
      </li>
      <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
        <span class="item-text">JavaScript</span>
        <div>
          <button class="edit-me btn btn-success btn-sm mr-1">Ajouter</button>
          <button class="delete-me btn btn-danger btn-sm">Supprimer</button>
        </div>
      </li>
      <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
        <span class="item-text">VueJs</span>
        <div>
          <button class="edit-me btn btn-success btn-sm mr-1">Ajouter</button>
          <button class="delete-me btn btn-danger btn-sm">Supprimer</button>
        </div>
      </li>
    </ul>
    
  </div>
  
</body>
</html>`)
})


app.post("/", (req, res) => {
    Item.findAll().then(items => {
        console.log("All items: ", JSON.stringify(items, null, 4));
    });
    res.send("ça marche, c'est tres bien")
});

app.listen(port);