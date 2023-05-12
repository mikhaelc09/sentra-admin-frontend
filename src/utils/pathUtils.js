import { fileURLToPath } from 'url';
import path from 'path'
const __filename = fileURLToPath(import.meta.url);

const dirname = path.join(path.dirname(__filename), '../');
const getAbsolutePath = (file) => {
    return path.join(dirname, file)
}

export {
    dirname,
    getAbsolutePath
}
