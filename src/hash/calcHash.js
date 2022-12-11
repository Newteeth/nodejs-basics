import  fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import hash from 'crypto';

const { createHmac } = await import('crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const path_file_hash = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    fs.readFile(path_file_hash, 'utf8', (error, file) => {
        if (error) throw new Error ('Error');
        const hash = createHmac('sha256', file).digest('hex');
        console.log(hash);
    });
};

await calculateHash();