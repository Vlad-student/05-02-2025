const { rm } = require("fs/promises");
const { fileExists } = require("./existsFile");



async function rmFileAsync(pathFile) {
    try {
        if (await fileExists(pathFile)) {
            await rm(pathFile)
        } else {
            console.log('file does not exists');
            
        }
    } catch (error) {
        console.log(error);
        
    }
}