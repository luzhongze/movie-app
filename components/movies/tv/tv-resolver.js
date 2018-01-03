import axios from '../../../config';

async function tv(obj, args, contex, info) {
    const data = await axios.get(`/tv/${args.id}`);
    return data.data;
}

export default tv;