import _ from 'lodash';

const getDiff = (file1, file2) => {
  const result = [];

  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const sortedKeys = _.sortBy(keys);

  sortedKeys.forEach((key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) {
        result.push(`${key}: ${file1[key]}`);
      } else {
        result.push(`- ${key}: ${file1[key]}`);
        result.push(`+ ${key}: ${file2[key]}`);
      }
    } else if (_.has(file2, key)) {
      result.push(`+ ${key}: ${file2[key]}`);
    } else {
      result.push(`- ${key}: ${file1[key]}`);
    }
  });
  return result;
};
export default getDiff;
