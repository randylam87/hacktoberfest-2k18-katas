export const listFiles = (data, fileType) => {
  if (!data || !data.dir) throw 'Incorrect data input';
  const files = [];

  const extractFiles = (directory, currentFiles) => {
    const { files } = directory;
    files.forEach(file => {
      if (typeof file === 'string') {
        if (fileType) {
          if (file.indexOf(fileType) > -1){
            currentFiles.push(file);
          }
        } else {
          currentFiles.push(file);
        }
      } else {
        extractFiles(file, currentFiles);
      }
    })
  }
  extractFiles(data, files);
  return files;
};
