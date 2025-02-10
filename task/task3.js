const path = require('path')
const { readFileAsync } = require("../utils/readFile");
const { writeFileAsync } = require("../utils/writeFile");
const { fileExists } = require('../utils/existsFile');





exports.mergeFiles = async (dirName,file1, file2, fileNew) => {
try {
    const fullPath1 = path.resolve(dirName, file1);
    const fullPath2 = path.resolve(dirName, file2);
    const fullPathNew = path.resolve(dirName, fileNew);
    let data1 ='';
    let data2 ='';
    if (await fileExists(fullPath1)) {
        data1 = await readFileAsync(fullPath1);
    } 
    if (await fileExists(fullPath2)) {
        data2 = await readFileAsync(fullPath2);
    }
    
const mergeData = data1 + data2;
    await writeFileAsync(fullPathNew, mergeData);
} catch (error) {
    console.log(error);
}
}