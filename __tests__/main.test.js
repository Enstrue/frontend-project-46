import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import getDiff from '../src/diff.js';
import parseFile from '../src/parse.js';

test('object has expected key-value pairs', () => {
  const expectedResult = {
    '- follow': false,
    host: 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': '50',
    '+ timeout': '20',
    '+ verbose': true,
  };

  // получаю пути к фаилам
  const filePath1 = '__fixtures__/file1.json';
  const filePath2 = '__fixtures__/file1.json';

  // читаю фаилы для дальнейшего парсинга
  const dataFromFirstFile = fs.readFileSync(filePath1, 'utf-8');
  const dataFromSecondFile = fs.readFileSync(filePath2, 'utf-8');

  // получаем распарсенные данные
  const parsedFirstFile = parseFile(dataFromFirstFile);
  const parsedSecondFile = parseFile(dataFromSecondFile);

  const actualDifference = getDiff(parsedFirstFile, parsedSecondFile);
  expect(actualDifference).toEqual(expectedResult);
});
