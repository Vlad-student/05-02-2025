// const { createLogFileWithDate } = require("./task/task1");
// const { getListFiles } = require("./task/task2");

const { mergeFiles } = require("./task/task3");

// getListFiles('logs');
// createLogFileWithDate('test');

mergeFiles('content' ,'test01.txt', 'test02.txt', 'merge.txt')
