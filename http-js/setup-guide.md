## Setup Node.js Project with Express

- Create project folder:

```bash
mkdir project-http-js
cd project-http-js
```

- Init project:

```bash
npm init -y
```

- Install dependencies:

```bash
npm install --save-dev nodemon
```

- Create `index.js`:

```js
const http = require('http');

const PORT = 3000;

function configurationLogger(req, res) {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} - ${ms}ms`);
  });
}

function configurationCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function configurationSecurity(res) {
  res.setHeader('X-DNS-Prefetch-Control', 'off');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
}

const server = http.createServer((req, res) => {
  configurationLogger(req, res);
  configurationCORS(res);
  configurationSecurity(res);

  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // routes
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 200, message: 'Success' }));
  } else {
    // 404 handler
    res.writeHead(404);
    res.end(JSON.stringify({ status: 404, message: 'Not Found' }));
  }
});

// other errors handler
server.on('error', err => {
  console.error('Internal Server Error', err);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

- Update `package.json`

```json
"scripts": {
  "start": "nodemon index.js",
}
```

- Run project:

```bash
npm start
```

- Open [http://localhost:3000](http://localhost:3000) → you will see:

```json
{ "status": 200, "message": "Success" }
```
