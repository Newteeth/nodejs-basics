import  fs, { ReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file_for_write = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const write_strim = fs.createWriteStream(file_for_write, { encoding: 'utf8' });
    process.stdin.pipe(write_strim, { end: false });
};

await write();