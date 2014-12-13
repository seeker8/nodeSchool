var fs = require('fs');

fs.readFile(process.argv[2], {encoding:'utf8'}, function(error, data){
     if(error){
         throw error
     }else{
         console.log(data.split('\n').length - 1);
     }
});
