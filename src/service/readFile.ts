import fs from 'fs';
import path from 'path';

const tmpPath = path.resolve(__dirname, '..', '..', 'tmp');

export default (imageName: string) => fs.readFileSync(`${tmpPath}/${imageName}`).toString('base64')