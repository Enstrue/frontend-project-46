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

  if (extension === '.json') {
    return JSON.parse(fileContent);
  }
  if (extension === '.yaml' || extension === '.yml') {
    return yaml.load(fileContent);
  }
  if (extension === '.txt') {
    return fileContent;
  }
  throw new Error(`Unsupported file extension: ${extension}`);
};
export default getParseFile;
