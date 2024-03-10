import fs from 'fs';
import path from 'path';
import { filePath1, filePath2 } from '../gendiff.js';

const parseFile = () => {
  const absolutePath1 = path.resolve(filePath1);
  const absolutePath2 = path.resolve(filePath2);

  const dataFromFirstFile = fs.readFileSync(absolutePath1, 'utf-8');
  const dataFromSecondFile = fs.readFileSync(absolutePath2, 'utf-8');

  const parsedFirstFile = JSON.parse(dataFromFirstFile);
  const parsedSecondFile = JSON.parse(dataFromSecondFile);

  return { parsedFirstFile, parsedSecondFile };
};
export default parseFile;
