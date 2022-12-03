import  fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const path_link = path.join(__dirname, 'files');
const path_link_del = path.join(path_link, 'fileToRemove.txt');

const remove = async () => {
    fs.unlink(path_link_del, (error) => {
        if (error) throw new Error ('FS operation failed');
    });
}

await remove();