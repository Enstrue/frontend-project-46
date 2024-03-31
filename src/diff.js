import _ from 'lodash';
import getParseFile from './parse.js';

const getDiff = (filePath1, filePath2) => {
  let result = '';

  const parsedFirstFile = getParseFile(filePath1);
  const parsedSecondFile = getParseFile(filePath2);

  const keys = _.union(Object.keys(parsedFirstFile), Object.keys(parsedSecondFile));
  const sortedKeys = _.sortBy(keys);

  sortedKeys.forEach((key) => {
    if (_.has(parsedFirstFile, key) && _.has(parsedSecondFile, key)) {
      if (parsedFirstFile[key] === parsedSecondFile[key]) {
        // Если значения равны, добавляем их в результат
        result += `${key}: ${parsedFirstFile[key]}\n`;
      } else {
        // Если значения различаются, добавляем их с маркерами различий
        result += `- ${key}: ${parsedFirstFile[key]}\n`;
        result += `+ ${key}: ${parsedSecondFile[key]}\n`;
      }
    } else if (_.has(parsedSecondFile, key)) {
      // Если ключ только во втором файле, добавляем его соответствующее значение в результат
      result += `+ ${key}: ${parsedSecondFile[key]}\n`;
    } else {
      // Если ключ только в первом файле, добавляем его соответствующее значение в результат
      result += `- ${key}: ${parsedFirstFile[key]}\n`;
    }
  });
  // Возвращаем сгенерированную строку с различиями
  return result;
};
export default getDiff;
