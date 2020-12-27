import mongoose from "mongoose";
import { Request, Response } from "express";

import urlConfig from "../config/urlConfig.json";

import IUrlController, { IInitialData } from '../@types/iUrlControllers';
import IUrlConfig from '../@types/iUrlConfig';
import IUrl from '../@types/iUrl';

const Url = mongoose.model<IUrl>("UrlSchema");

class UrlControllers implements IUrlController {
  initialData: IInitialData;
  urlConfig: IUrlConfig;

  constructor() {
    this.initialData = {
      fullUrl: "",
      shortUrl: "Resultado...",
      clicks: 0,
    };

    this.urlConfig = urlConfig;
  }

  getUrl = (req: Request, res: Response) => {
    return res
      .status(200)
      .append("Set-Cookie", "HttpOnly;Secure;SameSite=None")
      .render("index", { newUrl: this.initialData });
  };

  postUrl = async (req: Request, res: Response) => {
    const { origin } = req.headers;
    const { fullUrl } = req.body;
    const foundOne = await Url.findOne({ fullUrl });

    let baseUrl = this.urlConfig.baseUrlProd;

    if (origin) {
      baseUrl = /localhost/g.test(origin) ? this.urlConfig.baseUrlDev : this.urlConfig.baseUrlProd;
    }
  
    if (foundOne) {
      foundOne.shortUrl = baseUrl + foundOne.shortUrl;
      return res
        .status(200)
        .append("Set-Cookie", "HttpOnly;Secure;SameSite=None")
        .render("index", { newUrl: foundOne });
    }
  
    const newUrl = new Url({
      fullUrl: fullUrl,
      shortUrl: Date.now().toString(16),
      clicks: 0,
    });
  
    await newUrl.save();
    newUrl.shortUrl = baseUrl + newUrl.shortUrl;
    return res
      .status(200)
      .append("Set-Cookie", "HttpOnly;Secure;SameSite=None")
      .render("index", { newUrl: newUrl });
  };

  getShortUrl = async (req: Request, res: Response) => {
    const shortUrl = req.params.shortUrl;
    const response = await Url.findOne({ shortUrl });

    if (response) {
      return res
        .status(200)
        .append("Set-Cookie", "HttpOnly;Secure;SameSite=None")
        .redirect(response.fullUrl);
    }
    return res
      .status(404)
      .append("Set-Cookie", "HttpOnly;Secure;SameSite=None")
      .redirect("/");
  };
}

export default UrlControllers;
