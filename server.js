const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const routes = require('./src/routes');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(routes);
app.use(errorHandler());

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return process.exit(1);
  }

  console.log(`Web API Server running on http://localhost:${port}`);
});
