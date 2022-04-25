const PersonModel = require("../../models/person");
const { GraphQLObjectType, GraphQLList } = require("graphql");
const PersonType = require("../types/person");
const PersonQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    person: {
      type: GraphQLList(PersonType),
      resolve: (root, args, context, info) => {
        return PersonModel.find().exec();
      },
    },
  },
});
module.exports = PersonQuery;
