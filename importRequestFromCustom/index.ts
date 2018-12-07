import express = require('express');
import { Response, NextFunction } from 'express';
import { Request } from './custom';

const app = express();

export const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if ('myCustomProperty' in req) {
    req.myCustomProperty = 'wew';
  }
  req.myCustomProperty = 'lad';
  next();
};

app.get('/', (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ message: 'root' });
});

app.get('/custom', myMiddleware, (req: Request, res: Response, _next: NextFunction) => {
  console.info(req.myCustomProperty);
  res.status(200).json({ message: 'success' });
});

app.listen(8000, () => {
  console.info('http://localhost:8000', 'http://localhost:8000/custom');
});
