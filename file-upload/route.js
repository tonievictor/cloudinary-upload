const express = require("express");
const router = express.Router();
const { upload_file } = require("./controller");

router.post("/", upload_file);

module.exports = router;
