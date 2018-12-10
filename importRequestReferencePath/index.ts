/// <reference path="./index.d.ts" />
import { Request, Response, NextFunction } from "express";
import * as express from 'express';
// import './express.aug';

// const app = require('express');
const app = express();

export const myMiddleware = (req: Request, res: Response, next: any) => {
  if ('myCustomProperty' in req) {
    req.myCustomProperty = 'wew';
  }
  req.myCustomProperty = 'lad';
  next();
};

app.get('/', (req, res: Response, _next: any) => {
  res.status(200).json({ message: 'root' });
});

app.get('/custom', myMiddleware, (req: Request, res: Response, _next: any) => {
  if(req.myCustomProperty) {
    console.info(req.myCustomProperty);
  }
  res.status(200).json({ message: 'success' });
});

app.listen(8000, () => {
  console.info('http://localhost:8000', 'http://localhost:8000/custom');
});
