import _ from 'lodash';
import getParseFile from './parse.js';
import formatDiff from './formatters/stylish.js';

const findDifferences = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const differences = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.isEqual(value1, value2)) {
      return { key, value: value1, type: 'unchanged' };
    }

    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, children: findDifferences(value1, value2), type: 'nested' };
    }

    if (_.has(data1, key) && !_.has(data2, key)) {
      return { key, value: value1, type: 'removed' };
    }

    if (!_.has(data1, key) && _.has(data2, key)) {
      return { key, value: value2, type: 'added' };
    }

    return {
      key, oldValue: value1, newValue: value2, type: 'changed',
    };
  });

  return differences;
};

const getDiff = (filePath1, filePath2) => {
  const parsedFirstFile = getParseFile(filePath1);
  const parsedSecondFile = getParseFile(filePath2);

  const diff = findDifferences(parsedFirstFile, parsedSecondFile);
  return formatDiff(diff); // Форматирование различий перед возвратом
};

export default getDiff;
