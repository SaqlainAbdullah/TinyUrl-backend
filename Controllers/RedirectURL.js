import { URLs } from "../Models/url.js";

export const RedirectURL = async (res, req) => {
  const { shortId } = req.params;
  try {
    const resUrls = await URLs.find({ _id: shortId });
    const element = resUrls[0];
    console.log(element);

    res.redirect(element.longUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
    });
  }
};
