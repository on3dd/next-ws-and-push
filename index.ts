import express from 'express';
import next from 'next';

const port = Number(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.get('/a', (req, res) => {
  //   // @ts-ignore
  //   return app.render(req, res, '/a', req.query);
  // });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
