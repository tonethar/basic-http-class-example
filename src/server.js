const http = require('http');
const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
// console.log(index);

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
  response.writeHead(200, { 'content-type': 'text/html' });
  response.write(index);
  response.end();
};

const bob = 'aa';

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
