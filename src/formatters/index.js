import stylishFormatDiff from './stylish.js';
import plainFormatDiff from './plain.js';
import jsonFormatDiff from './json.js';

const formatters = {
  stylish: stylishFormatDiff,
  plain: plainFormatDiff,
  json: jsonFormatDiff,
};

const selectFormatter = (formatName) => {
  const formatter = formatters[formatName];
  if (!formatter) {
    throw new Error(`Formatter "${formatName} is not supported`);
  }
  return formatter;
};

export default selectFormatter;
