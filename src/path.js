import path from 'path';

const conversionPath = (pathToFile) => {
  let absolutePath;
  if (path.isAbsolute(pathToFile)) {
    absolutePath = pathToFile;
  } else {
    absolutePath = path.resolve(pathToFile);
  }
  return absolutePath;
};
export default conversionPath;
