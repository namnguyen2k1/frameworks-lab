## Setup Node.js Project with Express

- Create project folder:

```bash
mkdir demo-javascript
cd demo-javascript
```

- Init project:

```bash
npm init -y
```

- Install dependencies:

```bash
npm install express morgan cors helmet
npm install --save-dev nodemon
```

- Create `index.js`:

```js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const PORT = 3000;

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// routes
app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'Success' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 404, message: 'Not Found' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 500, message: 'Internal Server Error' });
});

app.listen(PORT, () => {
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
