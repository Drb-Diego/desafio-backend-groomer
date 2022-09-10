import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmpPath = path.resolve(__dirname, '..', '..', 'tmp');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, tmpPath),

  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage: storage });

export default upload;
