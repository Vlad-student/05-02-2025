const fs = require('fs/promises');

async function  readFileAsync(pathFile) {
    try {
    const data = await fs.readFile(pathFile, 'utf8');
    return data;
    // console.log('Data --->>>', data);
    
    } catch (error) {
        console.log('Error --->>>', error);
    }
};

module.exports = { readFileAsync };








// console.log(fs);
