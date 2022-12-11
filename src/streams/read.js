import  fs, { ReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file_for_read = path.join(__dirname, 'files', 'fileToRead.txt');


const read = async () => {
    const read_stream = fs.createReadStream(file_for_read, {encoding: 'utf8'});
    read_stream.on('data', (event) => {
        console.log(event);
    });    
}

await read();