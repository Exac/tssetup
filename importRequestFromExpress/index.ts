import * as express from 'express';
import './express.aug';

const app = express();

export const myMiddleware = (req: express.Request, res: express.Response, next: any) => {
  if ('myCustomProperty' in req) {
    req.myCustomProperty = 'wew';
  }
  req.myCustomProperty = 'lad';
  next();
};

app.get('/', (req: express.Request, res: express.Response, _next: any) => {
  res.status(200).json({ message: 'root' });
});

app.get('/custom', myMiddleware, (req: express.Request, res: express.Response, _next: any) => {
  console.info(req.myCustomProperty);
  res.status(200).json({ message: 'success' });
});

app.listen(8000, () => {
  console.info('http://localhost:8000', 'http://localhost:8000/custom');
});
