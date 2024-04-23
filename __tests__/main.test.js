import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';
import getParseFile from '../src/parse.js';
import selectFormatter from '../src/formatters/index.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

// получаю пути к файлам
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

// читаю файл для получение эталонного результата
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

test('Uncorrect file types', () => {
  const filepath1 = getFixturePath('expectedResult.tx');

  expect(() => getParseFile(filepath1)).toThrow();
});

test('Uncorrect formatter type', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(() => getDiff(filepath1, filepath2, 'uncorrectType').toThrow());
});

test('Files not found', () => {
  const filepath1 = getFixturePath('fil1.json');
  const filepath2 = getFixturePath('fil2.json');

  expect(() => getDiff(filepath1, filepath2).toThrow(`File not found: ${filepath1}`));
  expect(() => getDiff(filepath1, filepath2).toThrow(`File not found: ${filepath2}`));
});

test('Throw error when formatter is not supported', () => {
  const unsupportedFormatName = 'uncorrectType';
  expect(() => selectFormatter(unsupportedFormatName).toThrow(`Formatter "${unsupportedFormatName}" is not supported`));
});

test('Compare JSON files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expectedResult.txt');

  expect(getDiff(filepath1, filepath2).trim()).toEqual(expected.trim());
});

test('Compare YAML files', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const expected = readFile('expectedResult.txt');

  expect(getDiff(filepath1, filepath2).trim()).toEqual(expected.trim());
});

test('Stylish format testing', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expectedResult.txt');

  expect(getDiff(filepath1, filepath2, 'stylish').trim()).toEqual(expected.trim());
});

test('Plain format testing', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expectedResultPlain.txt');

  expect(getDiff(filepath1, filepath2, 'plain').trim()).toEqual(expected.trim());
});

test('Json format testing', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expectedResultJson.txt');

  expect(getDiff(filepath1, filepath2, 'json').trim()).toEqual(expected.trim());
});
