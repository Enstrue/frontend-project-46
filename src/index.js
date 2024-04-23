import fs from 'fs';
import path from 'path';
import getParseFile from './parse.js';
import selectFormatter from './formatters/index.js';
import findDifferences from './diffTree.js';
import makeAbsolutePath from './path.js';

const getDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const firstFilePath = makeAbsolutePath(filePath1);
  const secondFilePath = makeAbsolutePath(filePath2);

  if (!fs.existsSync(firstFilePath)) {
    throw new Error(`File not found: ${firstFilePath}`);
  }

  if (!fs.existsSync(secondFilePath)) {
    throw new Error(`File not found: ${secondFilePath}`);
  }

  const firstFileContent = fs.readFileSync(firstFilePath, 'utf-8');
  const secondFileContent = fs.readFileSync(secondFilePath, 'utf-8');

  const firstFileExtension = path.extname(firstFilePath).toLowerCase();
  const secondFileExtension = path.extname(secondFilePath).toLowerCase();

  const parsedFirstFile = getParseFile(firstFileContent, firstFileExtension);
  const parsedSecondFile = getParseFile(secondFileContent, secondFileExtension);

  const diff = findDifferences(parsedFirstFile, parsedSecondFile);
  return selectFormatter(formatName)(diff);
};

export default getDiff;
