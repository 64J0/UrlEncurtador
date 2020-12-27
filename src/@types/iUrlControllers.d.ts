import { Request, Response } from "express";
import IUrlConfig from './iUrlConfig';

export interface IInitialData {
  fullUrl: string;
  shortUrl: string;
  clicks: number;
}

interface IUrlControllers {
  initialData: IInitialData;
  urlConfig: IUrlConfig;
  getUrl: (req: Request, res: Response) => void;
  async postUrl: (req: Request, res: Response) => Promise<void>;
  async getShortUrl: (req: Request, res: Response) => Promise<void>;
}

export default IUrlControllers;
