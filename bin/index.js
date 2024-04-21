import { Command } from 'commander';
import getDiff from '../src/diff.js';

let difference;

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filePath1>', 'path for first file')
  .argument('<filePath2>', 'path for second file')
  .action((filePath1, filePath2, options) => {
    // логика отвечающая за сравнение файлов
    difference = getDiff(filePath1, filePath2, options.format);
    console.log(difference);
  });

program.parse(process.argv);

export default program;
