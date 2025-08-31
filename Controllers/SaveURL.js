import { URLs } from "../Models/url.js";

export const SaveURL = async (req, res) => {
  console.log(req.body);
  const { longUrl } = req.body;
  try {
    const newURL = new URLs({ longUrl });
    const savedRef = await newURL.save();

    // Use Railway domain here
    const shortURLId = savedRef._id;
    const shortURL = `https://tinyurl-backend-production.up.railway.app/url/${shortURLId}`;

    res.status(200).json({
      ok: true,
      shortUrl: shortURL,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      error: "Server error while saving URL",
    });
  }
};
