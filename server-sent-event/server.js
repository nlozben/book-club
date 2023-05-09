let http = require('http');

function onDigits(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8080'
  });

  let i = 0;

  let timer = setInterval(write, 1000);
  write();

  function write() {
    i++;

    if (i === 4) {
      res.write('event: bye\ndata: byeaaaaa-bye\n\n');
      clearInterval(timer);
      res.end();
      return;
    }

    res.write('data: ' + i + '\n\n');

  }
}

function accept(req, res) {

  if (req.url === '/digits') {
    onDigits(req, res);
    return;
  }

}


if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}
