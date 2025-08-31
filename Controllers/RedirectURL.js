import { URLs } from "../Models/url.js";

export const RedirectURL = async (req, res) => {
  const { shortId } = req.params;
  try {
    const urlDoc = await URLs.findById(shortId);
    if (!urlDoc) {
      return res.status(404).json({ ok: false, error: "URL not found" });
    }

    return res.redirect(urlDoc.longUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error: "Error during redirect",
    });
  }
};
