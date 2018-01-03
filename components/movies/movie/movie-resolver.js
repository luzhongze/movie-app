import axios from '../../../config';

async function movie(obj, args, contex, info) {
    const data = await axios.get(`/movie/${args.id}`);
    return data.data;
}

export default movie;