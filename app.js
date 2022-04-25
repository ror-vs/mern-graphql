const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const mongoose = require("mongoose");
const schema = require("./graphql/schema");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/express-graphql")
  .then(() => console.log("database connected!"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(3000, () => console.log("server is litening "));
