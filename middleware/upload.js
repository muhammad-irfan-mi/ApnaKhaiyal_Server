const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "uploads/";
    if (file.mimetype === "application/pdf") folder += "documents";
    else if (file.mimetype.startsWith("image/")) folder += "images";
    else if (file.mimetype.startsWith("video/")) folder += "videos";
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;
