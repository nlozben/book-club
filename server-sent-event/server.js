// let http = require('http');

function onDigits(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': 'http://192.168.4.64:8080'
  });

  let i = 0;

  let timer = setInterval(write, 1000);
  write();

  function write() {
    i++;

    if (i === 4) {
      res.write('event: bye\ndata: byeaaaaa-bye\n\n');
      clearInterval(timer);
      // res.end();
      return;
    }

    res.write('data: ' + i + '\n\n');

  }
}

function onPopulateDialer(req, res) {
	res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': 'http://192.168.4.64:8080'
  });

  res.write('data: ' + 'hello' + '\n\n');
  // res.write('data', `${req.params.fullName}`, '\n\n');
  // console.log(req.params);
  // res.write('data: ' + req + '\n\n');

}

// function accept(req, res) {

//   if (req.url === '/digits') {
//     onDigits(req, res);
//     return;
//   }

//   if (req.url === '/populate_dialer/:fullName') {
// 		onPopulateDialer(req, res);
// 		return;
//   }

// }


// if (!module.parent) {
//   http.createServer(accept).listen(8080);
// } else {
//   exports.accept = accept;
// }


// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })


var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.get('/digits', function(req, res) {
    onDigits(req, res)
});

app.get('/populate_dialer', function(req, res) {
  console.log(req.body)
    onPopulateDialer(req, res);
});


server.listen(8080, 'localhost');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});