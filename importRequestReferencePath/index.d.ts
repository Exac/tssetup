export {};

declare module "express" {
  export interface Request {
    myCustomProperty?: string;
  }
}
