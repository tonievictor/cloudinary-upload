const cloudinary = require("../utilities/upload");

const upload_file = async (req, res) => {
  const file = req.files.image;

  try {
    if (!file) {
      return res.status(400).json({ error: "No File Selected" });
    }

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      quality: 60,
      width: 500,
      height: 500,
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

module.exports = { upload_file };
