import { Document } from "mongoose";

interface IUrl extends Document {
  clicksCount: number;
  fullUrl: string;
  shortUrl: string;
}

export default IUrl;
