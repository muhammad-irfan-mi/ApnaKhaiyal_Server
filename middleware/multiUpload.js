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

const phaseCount = 10;

const multiUpload = upload.fields([
  { name: "locationMap", maxCount: 1 },
  { name: "nocRegistry", maxCount: 1 },
  { name: "documents", maxCount: 10 },
  ...Array.from({ length: phaseCount }, (_, i) => ({ name: `phaseImages${i}`, maxCount: 15 })),
  ...Array.from({ length: phaseCount }, (_, i) => ({ name: `phaseVideo${i}`, maxCount: 1 })),
]);

module.exports = multiUpload;
