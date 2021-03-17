const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    const server = express();

    server.get('/*-for-sale/:title/:id', (req, res) => {
      const actualPage = `/details/${req.params.title}/${req.params.id}`;
      app.render(req, res, actualPage, { ...req.query });
    });

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, '0.0.0.0', (error) => {
      if (error) throw error;
      console.info('Ready on http://localhost:3000');
    });
  })
  .catch((error) => {
    if (error) {
      logger.error(error);
    }
    process.exit(1);
  });
