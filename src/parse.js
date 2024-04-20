import yaml from 'js-yaml';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

// получаю пути к файлам
const getFixturePath = (filename) => {
  if (path.isAbsolute(filename)) {
    return filename;
  }
  return path.join(__dirname, '..', '__fixtures__', filename);
};

const getParseFile = (filename) => {
  const getFullPath = getFixturePath(filename);
  const fileContent = fs.readFileSync(getFullPath, 'utf-8');
  const extension = path.extname(getFullPath);

  // Проверяем существование файла
  if (!fs.existsSync(getFullPath)) {
    throw new Error(`File not found: ${getFullPath}`);
  }

  let parsedFile;

  switch (extension) {
    case '.json':
      parsedFile = JSON.parse(fileContent);
      break;
    case '.yaml':
    case '.yml':
      parsedFile = yaml.load(fileContent);
      break;
    case '.txt':
      parsedFile = fileContent;
      break;
    default:
      throw new Error(`Unsupported file extension: ${extension}`);
  }
  return parsedFile;
};
export default getParseFile;
