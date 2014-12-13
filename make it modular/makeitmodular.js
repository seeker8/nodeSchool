var readAndFilter = require('./readandfilter'),
    directory = process.argv[2],
    extension = process.argv[3];

readAndFilter(directory, extension, function(error, files){
    files.forEach(function(file){
         console.log(file);
    });
});
