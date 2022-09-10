import fs from 'fs';
import path from 'path';


export default (imageName: string) => {
  const filePath = path.resolve(__dirname, '..', '..', 'tmp', imageName);

  fs.unlinkSync(filePath);
}