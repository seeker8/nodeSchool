
var count = 0;
for(var i = 2, length = process.argv.length; i < length;i++){
    count += Number(process.argv[i]);
}
console.log(count); 
