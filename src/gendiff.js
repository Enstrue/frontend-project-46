import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filePath1>', 'path for first file')
  .argument('<filePath2>', 'path for second file');
program.parse(process.argv);

//
const [filePath1, filePath2] = program.args;
export { filePath1, filePath2 };
