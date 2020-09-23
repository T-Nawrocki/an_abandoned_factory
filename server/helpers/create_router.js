const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const errorHandler = require('./error_handler');

const createRouter = collection => {
  const router = express.Router();
  
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(err => errorHandler(res, err));
  });

  router.post("/", (req, res) => {
    const data = req.body;
    collection
      .insertOne(data)
      .then(result => res.json(result.ops[0]))
      .catch(err => errorHandler(res, err))
  });

  return router;
};

module.exports = createRouter;
