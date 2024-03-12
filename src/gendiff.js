import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import parseFile from './parse';

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
    const absolutePath1 = path.resolve(filePath1);
    const absolutePath2 = path.resolve(filePath2);

    // читаю фаилы для дальнейшего парсинга
    const dataFromFirstFile = fs.readFileSync(absolutePath1, 'utf-8');
    const dataFromSecondFile = fs.readFileSync(absolutePath2, 'utf-8');

    // определю формат
    const firstFileExtention = path.extname(absolutePath1);
    const secondFileExtention = path.extname(absolutePath2);

    // получаем распарсенные данные
    const { parsedFirstFile, parsedSecondFile } = parseFile(
      dataFromFirstFile,
      dataFromSecondFile,
      firstFileExtention,
      secondFileExtention,
    );
    // логика отвечающая за сравнение файлов
  });

program.parse(process.argv);
