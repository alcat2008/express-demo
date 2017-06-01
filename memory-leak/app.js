var http = require('http');

var memwatch = require('memwatch-next');
var heapdump = require('heapdump');
// memwatch.on('leak', function(info) {
//   console.error('Memory leak detected: ', info);
// });
memwatch.on('leak', function(info) {
  console.error(info);
  var file = '/Users/alcat/github/node-demo/leak-' + process.pid + '-' + Date.now() + '.heapsnapshot';
  heapdump.writeSnapshot(file, function(err){
    if (err) console.error(err);
    else console.error('Wrote snapshot: ' + file);
  });
});

function leakyfunc(req) {
  // console.log(req);
}

var server = http.createServer(function (req, res) {
  for (var i=0; i<1000; i++) {
    server.on('request', leakyfunc);
  }

  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
server.setMaxListeners(0);
console.log('Server running at http://127.0.0.1:1337/. Process PID: ', process.pid);
