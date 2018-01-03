import { makeExecutableSchema } from 'graphql-tools';
import { resolvers, typeDefs } from './movies'

const schemaDef = `
    schema {
        query: RootQuery
    }
    type RootQuery {
        genres(type: MovieType = movie): [Genre],
        list(id: Int!): [Item],
        detail(type: MovieType = movie, id: Int!): Video,
        discover(type: MovieType = movie, sortBy: String = "popularity.desc", page: Int = 1): Discover
    }
`;

const schema = makeExecutableSchema({
    typeDefs: [schemaDef, ...typeDefs],
    resolvers: resolvers
});

export default schema;