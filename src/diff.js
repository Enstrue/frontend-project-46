import _ from 'lodash';

const getDiff = (file1, file2) => {
  const result = [];

  for (let key in file1) {
    if (_.has(file2, key)) {
      if (file1[key] === file2[key]) {
        result.push(`${key}: ${file1[key]}`);
      } else {
        result.push(`- ${key}: ${file1[key]}`);
        result.push(`+ ${key}: ${file2[key]}`);
      }
    } else {
      result.push(`- ${key}: ${file1[key]}`);
    }
  }

  for (let key in file2) {
    if (!_.has(file1, key)) {
      result.push(`+ ${key}: ${file2[key]}`);
    }
  }
  const sortedResult = _.sortBy(result).join('\n');
  return sortedResult;
};

export default getDiff;
