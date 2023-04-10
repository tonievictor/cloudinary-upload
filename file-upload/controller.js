const cloudinary = require("../utilities/upload");

const create_product = async (req, res) => {
  // possible product categories [male, female, assesories, custom made]
  const file = req.files.image;

  try {
    if (!file) {
      return res.status(400).json({ error: "No File Selected" });
    }

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });

    return res.status(200).send({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
