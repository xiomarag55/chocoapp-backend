const express = require("express");
const router = express.Router();
const Utils = require("../controllers/utils");

router.get("", Utils.ping);

module.exports = router;