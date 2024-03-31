import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';

const getParseFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const extension = path.extname(filePath);
  let parsedFile;

  switch (extension) {
    case '.json':
      parsedFile = JSON.parse(fileContent);
      break;
    case '.yaml':
    case '.yml':
      parsedFile = yaml.load(fileContent);
      break;
    default:
      throw new Error(`Unsupported file extension: ${extension}`);
  }
  return parsedFile;
};
export default getParseFile;
