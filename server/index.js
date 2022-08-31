const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const app = express();

// connect DB
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(5000, console.log("App running"));
