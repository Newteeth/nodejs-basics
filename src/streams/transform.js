
import path from 'path';
import { Transform } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
    const word_reverse = new Transform({
        transform(chunk, encoding, callback){
            const word = chunk.toString().split('').reverse().join('');
            callback(null, word);
        }
    });
    process.stdin.pipe(word_reverse, { end: false }).pipe(process.stdout, { end: true });
}

await transform();

