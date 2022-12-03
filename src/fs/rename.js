import  fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const path_link = path.join(__dirname, 'files');
const path_link_old = path.join(path_link, 'wrongFilename.txt');
const path_link_new = path.join(path_link, 'properFilename.md');

const rename = async () => {
    fs.readdir(path_link, (error, files) => {
        if (error) throw new Error ('FS operation failed');
        files.forEach(file => {
            if (file === 'wrongFilename.txt') {
                fs.rename(path_link_old, path_link_new, (error) => {
                    if (error) throw new Error ('FS operation failed');
                });
            }
            if (file === 'properFilename.md') throw new Error ('FS operation failed');
        });   
    });
}

await rename();