const { GraphQLSchema } = require("graphql");
const query = require("./queries/person");
const mutation = require("./mutations/person");
const schema = new GraphQLSchema({ query, mutation });

module.exports = schema;
