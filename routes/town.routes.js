const express = require("express");
const router = express.Router();
const { addTown } = require("../controllers/town.controller");
const multiUpload = require("../middleware/multiUpload");

router.post("/", multiUpload, addTown);

module.exports = router;
