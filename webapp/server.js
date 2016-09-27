var http = require('http');
var fs = require('fs');
var path = require('path');
var regoFunction = require('./rego.js');

http.createServer(function (request, response) {
    console.log('request starting...');
    console.log(request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    if (filePath == './rego') {
      var body = "";
      if (request.method == 'POST') {
        var ip = request.headers['x-forwarded-for'] ||
                 request.connection.remoteAddress;
        console.log("Submission from IP: " + ip + ' on ' + new Date());
        request.on('error', function(err) {
          console.log(err);
        }).on('data', function(chunk) {
          body += chunk;
          if (body.length > 1e6) {
            request.connection.destroy();
          }
        }).on('end', function() {

          var json = JSON.parse(body);
          console.log(json);

          var rego = regoFunction.createRego(json);
          var rc = rego.saveData();

          if (rc == 0) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end("Success", 'utf-8');
          } else {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end("Error saving data on server", 'utf-8');
          }
        })
      }

    } else {

      var extname = path.extname(filePath);
      var contentType = 'text/html';
      switch (extname) {
          case '.js':
              contentType = 'text/javascript';
              break;
          case '.css':
              contentType = 'text/css';
              break;
          case '.json':
              contentType = 'application/json';
              break;
          case '.png':
              contentType = 'image/png';
              break;
          case '.jpg':
              contentType = 'image/jpg';
              break;
          case '.wav':
              contentType = 'audio/wav';
              break;
      }

      fs.readFile(filePath, function(error, content) {
          if (error) {
              if(error.code == 'ENOENT'){
                  fs.readFile('./404.html', function(error, content) {
                      response.writeHead(200, { 'Content-Type': contentType });
                      response.end(content, 'utf-8');
                  });
              }
              else {
                  response.writeHead(500);
                  response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                  response.end();
              }
          }
          else {
              response.writeHead(200, { 'Content-Type': contentType });
              response.end(content, 'utf-8');
          }
      });

    }

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
