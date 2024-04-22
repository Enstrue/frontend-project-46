#!/usr/bin/env node

import { Command } from 'commander';
import getDiff from '../src/diff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filePath1> <filePath2>', 'path for files')
  .action((filePath1, filePath2, options) => {
    // логика отвечающая за сравнение файлов
    const difference = getDiff(filePath1, filePath2, options.format);
    console.log(difference);
  });

program.parse(process.argv);

export default program;
