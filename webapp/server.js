var http = require('http');
var fs = require('fs');
var path = require('path');
var regoFunction = require('./rego.js');

regoFunction.initialise();

http.createServer(function (request, response) {
    console.log('request starting...');
    console.log(request.url);

    var filePath = '.' + request.url;

    filePath = filePath.split('?');
    var params = filePath[1];
    filePath = filePath[0];

    console.log(filePath);
    console.log(params);

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

          if (regoFunction.getNumberOfChildren() > 155) {
            console.log("Rego already full. Above was not saved");
            response.writeHead(503, { 'Content-Type': 'text/html' });
            response.end("Registration full", 'utf-8');
          } else {
            var rego = regoFunction.createRego(json);
            rego.saveData()
            .then(
              function fullfilled(result) {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end("Success", 'utf-8');
              },
              function rejected(reason) {
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end("Error saving data on server", 'utf-8');
              }
            );
          }
        })
      }

    } else if (filePath == './registrations' || filePath.substring(0,15) == './registration/') {
      var registration = regoFunction.createGetter();
      if (filePath == './registrations') {
        registration.getData(null)
        .then(
          function fullfilled(json) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(json));
          },
          function rejected(reason) {
            console.log(reason);
          }
        );
      } else {
        var filePathArray = filePath.split('/');
        console.log(filePathArray[2]);
        registration.getData(filePathArray[2])
        .then(
          function fullfilled(json) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(json));
          },
          function rejected(reason) {
            console.log(reason);
          }
        );
      }
    } else if (filePath == './numberOfChildren') {
      var paramArray = params.split('=');

      if (paramArray[0] === 'regoID' && paramArray[1] === '4X983iidXieZ73C') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end();
      } else {
        if (regoFunction.getNumberOfChildren() < 135) {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end();
        } else {
          response.writeHead(500, { 'Content-Type': 'text/html' });
          response.end();
        }
      }
    } else if (filePath == './preRegistration') {

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
          console.log(json.email);

          regoFunction.saveEmail(json)
          .then(
            function fullfilled(result) {
              response.writeHead(200, { 'Content-Type': 'text/html' });
              response.end();
            },
            function rejected(reason) {
              response.writeHead(500, { 'Content-Type': 'text/html' });
              response.end();
            }
          );
        })
      }
    } else if (filePath == './registrations/download') {
      console.log('Download');
      regoFunction.download()
      .then(
        function fullfilled(result) {
          console.log('Download success');
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end(result, 'utf-8');
        },
        function rejected(reason) {
          console.log('Download failed');
          response.writeHead(500);
          response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
        }
      );
    } else if (filePath == './registrations/downloadChild') {
      console.log('Child');
      regoFunction.downloadChild()
      .then(
        function fullfilled(result) {
          console.log('Download success');
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end(result, 'utf-8');
        },
        function rejected(reason) {
          console.log('Download failed');
          response.writeHead(500);
          response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
        }
      );
    } else {

      console.log(filePath);

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
                  console.log("filepath: " + filePath);
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

}).listen(3125);
console.log('Server running at http://127.0.0.1:3125/');
