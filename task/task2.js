const path = require('path');
const { readDirAsync } = require("../utils/readDir");

exports.getListFiles = async (dirName) => {
    try {
        const pathDir = path.resolve(dirName);
      const listFile = await readDirAsync(pathDir); 
      console.log(listFile);
      
    } catch (error) {
     console.log('error --->>>', error);
        
    }
}
