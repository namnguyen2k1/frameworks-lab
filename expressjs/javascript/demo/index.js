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
  const status = 200;
  res.status(200).json({
    status,
    message: 'Success'
  });
});

// 404 handler
app.use((req, res) => {
  const status = 404;
  res.status(status).send({
    status,
    message: 'Not Found'
  });
});

// other errors handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = 500;
  res.status(status).json({
    status,
    message: 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
