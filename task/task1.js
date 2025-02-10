const path = require('path');
const { access } = require('fs/promises');
const { writeFileAsync } = require("../utils/writeFile");
const { createFolderAsync } = require('../utils/createFolder');
const { fileExists } = require('../utils/existsFile');


// Написати функцію, яка створює файл з датою у назві log_yyyy-mm-dd.txt



exports.createLogFileWithDate = async (dirName) =>{
    try {
        const date = new Date().toISOString().split('.').at(0);
        const dateFormat = date.replaceAll(':','-');
        const pathFile = 'log_' + dateFormat + '.txt';
        const pathFileFull = path.resolve(dirName, pathFile) ;
        const dirFullName = path.resolve(dirName);
       if (!(await fileExists(dirFullName))) {
        await createFolderAsync(dirFullName);
       } 
        await writeFileAsync(pathFileFull, '');
    } catch (error) {
        console.log(error);
    }
}


