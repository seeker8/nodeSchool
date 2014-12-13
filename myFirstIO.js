var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2], {encoding:'utf8'});

console.log(fileContent.split('\n').length - 1);
