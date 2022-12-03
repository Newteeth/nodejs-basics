import  fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {

    const path_link = path.join(__dirname, 'files');
    const path_link_all = path.resolve(__dirname);
    const copy_file = path.join(path_link_all, 'files_copy');


        fs.stat(path_link, (error) => {
            if (error) throw new Error ('FS operation failed');
            fs.mkdir(copy_file, (error) => {
                if (error) throw new Error ('FS operation failed');
                });
            fs.readdir(path_link, (error, files) => {
                if (error) throw new Error ('!!!');
                files.forEach(file => {
                    fs.copyFile(path.join(path_link, file), path.join(copy_file, file), (error) => {
                        if (error) throw new Error ('FS operation failed');
                    });
                });       
            });
        });
}
copy();
