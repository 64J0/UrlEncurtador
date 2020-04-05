const info = require("../utils/info.json");
const mongoose = require("mongoose");
const Url = mongoose.model("UrlSchema");

let dataExample = {
  fullUrl: "",
  shortUrl: "Resultado...",
  clicks: 0,
};

// GET Url
exports.getUrl = (req, res) => {
  return res
    .status(200)
    .append("Set-Cookie", "HttpOnly;Secure;SameSite=None")
    .render("index", { newUrl: dataExample });
};

// POST Url
exports.postUrl = async (req, res) => {
  const { fullUrl } = req.body;
  const foundOne = await Url.findOne({ fullUrl });

  if (foundOne) {
    foundOne.shortUrl = info.baseUrl + foundOne.shortUrl;
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
  newUrl.shortUrl = info.baseUrl + newUrl.shortUrl;
  return res
    .status(200)
    .append("Set-Cookie", "HttpOnly;Secure;SameSite=None")
    .render("index", { newUrl: newUrl });
};

// GET Short Url from DB
exports.getShortUrl = async (req, res) => {
  //console.log(req.params);
  const shortUrl = req.params.shortUrl;
  const response = await Url.findOne({ shortUrl });
  //console.log(response.fullUrl);

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
