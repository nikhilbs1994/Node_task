'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 8000;
const app = express();
const route = require('./routes');

class Server {

  constructor() {
    this.initDB();
    this.initExpressMiddleware();
    this.initRoutes();
    this.start();
  }

  start() {
    app.listen(port, () =>
    console.log('app listening on port ' + port));
  }

  initExpressMiddleware() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }

  initRoutes() {
    app.use('/', route);
    app.get('/status', (req, res) =>
    res.send('Hello World!'));
  }

  initDB() {
    mongoose.connect('mongodb://localhost/Users', { useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
}

new Server();
