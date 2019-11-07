const express = require("express");
const app = express();

const port = 4000;


app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple To-Do App</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1 class="display-4 text-center py-1">To-Do List application</h1>
    
    <div class="jumbotron p-3 shadow-sm">
      <form>
        <div class="d-flex align-items-center">
          <input placeholder="Ajouter votre texte ici" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
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
    res.send("ça marche, c'est tres bien")
});

app.listen(port);