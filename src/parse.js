import yaml from 'js-yaml';

const parseJson = (content) => JSON.parse(content);

const parseYaml = (content) => yaml.load(content);

const getParseFile = (content, extension) => {
  switch (extension) {
    case '.json':
      return parseJson(content);
    case '.yaml':
    case '.yml':
      return parseYaml(content);
    default:
      throw new Error(`Unsupported file extension: ${extension}`);
  }
};
export default getParseFile;
