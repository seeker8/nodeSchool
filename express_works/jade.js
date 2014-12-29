var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.argv[2],
    dir_path = process.argv[3];

app.set('view engine', 'jade');

//to use the directory provided by expressworks
app.set('views', dir_path);

/*
  to set your own views directory inside the the directory where your program is running
  app.set('views', path.join(__dirname, 'templates');
*/

app.get('/home', function(request, response){

    response.render('index', {date: new Date().toDateString()});
});

app.listen(port);
