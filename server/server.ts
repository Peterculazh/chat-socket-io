import express, { Request, Response } from 'express';
import next from 'next';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import config from '../config';
import { loadControllers, scopePerRequest } from 'awilix-express';
import container from './container';

const app = next({ dev: config.dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use(bodyParser.json({ limit: '10mb' }));
  server.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
  server.use(cookieSession({
    name: 'session',
    keys: [config.jwtSecret],
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days
  }));
  server.use(scopePerRequest(container));


  const files = 'controllers/**/*.' + (config.dev ? 'ts' : 'js');
  server.use(loadControllers(files, { cwd: __dirname }));

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res)
  });

  server.listen(config.port, (err: string) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${config.port}`)
  });
});

