import fs from 'fs';
import path from 'path';

export default (imageName: string) => {
  const imagePath = path.resolve(__dirname, '..', '..', 'tmp', imageName);
  return fs.readFileSync(imagePath).toString('base64');
}