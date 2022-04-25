const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");
const PersonModel = require("../../models/person");

const PersonType = require("../types/person");

const personMutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    person: {
      type: PersonType,
      args: {
        firstname: { type: GraphQLNonNull(GraphQLString) },
        lastname: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (root, args, context, info) => {
        let person = new PersonModel(args);
        return person.save();
      },
    },
  },
});

module.exports = personMutation;
