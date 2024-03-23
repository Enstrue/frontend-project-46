#!/usr/bin/env node

import path from 'path';
import genDiff from '../src/gendiff.js';

const [filePath1, filePath2] = process.argv.slice(2);
const absolutePath1 = path.resolve(filePath1);
const absolutePath2 = path.resolve(filePath2);

genDiff(absolutePath1, absolutePath2);
