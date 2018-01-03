import { genreResolver, genreDef } from './genre';
import { itemDef, itemResolver } from './item';
import { movieDef, movieResolver } from './movie';
import { tvDef, tvResolver } from './tv';
import { videoDef, videoResolver } from './video';
import { discoverDef, discoverResolver } from './discover';
import { detailResolver } from './detail';

const typeDefs = [genreDef, itemDef, movieDef, tvDef, videoDef, discoverDef];
const resolvers = {
    RootQuery: {
        genres: genreResolver,
        list: itemResolver,
        detail: detailResolver,
        discover: discoverResolver
    },
    Item: videoResolver,
    Video: videoResolver
}

export {
    typeDefs,
    resolvers
}