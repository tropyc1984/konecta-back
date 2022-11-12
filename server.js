const express = require('express');
const dotenv = require('dotenv'); 
const dotenvParseVariables = require('dotenv-parse-variables');
const {
  mongoose,
} = require('./db');

// Retrieve env variables
dotenv.config();
const parsedEnv = dotenvParseVariables(process.env);
(process).envParsed = { ...parsedEnv, ...(process).envParsed };

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const SERVER_PREFIX = '/konecta';

app.use(SERVER_PREFIX, require('./routes/users.routes'));
app.use(SERVER_PREFIX, require('./routes/products.routes'));


app.listen(port, () => { 
  console.log(`Server started on port ${port}`)}
)
