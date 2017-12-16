import axios from '../../../config';

async function genres(obj, args, contex, info) {
    const data = await axios.get(`/genre/${args.type}/list`);
    return data.data.genres;
}

export default genres;