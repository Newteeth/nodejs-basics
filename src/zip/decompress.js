import zlip from 'node:zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const path_file_for = path.join(__dirname, 'files', 'fileToCompress.txt');
const path_file_zip = path.join(__dirname, 'files', 'archive.gz');


const decompress = async () => {
    const gzip = zlip.createUnzip();
    const read_zip = fs.createReadStream(path_file_zip);
    const write_zip = fs.createWriteStream(path_file_for, { encoding: 'utf8'});
    pipeline(read_zip, gzip, write_zip, (error) => {
        if (error) throw new Error('File not compress');
    });
};

await decompress();