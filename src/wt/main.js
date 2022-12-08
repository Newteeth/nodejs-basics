import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const path_file = path.join(__dirname, 'worker.js');
const increment = 10;
const length = cpus().length;
const arr = [];
const arr_1 = [];

for (let i = 0; i < length; i++) {
    arr.push(i);
}

const performCalculations = async () => {    
    arr.forEach(elem => {
        arr_1[elem] = new Promise((resolve) => {
            const worker = new Worker(path_file, {
                workerData: increment + elem
            });
            worker.on('message', mgs => resolve({ status:'resolved', mgs }));
            worker.on('error', () => resolve({ status:'error', mgs: null }));
        });
    });
    Promise.all(arr_1).then(value => {
        console.log(value);
    });
}

await performCalculations();