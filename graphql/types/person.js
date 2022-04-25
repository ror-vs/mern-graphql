const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const PersonType = new GraphQLObjectType({
  name: "person",
  fields: {
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
  },
});
module.exports = PersonType;
