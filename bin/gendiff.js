import { Command } from 'commander';
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

    // логика отвечающая за сравнение файлов
    difference = getDiff(pathToFile1, pathToFile2);
    console.log(difference);
  });

program.parse(process.argv);

export default program;
