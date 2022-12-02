import  fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const text = 'I am fresh and young';
const create = async () => {
    const path_link = path.resolve(__dirname + '/files' + '/fresh.txt');
    fs.stat(path_link, (error) => {
        if (error) {
            fs.open(path_link, 'w', (error) => {
                if (error) throw new Error ('File not create');                
            });            
        } else {
            throw new Error ('FS operation failed');
        }
        fs.writeFile(path_link, text, (error) => {
            if(error) throw error;
        });
    });
};

await create();