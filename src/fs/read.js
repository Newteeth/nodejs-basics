import  fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file_for_read = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    fs.readFile(file_for_read, 'utf8', (error, file) => {
        if (error) throw new Error ('FS operation failed');
        console.log(file);
    });
};

await read();