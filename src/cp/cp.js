import { exec, execFile, fork  } from "child_process";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const path_file_start = path.join(__dirname, 'files', 'script.js');
console.log(path_file_start);

const spawnChildProcess = async (...args) => {
    fork(path_file_start, [...args]);
};

spawnChildProcess(1, 2, [1, 2], 'START');