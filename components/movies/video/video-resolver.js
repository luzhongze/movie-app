function __resolveType(obj, context, info) {
    if (obj.seasons) {
        return 'TV';
    }
    return 'Movie';
};

const videoResolver = {
    __resolveType: __resolveType
}

export default videoResolver;