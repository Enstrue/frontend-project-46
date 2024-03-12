const parseFile = (
  dataFromFirstFile,
  dataFromSecondFile,
) => {
  
  const parsedFirstFile = JSON.parse(dataFromFirstFile);
  const parsedSecondFile = JSON.parse(dataFromSecondFile);

  return { parsedFirstFile, parsedSecondFile };
};
export default parseFile;
