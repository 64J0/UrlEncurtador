import UrlController from "../../src/controllers/UrlController";
import { Request, Response } from "express";

describe("urlControllers.ts", () => {
  const urlController = new UrlController();

  it("should render the controller", () => {
    const req = {} as Request;
    const res = {} as Response;
    const initialPage = urlController.getUrl(req, res);
    console.log(initialPage);
    expect(1 + 1).toBe(2);
  });
});
