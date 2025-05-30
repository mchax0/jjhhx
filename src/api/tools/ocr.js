const axios = require("axios");

module.exports = (app) => {
  async function ocr(url) {
    try {
      const response = await axios.get(`https://api.diioffc.web.id/api/tools/ocr?url=${encodeURIComponent(url)}`);
      return response.data.result;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Unable to fetch data");
    }
  }

  app.get("/tools/ocr", async (req, res) => {
    const { imageUrl } = req.query;
    
    if (!imageUrl) {
      return res.status(400).json({ status: false, error: "imageUrl is required" });
    }

    try {
      const result = await ocr(imageUrl);
      res.status(200).json({
        status: true,
        result,
      });
    } catch (error) {
      res.status(500).json({ status: false, error: error.message });
    }
  });
};
