const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const HOST = '0.0.0.0';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.json': 'application/json',
};

function tryServeFile(filePath, res) {
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    }
  });
}

const REDIRECTS = {
  '/consultor-inteligencia-artificial-comunicacion-corporativa':
    '/consultoria-inteligencia-artificial-comunicacion-corporativa',
  '/consultor-inteligencia-artificial-comunicacion-corporativa.html':
    '/consultoria-inteligencia-artificial-comunicacion-corporativa',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  if (REDIRECTS[urlPath]) {
    res.writeHead(301, { Location: REDIRECTS[urlPath] });
    res.end();
    return;
  }

  if (urlPath === '/') {
    urlPath = '/index.html';
  }

  const filePath = path.join(__dirname, urlPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      const htmlPath = filePath + '.html';
      tryServeFile(htmlPath, res);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
