import { expect } from "chai";
import { myMiddleware } from "./index";

describe('index.ts', () => {
  describe('myMiddleware', () => {
    it('is a function', () => {
      const result = typeof myMiddleware;
      expect(result).to.equal('function');
    });
  });
});
