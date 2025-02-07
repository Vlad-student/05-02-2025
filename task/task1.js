const path = require('path');
const { writeFileAsync } = require("../utils/writeFile");

// Написати функцію, яка створює файл з датою у назві log_yyyy-mm-dd.txt




exports.createLogFileWithDate = async (dirName) =>{
    try {
        const date = new Date().toISOString().split('.').at(0);
        const dateFormat = date.replaceAll(':','-');
        const pathFile = 'log_' + dateFormat + '.txt';
        const pathFileFull = path.resolve(dirName, pathFile) ;
        await writeFileAsync(pathFileFull, '');
    } catch (error) {
        console.log(error);
    }
}


