const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

const app = express();
app.use(cors());
app.use(parser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then(client => {
    const db = client.db("abandoned_factory");
    const saveGamesCollection = db.collection("save_games");
    const saveGamesRouter = createRouter(saveGamesCollection);
    app.use("/api/save-games", saveGamesRouter);
  })
  .catch(console.error);

app.listen(3001, function() {
  console.log(`Listening on port ${ this.address().port }`);
});
