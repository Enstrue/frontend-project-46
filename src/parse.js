const parseFile = (
  dataFromFirstFile,
  dataFromSecondFile,
  firstFileExtention,
  secondFileExtention,
) => {
  let parsedFirstFile;
  let parsedSecondFile;

  if (firstFileExtention === '.json') {
    parsedFirstFile = JSON.parse(dataFromFirstFile);
  }

  if (secondFileExtention === '.json') {
    parsedSecondFile = JSON.parse(dataFromSecondFile);
  }

  return { parsedFirstFile, parsedSecondFile };
};
export default parseFile;
