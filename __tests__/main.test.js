import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/diff.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

// получаю пути к файлам
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

// читаю файл для получение эталонного результата
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

test('Compare JSON files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expectedResult.txt');

  expect(getDiff(filepath1, filepath2).trim()).toEqual(expected.trim());
});
