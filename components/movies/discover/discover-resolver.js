import axios from '../../../config';

async function discover(obj, args, contex, info) {
    const data = await axios.get(`/discover/${args.type}`, {
        params: {
            sort_by: args.sortBy,
            page: args.page
        }
    });
    return data.data;
}

export default discover;