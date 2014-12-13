var fs = require('fs'),
    path = require('path')
    files = [];

var readAndFilter = function(dir, ext, callback){
    fs.readdir(dir, function(error, list){
        if(error){
             return callback(error);
        }else{
             list.forEach(function(file){
                   if(path.extname(file) === '.' + ext){
                       files.push(file);
                   }
             });
       }
       return callback(null, files);
    });
}

module.exports = readAndFilter;
