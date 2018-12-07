import { Request } from 'express';
declare global {
  export namespace Express {
    export interface Request {
      myCustomProperty: string;
    }
  }
}

export { Request };
