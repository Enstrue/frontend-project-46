import stylishFormatDiff from './stylish.js';
import plainFormatDiff from './plain.js';

const formatters = {
  stylish: stylishFormatDiff,
  plain: plainFormatDiff,
};

const selectFormatter = (formatName) => {
  const formatter = formatters[formatName];
  if (!formatter) {
    throw new Error(`Formatter "${formatName} is not supported`);
  }
  return formatter;
};

export default selectFormatter;
