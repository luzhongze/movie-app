import axios from '../../../config';
import { tvResolver, } from '../tv';
import { movieResolver, } from '../movie';

async function detail(obj, args, contex, info) {
    if (args.type === "tv") {
        const data = await tvResolver(obj, args, contex, info);
        return data;
    }
    else {
        const data = await movieResolver(obj, args, contex, info);
        return data;
    }
}

export default detail;