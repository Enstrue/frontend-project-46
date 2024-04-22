import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import makeAbsolutePath from './path.js';

const getParseFile = (filename) => {
  const getFullPath = makeAbsolutePath(filename);
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
