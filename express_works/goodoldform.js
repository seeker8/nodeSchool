var express = require('express'),
    bodyparser = require('body-parser'),
    urlencoded = bodyparser.urlencoded({extended: false}),
    app = express();


app.post('/form', urlencoded, function(request, response){
    var reversed = request.body.str.split('').reverse().join('');
     response.send(reversed);
});

app.listen(process.argv[2]);

