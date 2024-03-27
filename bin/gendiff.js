import { Command } from 'commander';
import fs from 'fs';
import parseFile from '../src/parse.js';
import getDiff from '../src/diff.js';
import conversionPath from '../src/path.js';

let difference;

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filePath1>', 'path for first file')
  .argument('<filePath2>', 'path for second file')
  .action((filePath1, filePath2) => {
    // получаю пути к фаилам
    const pathToFile1 = conversionPath(filePath1);
    const pathToFile2 = conversionPath(filePath2);

    // читаю фаилы для дальнейшего парсинга
    const dataFromFirstFile = fs.readFileSync(pathToFile1, 'utf-8');
    const dataFromSecondFile = fs.readFileSync(pathToFile2, 'utf-8');

    // определю формат
    // const firstFileExtention = path.extname(absolutePath1);
    // const secondFileExtention = path.extname(absolutePath2);

    // получаем распарсенные данные
    const parsedFirstFile = parseFile(dataFromFirstFile);
    const parsedSecondFile = parseFile(dataFromSecondFile);

    // логика отвечающая за сравнение файлов
    difference = getDiff(parsedFirstFile, parsedSecondFile);
    console.log(difference);
  });

program.parse(process.argv);

export default program;
