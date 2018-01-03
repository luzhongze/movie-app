import axios from '../../../config';

async function list(obj, args, contex, info) {
    const data = await axios.get(`/list/${args.id}`);
    return data.data.items;
}

export default list;