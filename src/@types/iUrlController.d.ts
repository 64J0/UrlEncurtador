import { Request, Response } from "express";
import IUrlConfig from './iUrlConfig';

export interface IInitialData {
  fullUrl: string;
  shortUrl: string;
  clicks: number;
}

interface IUrlController {
  initialData: IInitialData;
  urlConfig: IUrlConfig;
  getUrl: (req: Request, res: Response) => void;
  postUrl: (req: Request, res: Response) => Promise<void>;
  getShortUrl: (req: Request, res: Response) => Promise<void>;
}

export default IUrlController;
